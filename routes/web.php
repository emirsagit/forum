<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\ChannelController;
use App\Http\Controllers\RepliesController;
use App\Http\Controllers\ThreadsController;
use App\Http\Controllers\ProfilesController;
use App\Http\Controllers\FavouritesController;
use App\Http\Controllers\BestRepliesController;
use App\Http\Controllers\LockThreadsController;
use App\Http\Controllers\ThreadImagesController;
use App\Http\Controllers\Api\UserAvatarsController;
use App\Http\Controllers\UserNotificationsController;
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
Route::resource('threads',  ThreadsController::class)->except([
    'show'
]);

Route::get('/channels', [ChannelController::class, 'index']);
Route::get('/search', [SearchController::class, 'index'])->name('search');


Route::get('/threads/{channel}/{thread}', [ThreadsController::class, 'show'])->name('threads.show');
Route::get('/threads/{channel}/{thread}/replies', [RepliesController::class, 'index'])->name('replies.index');
Route::post('/threads/{channel}/{thread}/subscribe', [ThreadSubscriptionsController::class, 'store'])->name('subscribe.store');
Route::delete('/threads/{channel}/{thread}/subscribe', [ThreadSubscriptionsController::class, 'destroy'])->name('subscribe.destroy');

Route::get('/threads/{channel}', [ThreadsController::class, 'index'])->name('channel.index');


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
Route::post('/api/thread/upload/images', [ThreadImagesController::class, 'store'])->name('thread.image.store');
