<?php

namespace Tests\Feature;

use App\Trending;
use Tests\TestCase;
use App\Models\Thread;
use Illuminate\Support\Facades\Redis;

class TrendingThreadsTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();

        $this->trending = new Trending();

        $this->trending->reset();
    }

    public function test_it_increments_threads_score_each_time_visit_thread()
    {
        $thread = Thread::factory()->create();

        $this->assertEmpty($this->trending->get());

        $this->call('GET', $thread->path());

        $this->assertCount(1 ,$this->trending->get());

        $this->assertEquals($thread->title, $this->trending->get()[0]->title);
    } 
}
