<?php

namespace App\Listeners;

use App\Events\NewReplyCreated;
use App\Notifications\ThreadWasUpdated;



class SubscribersNotification
{
    /**
     * Handle the event.
     *
     * @param  NewReplyCreated  $event
     * @return void
     */
    public function handle(NewReplyCreated $event)
    {
        $thread =  $event->reply->thread;

        $thread->subscriptions
        ->where('user_id', '=!', $event->reply->id)
        ->each(function ($sub) use ($event, $thread) {
            return $sub->user->notify(new ThreadWasUpdated ($thread, $event->reply));
        });
    }
}
