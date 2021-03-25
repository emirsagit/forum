<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogsController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\ChannelController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\RepliesController;
use App\Http\Controllers\ThreadsController;
use App\Http\Controllers\ProfilesController;
use App\Http\Controllers\FavouritesController;
use App\Http\Controllers\BestRepliesController;
use App\Http\Controllers\LockThreadsController;
use App\Http\Controllers\BlogChannelsController;
use App\Http\Controllers\Admin\AdminHomeController;
use App\Http\Controllers\Api\UserAvatarsController;
use App\Http\Controllers\Admin\AdminBlogsController;
use App\Http\Controllers\Admin\AdminUsersController;
use App\Http\Controllers\Admin\AdminImagesController;
use App\Http\Controllers\Admin\AdminSliderController;
use App\Http\Controllers\UserNotificationsController;
use App\Http\Controllers\Admin\AdminThreadsController;
use App\Http\Controllers\Admin\AdminChannelsController;
use App\Http\Controllers\Admin\AdminSettingsController;
use App\Http\Controllers\ThreadSubscriptionsController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes(['verify' => true]);

Route::get('/',  [ThreadsController::class, 'index']);

Route::resource('/blog',  BlogsController::class)->except([
    'show'
]);

Route::get('/blogs/channels/{channel}', [BlogChannelsController::class, 'index']);

Route::get('/blogs/{channel}/{blog}', [BlogsController::class, 'show'])->name('blogs.show');


Route::get('/blogs/{channel}', [BlogsController::class, 'channel'])->name('blog.channel.index');

Route::resource('/threads',  ThreadsController::class)->except([
    'show'
]);
Route::get('/threads/{channel}/{thread}', [ThreadsController::class, 'show'])->name('threads.show');


Route::get('/channels', [ChannelController::class, 'index']);


Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

Route::get('/search', [SearchController::class, 'index'])->name('search');


Route::get('/threads/{channel}/{thread}/replies', [RepliesController::class, 'index'])->name('replies.index');
Route::post('/threads/{channel}/{thread}/subscribe', [ThreadSubscriptionsController::class, 'store'])->name('subscribe.store');
Route::delete('/threads/{channel}/{thread}/subscribe', [ThreadSubscriptionsController::class, 'destroy'])->name('subscribe.destroy');

Route::get('/threads/{channel}', [ThreadsController::class, 'channel'])->name('channel.index');


Route::post('/threads/{thread}/replies', [RepliesController::class, 'store'])->name('reply.store');

Route::post('/best-reply/{reply}', [BestRepliesController::class, 'store'])->name('best_reply.store');
Route::delete('/best-reply/{reply}', [BestRepliesController::class, 'destroy'])->name('best_reply.destroy');

Route::post('/thread-lock/{thread}', [LockThreadsController::class, 'store'])->name('thread_lock.store');
Route::delete('/thread-lock/{thread}', [LockThreadsController::class, 'destroy'])->name('thread_lock.delete');

Route::delete('/replies/{reply}', [RepliesController::class, 'destroy'])->name('reply.destroy');
Route::patch('/replies/{reply}', [RepliesController::class, 'update'])->name('reply.update');

Route::post('/threads/{reply}/favourites', [FavouritesController::class, 'store'])->name('favourite.store');
Route::delete('/threads/{reply}/favourites', [FavouritesController::class, 'destroy'])->name('favourite.destroy');

Route::get('/profiles/{user}', [ProfilesController::class, 'show'])->name('profiles.show');
Route::delete('/profiles/{user}/notifications/{notification}', [UserNotificationsController::class, 'destroy'])->name('notification.destroy');
Route::get('/profiles/{user}/notifications', [UserNotificationsController::class, 'index'])->name('notifications.index');

Route::post('/api/profiles/{user}/avatar', [UserAvatarsController::class, 'store'])->name('avatar.store');

Route::prefix('/admin')->middleware(['auth', 'admin'])->group(function () {
    Route::get('/', [AdminHomeController::class, 'index'])->name('admin.index');
    Route::resource('/channels', AdminChannelsController::class)->except(['show', 'edit']);
    Route::resource('/threads', AdminThreadsController::class, ['as' => 'admin'])->except(['show', 'edit']);
    Route::resource('/blogs', AdminBlogsController::class, ['as' => 'admin'])->except(['show', 'edit']);
    Route::resource('/users', AdminUsersController::class, ['as' => 'admin'])->except(['show', 'edit']);
    Route::post('/users/search', [SearchController::class, 'users']);
    Route::post('/threads/search', [SearchController::class, 'threads']);
    Route::post('/blogs/search', [SearchController::class, 'blogs']);
    Route::post('/settings/upload', [AdminSettingsController::class, 'upload']);
    Route::post('/blogs/{blog}/slider', [AdminSliderController::class, 'update']);
    Route::resource('/settings', AdminSettingsController::class, ['as' => 'admin'])->except(['show', 'edit']);
    Route::post('/upload/images', [AdminImagesController::class, 'store'])->name('image.store');
});
