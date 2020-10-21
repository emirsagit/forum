<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Channel;

class ChannelsGetTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_it_returns_channels()
    {
        $channels = Channel::factory(10)->create();

        $response = $this->json('GET', '/channels');

        $response->assertStatus(200);
    }
}
