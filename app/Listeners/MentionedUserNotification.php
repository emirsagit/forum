<?php

namespace App\Listeners;

use App\Models\User;
use App\Events\NewReplyCreated;
use App\Notifications\YouWereMentioned;


class MentionedUserNotification
{
    /**
     * Handle the event.
     *
     * @param  NewReplyCreated  $event
     * @return void
     */
    public function handle(NewReplyCreated $event)
    {
        if (!$user = $event->reply->mentionedUser) return;
        $user->notify(new YouWereMentioned($event->reply));
    }
}
