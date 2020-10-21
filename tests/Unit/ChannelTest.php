<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Thread;
use App\Models\Channel;


class ChannelTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_a_channel_has_many_threads()
    {
        $channel = Channel::factory()->create();

        Thread::factory(5)->create(['channel_id' => $channel->id]);

        $this->assertCount(5 ,$channel->threads);
    }
}
