<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Reply;
use App\Models\Thread;
use App\Models\Channel;
use App\Models\Activity;
use Illuminate\Auth\AuthenticationException;

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
    
    public function test_filter_threads_by_popularity()
    {
        $twoCommentsThread = Thread::factory()->create();
        Reply::factory(2)->create([
            'thread_id' => $twoCommentsThread->id
        ]);

        $threeCommentsThread = Thread::factory()->create();
        Reply::factory(3)->create([
            'thread_id' => $threeCommentsThread->id
        ]);

        $threadNoComment = Thread::factory()->create();

        $response = $this->getJson('/threads?popular=1')->json();

        $this->assertEquals([3, 2, 0], array_column($response, 'replies_count'));
    } 

    public function test_authorized_user_who_has_permission_can_delete_threads()
    {
        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create(['user_id' => $user->id]);
        $reply = Reply::factory()->create(['thread_id' => $thread->id ]);

        $this->delete(route('threads.destroy', compact('thread')))
            ->assertRedirect('/threads'); 

        $this->assertDatabaseMissing('threads', ['id' => $thread->id]);
        $this->assertDatabaseMissing('replies', ['id' => $reply->id]);
        $this->assertCount(0, Activity::get());
    } 

    public function test_unauthorized_users_can_not_delete_threads()
    {
        $this->be(User::factory()->create());

        $user=User::factory()->create();
        
        $thread = Thread::factory()->create(['user_id' => $user->id]);

        $this->delete(route('threads.destroy', compact('thread')))->assertStatus(403);
    } 

}
