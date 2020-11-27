<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Thread;


class LockThreadsTest extends TestCase
{
    public function test_standard_user_can_not_lock_threads()
    {
        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create();

        $this->post(route('thread_lock.store', $thread))->assertStatus(403);

        $this->assertFalse(!! $thread->fresh()->locked);
    }

    public function test_only_admin_can_lock_threads()
    {
        $this->be($admin = User::factory()->create([
            'email' => 'emirsagit@gmail.com'
        ]));

        $thread = Thread::factory()->create();

        $this->post(route('thread_lock.store', $thread));

        $this->assertTrue(!! $thread->fresh()->locked);
    }

    public function test_admin_can_delete_lock()
    {
        $this->be($admin = User::factory()->create([
            'email' => 'emirsagit@gmail.com'
        ]));

        $thread = Thread::factory()->create();

        $this->post(route('thread_lock.store', $thread));

        $this->assertTrue(!! $thread->fresh()->locked);

        $this->delete(route('thread_lock.delete', $thread));

        $this->assertFalse(!! $thread->fresh()->locked);
    }

    public function test_locked_threads_can_not_accept_replies()
    {
        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create();

        $thread->update(['locked' => true]);

        $this->post(route('reply.store', $thread->slug), [
            'body' => 'sometetv fdsafa afa fa',
            'user_id' => User::factory()->create()->id
        ])->assertStatus(403);
    }
}
