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

        $this->assertDatabaseHas('replies', ['body' => $reply->body]);
    }

    public function test_a_guest_can_not_add_threads()
    {
        $this->expectException(AuthenticationException::class);

        $this->withoutExceptionHandling();

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

    public function test_unauthorized_user_can_not_delete_reply()
    {
        $this->be($user = User::factory()->create());

        $reply = Reply::factory()->create();

        $this->delete(route('reply.destroy', $reply))
            ->assertStatus(403);

        $this->assertDatabaseHas('replies', ['id' => $reply->id]);
    }

    public function test_authorized_user_can_delete_reply()
    {
        $this->withoutExceptionHandling();

        $this->be($user = User::factory()->create());

        $reply = Reply::factory()->create(['user_id' => $user->id]);

        $this->post(route('favourite.store', $reply));

        $this->delete(route('reply.destroy', $reply));

        $this->assertDatabaseMissing('replies', ['id' => $reply->id]);
        $this->assertDatabaseMissing('favourites', ['favouriteable_id' => $reply->id, 'favouriteable_type' => get_class($reply)]);
    }

    public function test_unauthorized_user_can_not_update_reply()
    {
        $this->be($user = User::factory()->create());

        $reply = Reply::factory()->create();

        $newBody = 'yeni yorum';

        $this->patch("/replies/$reply->id", ['body' => $newBody])->assertStatus(403);
    }

    public function test_authorized_user_can_update_reply()
    {
        $this->withoutExceptionHandling();

        $this->be($user = User::factory()->create());

        $reply = Reply::factory()->create(['user_id' => $user->id]);

        $newBody = 'yeni yorum';

        $this->patch("/replies/$reply->id", ['body' => $newBody]);

        $this->assertDatabaseHas('replies', ['id' => $reply->id, 'body' => $newBody]);
    }


    public function test_when_view_a_thread_page_fetch_all_replies_for_ajax_reqest()
    {
        $this->withoutExceptionHandling();

        $thread = Thread::factory()->create();

        $reply = Reply::factory()->create(['thread_id' => $thread->id]);

        $response = $this->getJson(route('replies.index', ['channel' => $thread->channel, 'thread' => $thread]));

        $this->assertCount(1, $response['data']);
    }

    public function test_if_replies_contains_other_user_name_will_send_notification()
    {
        $this->withOutExceptionHandling();

        $this->be(User::factory()->create());

        $thread = Thread::factory()->create();

        $user = User::factory()->create([
            'name' => 'MehmetAli'
        ]);

        $reply = Reply::factory()->make([
            'thread_id' => $thread->id,
            'body' => "@" . $user->name .  " write a reply"
        ]);

        $this->json('POST', '/threads/' . $thread->id . '/replies', $reply->toArray());

        $this->assertCount(1, $user->notifications);
    }
}
