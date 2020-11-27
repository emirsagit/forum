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

    public function test_it_shows_an_anchor_tag_to_user_profile_when_reply_contains_mentioned()
    {
        $reply = Reply::factory()->create([
            'body' => "look @Emir at this file"
        ]);

        $this->assertEquals(
           'look <a href="/profiles/Emir" class="text-blue-500 hover:text-blue-700">@Emir</a> at this file' ,$reply->body 
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
