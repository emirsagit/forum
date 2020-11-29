<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\User;
use App\Models\Reply;
use App\Models\Thread;
use App\Models\Channel;
use App\Notifications\ThreadWasUpdated;
use Illuminate\Support\Facades\Notification;


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

    public function test_a_thread_can_subscribe_by_a_user()
    {
        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create();

        $thread->subscribe();

        $this->assertEquals(1, $thread->subscriptions()->where('user_id', $user->id)->count());
    }

    
    public function test_a_thread_can_unsubscribe_by_a_user()
    {
        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create();

        $thread->subscribe();

        $thread->unsubscribe();

        $this->assertEquals(0, $thread->subscriptions()->where('user_id', $user->id)->count());
    }

        
    public function test_thread_show_is_subscribed_by_auth_user()
    {
        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create();

        $thread->subscribe();

        $this->assertEquals(1, $thread->fresh()->isSubscribed);
    }

    public function test_when_reply_a_thread_send_notification_to_subscribers()
    {
        Notification::fake();

        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create();

        $thread->subscribe($user->id);

        $reply = Reply::factory()->make([
            'user_id' => User::factory()->create()->id
        ]);

        $this->post(route('reply.store', ['thread' => $thread->slug]), $reply->toArray());

        $this->assertCount(1, $user->subscriptions);
    }
}
