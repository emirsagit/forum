<?php

namespace Tests\Feature;


use Tests\TestCase;
use App\Models\User;
use App\Models\Reply;
use App\Models\Thread;
use Illuminate\Support\Facades\DB;

class BestReplyTest extends TestCase
{
    public function test_thread_creator_mark_a_reply_as_best()
    {
        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create(['user_id' => $user->id]);

        $replies = Reply::factory(2)->create([
            'thread_id' => $thread->id
        ]);

        $this->json('POST', route('best_reply.store', $replies[1]->id));

        $this->assertTrue($replies[1]->fresh()->isBest());
    }

    public function test_only_thread_creator_mark_a_reply_as_best()
    {
        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create(['user_id' => $user->id]);

        $replies = Reply::factory(2)->create([
            'thread_id' => $thread->id
        ]);

        $this->be(User::factory()->create());

        $this->json('POST', route('best_reply.store', $replies[1]->id));

        $this->assertFalse($replies[1]->fresh()->isBest());
    }

    public function test_when_user_delete_best_reply_it_set_null_on_threads_table()
    {
        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create(['user_id' => $user->id]);

        $reply = Reply::factory()->create([
            'thread_id' => $thread->id,
            'user_id' => $user->id
        ]);

        $reply->markAsBest();

        $this->delete('/replies/' . $reply->id);

        $this->assertNull($thread->best_reply_id);
    }

    public function test_a_user_can_delete_any_best_reply()
    {
        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create(['user_id' => $user->id]);

        $reply = Reply::factory()->create([
            'thread_id' => $thread->id,
            'user_id' => $user->id
        ]);

        $reply->markAsBest();

        $this->delete('/best-reply/' . $reply->id);

        $this->assertNull($thread->fresh()->best_reply_id);
    } 

    public function test_only_creator_of_thread_can_delete_best_reply()
    {
        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create(['user_id' => $user->id]);

        $reply = Reply::factory()->create([
            'thread_id' => $thread->id,
            'user_id' => $user->id
        ]);

        $reply->markAsBest();

        $this->be(User::factory()->create());

        $this->delete('/best-reply/' . $reply->id);

        $this->assertNotNull($thread->fresh()->best_reply_id);
    } 
}
