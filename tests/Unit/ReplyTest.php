<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\User;
use App\Models\Reply;


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
}
