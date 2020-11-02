<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Thread;


class NotificationTest extends TestCase
{
    public function test_when_users_add_reply_to_subscribed_thread_it_create_notifications_to_all_subscribed_users()
    {
        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create();

        $thread->subscribe($user->id);

        $thread->addReply([
            'user_id' => User::factory()->create()->id,
            'body' => 'there is sometihidfafa'
        ]);

        $this->assertCount(1, $user->notifications->fresh());
    }

    public function test_it_can_not_create_notification_if_created_reply_user_equals_subscribe_user_when_add_reply()
    {
        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create();

        $thread->subscribe();

        $this->assertCount(0, $user->notifications);

        $thread->addReply([
            'user_id' => $user->id,
            'body' => 'there is sometihidfafa'
        ]);

        $this->assertCount(0, $user->notifications->fresh());
    }

    public function test_a_user_can_fetch_users_notifications()
    {
        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create();

        $thread->subscribe();

        $thread->addReply([
            'user_id' => User::factory()->create()->id,
            'body' => 'there is sometihidfafa'
        ]);

        $response = $this->getJson("/profiles/{$user->name}/notifications")->json();

        $this->assertCount(1, $response);
    }

    public function test_a_user_can_mark_as_read_a_notification()
    {
        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create();

        $thread->subscribe();

        $thread->addReply([
            'user_id' => User::factory()->create()->id,
            'body' => 'there is sometihidfafa'
        ]);

        $this->delete("/profiles/{$user->name}/notifications/{$user->unreadNotifications->first()->id}");
        $this->assertCount(0, $user->fresh()->unreadNotifications);
    }
}
