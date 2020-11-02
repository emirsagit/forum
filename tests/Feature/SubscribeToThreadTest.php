<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Thread;


class SubscribeToThreadTest extends TestCase
{
    public function test_auth_user_can_subscribe_to_a_thread()
    {
        $this->be(User::factory()->create());

        $thread = Thread::factory()->create();

        $this->post(route('subscribe.store', ['channel' => $thread->channel, 'thread' => $thread]));

        $this->assertCount(1, $thread->subscriptions);
    }

    public function test_auth_user_can_unsubscribe_to_a_thread()
    {
        $this->be(User::factory()->create());

        $thread = Thread::factory()->create();

        $thread->subscribe();

        $this->delete(route('subscribe.destroy', ['channel' => $thread->channel, 'thread' => $thread]));

        $this->assertCount(0, $thread->subscriptions);
    }
}
