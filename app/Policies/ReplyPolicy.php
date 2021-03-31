<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Reply;
use Illuminate\Auth\Access\Response;
use Illuminate\Auth\Access\HandlesAuthorization;

class ReplyPolicy
{
    use HandlesAuthorization;

    public function update(User $user, Reply $reply)
    {
        return $user->id == $reply->user_id;
    }

    public function create(User $user, Reply $reply)
    {
        return true;
        if (! $lastReply = $user->lastReply) return true;

        return $lastReply->wasRecentlyPublished()
            ? Response::allow()
            : Response::deny('Lütfen bir dakika bekleyip tekrar deneyin...');
    }
}
