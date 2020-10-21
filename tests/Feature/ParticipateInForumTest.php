<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Reply;
use App\Models\Thread;
use Illuminate\Auth\AuthenticationException;

class ParticipateInForumTest extends TestCase
{
    public function test_an_auth_user_can_add_reply_to_threads()
    {
        $this->withoutExceptionHandling();

        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create();

        $reply = Reply::factory()->make();

        $this->post('/threads/' . $thread->id . '/replies', $reply->toArray());

        $this->get($thread->path())
            ->assertSee($reply->body);
    }

    public function test_an_unauth_user_can_not_add_threads()
    {
        $this->expectException(AuthenticationException::class);

        $this->withoutExceptionHandling();
        
        $user = User::factory()->create();

        $thread = Thread::factory()->create();

        $reply = Reply::factory()->make();

        $this->post('/threads/' . $thread->id . '/replies', $reply->toArray());
    }

    public function test_body_attribute_is_required()
    {
        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create();

        $reply = Reply::factory()->make(['body' => null]);

        $this->post('/threads/' . $thread->id . '/replies', $reply->toArray())
        ->assertSessionHasErrors('body');
    } 
}
