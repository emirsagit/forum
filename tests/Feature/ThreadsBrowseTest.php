<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Reply;
use App\Models\Thread;
use App\Models\Channel;

class ThreadsBrowseTest extends TestCase
{
    public function test_a_user_can_browse_all_threads()
    {
        $thread= Thread::factory()->create();

        $response = $this->get('/threads');

        $response->assertSee($thread->title);
    }

    public function test_a_user_can_browse_a_thread()
    {
        $thread= Thread::factory()->create();

        $response = $this->get($thread->path());

        $response->assertSee($thread->title);
    }

    public function test_a_user_can_browse_a_reply()
    {
        $thread= Thread::factory()->create();

        $reply = Reply::factory()->create([
            'thread_id' => $thread->id
        ]);

        $response = $this->get($thread->path());

        $response->assertSee($reply->body);
    }

    public function test_filter_threads_according_to_its_channel()
    {
        $channel = Channel::factory()->create();

        $threadSee = Thread::factory()->create(['channel_id' => $channel->id]);

        $threadNotSee = Thread::factory()->create();

        $this->get('/threads/' . $channel->slug)
            ->assertSee($threadSee->title)
            ->assertDontSee($threadNotSee->title);
    }

    public function test_filter_threads_by_user_name()
    {
        $this->be($user = User::factory()->create());

        $threadByUser = Thread::factory()->create([
            'user_id' => $user->id
        ]);

        $threadNotByUser = Thread::factory()->create();

        $this->get("/threads/?by=$user->name")
            ->assertSee($threadByUser->title)
            ->assertDontSee($threadNotByUser->title);
    }

}
