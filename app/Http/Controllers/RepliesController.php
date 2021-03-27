<?php

namespace App\Http\Controllers;

use App\Models\Reply;
use App\Models\Thread;
use App\Rules\SpamFree;
use App\Http\Requests\ReplyFormRequest;
use App\Http\Requests\ReplyUpdateFormRequest;

class RepliesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth', ['except' => 'index']);
    }

    public function index(Thread $thread)
    {
        return $thread->replies()->with(['owner', 'thread', 'favourites', 'mentionedUser'])->paginate(config('paginate.paginate.replies'));
    }

    public function store(Thread $thread, ReplyFormRequest $request)
    {
        if ($thread->locked) {
            return response('Yönetici bu konuya yorum yapmayı kapattı', 403);
        }

        $reply = $thread->addReply([
            'body' => $request->body,
            'editors_data' => $request->body,
            'mentioned_user' => $request->user,
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

    public function update(Reply $reply, ReplyUpdateFormRequest $request)
    {
        $this->authorize('update', $reply);

        $reply->update([
            'body' => $request->body,
            'editors_data' => $request->body
        ]);
        $reply = $reply->load('owner');
        return $reply;
    }
}
