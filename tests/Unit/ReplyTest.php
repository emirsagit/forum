<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\User;
use App\Models\Reply;
use App\Models\Thread;


class ReplyTest extends TestCase
{
    public function test_a_reply_belongs_to_owner()
    {
        $user = User::factory()->create([
            'name' => "Ali"
        ]);

        $reply = Reply::factory()->create([
            'user_id' => $user->id
        ]);

        $this->assertInstanceOf(User::class, $reply->owner);
    }

    public function test_if_a_reply_contain_spam_disallow()
    {
        $this->withOutExceptionHandling();

        $this->be(User::factory()->create());

        $thread = Thread::factory()->create();

        $this->expectException(\Exception::class);
        
        $reply = Reply::factory()->make([
            'body' => 'bu bir spam'
        ]);

        $this->post('/threads/' . $thread->id . '/replies', $reply->toArray());
    }

    public function test_user_can_not_post_new_reply_continuously()
    {
        $thread = Thread::factory()->create();

        $this->be($user = User::factory()->create());

        $attributes = ['body' => "merhaba dosutufasdfdam"];

        $this->json('POST', '/threads/' . $thread->slug . '/replies', $attributes);

        $user->refresh();

        $this->json('POST', '/threads/' . $thread->slug . '/replies', $attributes);
        
        $this->assertCount(1, $user->replies);
    } 

    public function test_a_reply_knows_was_recently_published()
    {
        $reply = Reply::factory()->create();

        $this->assertFalse($reply->wasRecentlyPublished());
    }  

    public function test_reply_may_belongs_to_mentioned_user()
    {
        $reply = Reply::factory()->create([
            'mentioned_user' => $user_id = User::factory()->create()->id
        ]);

        $this->assertEquals(
           $user_id ,$reply->fresh()->mentionedUser->id 
        );
    }  

    public function test_a_reply_can_mark_as_best_reply()
    {
        $this->be(User::factory()->create());

        $thread = Thread::factory()->create();

        $reply = Reply::factory()->create(['thread_id' => $thread->id]);

        $reply->markAsBest();

        $this->assertTrue($reply->isBest());
    } 
}
