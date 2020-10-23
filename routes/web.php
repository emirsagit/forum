<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChannelController;
use App\Http\Controllers\RepliesController;
use App\Http\Controllers\ThreadsController;
use App\Http\Controllers\FavouritesController;


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

Auth::routes();

Route::get('/channels', [ChannelController::class, 'index']);

Route::get('/threads/{channel}/{thread}', [ThreadsController::class, 'show'])->name('threads.show');
Route::resource('threads',  ThreadsController::class)->except([
    'show'
]);

Route::get('/threads/{channel}', [ThreadsController::class, 'index'])->name('channel.index');
Route::post('/threads/{thread}/replies', [RepliesController::class, 'store'])->name('reply.store');
Route::post('/threads/{reply}/favourites', [FavouritesController::class, 'store'])->name('favourite.store');
