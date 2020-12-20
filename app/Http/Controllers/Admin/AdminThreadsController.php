<?php

namespace App\Http\Controllers\Admin;

use App\Models\Thread;
use App\Models\Channel;
use App\Rules\SpamFree;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Rules\EditorJsValidationRules;

class AdminThreadsController extends Controller
{
    public function index()
    {
        return view('admin.threads.index', [
            'threads' => Thread::with(['channel'])->latest()->get(),
            'channels' => Channel::get()
        ]);
    }

    public function destroy(Thread $thread)
    {
        $thread->delete();
    }

    public function update(Thread $thread, Request $request)
    {
        $request->validate([
            'title' => ['required', 'string', 'min:8',  new SpamFree],
            'body' => ['required', new EditorJsValidationRules],
            'channel_id' => ['required', 'exists:channels,id'],
        ]);
        $thread->update([
            'title' => $request->title,
            'body' => $request->body,
            'channel_id' => $request->channel_id,
            'editors_data' => $request->body,
            'thread_title' => $request->thread_title,
            'thread_description' => $request->thread_description,
        ]);

        return $thread->load('channel');
    } 

    public function store(Request $request)
    {
        $request->validate([
            'title' => ['required', 'string', 'min:8',  new SpamFree],
            'body' => ['required', new EditorJsValidationRules],
            'channel_id' => ['required', 'exists:channels,id'],
        ]);

        $thread = Thread::create([
            'user_id' => auth()->user()->id,
            'channel_id' => $request->channel_id,
            'title' => $request->title,
            'body' => $request->body,
            'editors_data' => $request->body,
            'thread_title' => $request->thread_title,
            'thread_description' => $request->thread_description,
        ]);

        $thread->subscribe();

        return $thread->load('channel');
    } 
}
