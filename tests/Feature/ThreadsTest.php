<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Thread;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ThreadsTest extends TestCase
{
    use RefreshDatabase;

    public function test_a_user_can_browse_all_threads()
    {
        $thread= Thread::factory()->create();

        $response = $this->get('/');

        $response->assertSee($thread->title);
    }

    public function test_a_user_can_browse_a_thread()
    {
        $thread= Thread::factory()->create();

        $response = $this->get("/" . $thread->id);

        $response->assertSee($thread->title);
    }
}
