<?php

namespace App\Http\Controllers;

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
        $this->middleware(['auth', 'verified'])->except(['index', 'show', 'channel', 'create']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ThreadFilters $filters)
    {
        $threads = $this->filterBy($filters);

        $threads = $this->get($threads);

        $trendings = $threads->sortByDesc('visits_count')->take(5);

        // $trendings = DB::table('threads')
        // ->select(['threads.*', 'channels.slug as channel.slug'])
		// ->addSelect(DB::raw('count(visits.visit_id) as visits_count'))
        // ->from('threads')
        // ->join('channels', function($join) {
		// 	$join->on('channels.id', '=', 'threads.channel_id');
		// 	})
		// ->join('visits', function($join) {
		// 	$join->on('threads.id', '=', 'visits.visit_id');
		// 	})
		// ->groupBy('visits.visit_id')
		// ->orderByRaw('visits_count DESC')
        // ->limit(5)
        // ->get();
        
        // dd($trendings);

        if (request()->wantsJson()) {
            return $threads;
        }

        return view('threads.index', ['threads' => $threads, 'trendings' => $trendings]);
    }


    public function channel(Channel $channel, ThreadFilters $filters)
    {
        $threads = $this->filterBy($filters);

        $threads = $threads->where('channel_id', $channel->id);

        $threads = $this->get($threads);

        $trendings = $threads->sortByDesc('visits_count')->take(5);

        if (request()->wantsJson()) {
            return $threads;
        }

        return view('threads.index', ['threads' => $threads, 'trendings' => $trendings, 'channel' => $channel]);
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
        $thread = Thread::create([
            'user_id' => auth()->user()->id,
            'channel_id' => $request->channel_id,
            'title' => $request->title,
            'body' => $request->body,
            'editors_data' => $request->body
        ]);

        $thread->subscribe();

        return back()->with('message', 'Başarıyla kaydedildi');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function show($channel, Thread $thread)
    {
        $thread->append('isSubscribed');

        $thread->recordVisit($_SERVER['REMOTE_ADDR']);

        $thread->load('bestReply');

        $replies = $thread->replies()->with(['owner', 'thread', 'favourites', 'mentionedUser'])->paginate(config('paginate.paginate.replies'));

        return view('threads.show', ['thread' => $thread, 'replies' => $replies]);
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

    protected function filterBy($filters)
    {
        return Thread::filter($filters);
    }

    protected function get($threads)
    {
        return $threads->orderByDesc('updated_at')->with('owner')->withCount('visits')->paginate(config('paginate.paginate.threads'));
    } 
}
