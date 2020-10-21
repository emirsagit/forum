<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\User;
use App\Models\Reply;
use App\Models\Thread;
use App\Models\Channel;


class ThreadTest extends TestCase
{
    public function test_a_thread_belongs_to_owner()
    {
        $user = User::factory()->create([
            'name' => "Ali"
        ]);

        $thread = Thread::factory()->create([
            'user_id' => $user->id
        ]);

        $this->assertInstanceOf(User::class, $thread->owner);
    }

    public function test_a_thread_has_many_replies()
    {
        $thread = Thread::factory()->create();

        Reply::factory()->create([
            'thread_id' => $thread->id
        ]);

        $this->assertInstanceOf(Reply::class, $thread->replies->first());
    }

    public function test_addReply_method_create_reply()
    {
        $thread = Thread::factory()->create();

        $reply = Reply::factory()->create([
            'thread_id' => $thread->id
        ]);

        $thread->addReply($reply->toArray());

        $this->assertInstanceOf(Reply::class, $thread->replies->first());
    }

    public function test_threads_belongs_to_a_channel()
    {
        $thread = Thread::factory()->create();

        $this->assertInstanceOf(Channel::class, $thread->channel);
    }
}
