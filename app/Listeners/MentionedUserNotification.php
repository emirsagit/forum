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
        preg_match_all('/@([\w|-]+)/', $event->reply->body, $notifiableNames);
        User::whereIn('name', $notifiableNames)
            ->get()
            ->each(function ($user) use ($event) {
                $user->notify(new YouWereMentioned($event->reply));
            });
    }
}
