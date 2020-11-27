<?php

namespace Tests\Feature;


use Tests\TestCase;
use App\Models\User;
use App\Models\Thread;
use App\Models\Channel;
use Illuminate\Auth\Access\AuthorizationException;

class UpdateThreadsTest extends TestCase
{
    public function test_authenticated_user_can_update_threads()
    {
        $this->withoutExceptionHandling();

        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create(['user_id' => $user->id]);

        $this->patch('/threads/' . $thread->slug, [
            'title' => 'updated title',
            'body' => "updated body",
            'channel_id' => $channel = Channel::factory()->create()->id,
        ]);

        $thread = $thread->fresh();

        $this->assertEquals($thread->title, 'updated title');
        $this->assertEquals($thread->channel_id, $channel);
    }

    public function test_only_authenticated_user_can_update_threads()
    {
        $this->expectException(AuthorizationException::class);

        $this->withoutExceptionHandling();

        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create(['user_id' => User::factory()->create()->id]);

        $this->patch('/threads/' . $thread->slug, [
            'title' => 'updated title',
            'body' => 'updated body',
            'channel_id' => $channel = Channel::factory()->create()->id,
        ]);
    }

    public function test_title_body_channel_id_is_required()
    {
        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create(['user_id' => $user->id]);

        $response = $this->patch('/threads/' . $thread->slug);

        $response->assertSessionHasErrors(['title', 'body', 'channel_id']);
    } 
}
