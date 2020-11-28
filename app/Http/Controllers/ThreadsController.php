<?php

namespace App\Http\Controllers;

use App\Trending;
use App\Models\Thread;
use App\Models\Channel;
use App\Rules\SpamFree;
use App\Rules\Recaptcha;
use Illuminate\Http\Request;
use App\Filters\ThreadFilters;
use App\Rules\EditorJsValidationRules;

class ThreadsController extends Controller
{

    public function __construct()
    {
        $this->middleware(['auth', 'verified'])->except(['index', 'show']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Channel $channel, ThreadFilters $filters)
    {
        $threads = $this->getThreads($channel, $filters);

        $trendings= Thread::orderBy('visits_count', 'desc')->take(5)->get();

        if (request()->wantsJson()) {
            return $threads;
        }

        return view('threads.index', ['threads' => $threads, 'trendings' => $trendings]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('threads.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Recaptcha $recaptcha)
    {  
        $this->validate(request(), [
            'title' => ['required', 'string', 'min:8',  new SpamFree],
            'channel_id' => ['required', 'exists:channels,id'],
            'recaptcha' => ['required', $recaptcha],
            'body' => ['required', new EditorJsValidationRules]
        ]);  
        // $editorJsValidation = new EditorJsValidation($request->body);
        // $body = $editorJsValidation->get();    
        Thread::create([
            'user_id' => auth()->user()->id,
            'channel_id' => $request->channel_id,
            'title' => $request->title,
            'body' => $request->body,
            'editors_data' => $request->body
        ]);

        return back()->with('message', 'Başarıyla kaydedildi');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function show($channel, Thread $thread, Trending $trending)
    {
        $thread->append('isSubscribed');

        $trending->push($thread);

        $thread->increment('visits_count', 1);

        $thread->load(['bestReply', 'replies']);

        return view('threads.show', ['thread' => $thread]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function edit(Thread $thread)
    {
        return view('threads.edit', ['thread' => $thread]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function update(Thread $thread, Request $request)
    {
        $this->authorize('update', $thread);

        $request->validate([
            'title' => ['required', 'string', 'min:8',  new SpamFree],
            'body' => ['required', new EditorJsValidationRules],
            'channel_id' => ['required', 'exists:channels,id'],
        ]);
        $thread->update([
            'title' => $request->title,
            'body' => $request->body,
            'channel_id' => $request->channel_id,
            'editors_data' => $request->body
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function destroy(Thread $thread)
    {
        $this->authorize('update', $thread);

        $thread->delete();

        return redirect('/threads')->with('message', 'Konu başarıyla silindi');
    }


    protected function getThreads($channel, $filters)
    {
        $threads = Thread::filter($filters);

        if ($channel->exists) {
            $threads = $threads->where('channel_id', $channel->id);
        }

        return $threads->latest()->with('owner')->paginate(30);
    }
}
