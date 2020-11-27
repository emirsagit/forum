<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Reply;
use App\Models\Thread;
use App\Rules\SpamFree;
use App\Http\Requests\ReplyFormRequest;
use App\Notifications\YouWereMentioned;

class RepliesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', ['except' => 'index']);
    }

    public function index($channelId, Thread $thread)
    {
        return $thread->replies()->with(['owner', 'thread', 'favourites'])->paginate(20);
    }

    public function store(Thread $thread, ReplyFormRequest $request)
    {
        if ($thread->locked) {
            return response('Yönetici bu konuya yorum yapmayı kapattı', 403);
        }

        $reply = $thread->addReply([
            'body' => $request->body,
            'user_id' => auth()->user()->id
        ]);

        $reply = $reply->load('owner');
        
        return $reply;
    }

    public function destroy(Reply $reply)
    {
        $this->authorize('update', $reply);
        $reply->delete();
    }

    public function update(Reply $reply)
    {
        $this->validate(request(), [
            'body' => ['required', 'string', 'min:8', new SpamFree],
        ]);

        $this->authorize('update', $reply);

        $reply->update(['body' => request('body')]);
    }
}
