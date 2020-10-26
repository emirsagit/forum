<?php

namespace App\Http\Controllers;

use App\Models\Thread;
use Illuminate\Http\Request;

class RepliesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    } 

    public function store(Thread $thread)
    {
        $this->validate(request(), [
            'body' => ['required', 'string', 'min:8'],
        ]);
        $thread->addReply([
            'body' => request('body'),
            'user_id' => auth()->user()->id
        ]);

        return back()->with('success', 'Yorumunuz Kaydedildi');
    } 
}
