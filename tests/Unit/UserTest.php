<?php

namespace Tests\Unit;

use App\Models\Reply;
use Tests\TestCase;
use App\Models\User;

class UserTest extends TestCase
{
    public function test_a_user_has_one_last_reply()
    {
        $this->be($user = User::factory()->create());

        $reply = Reply::factory()->create([
            'user_id' => $user->id,
        ]);

        $olderReply = Reply::factory()->create([
            'user_id' => $user->id,
        ]);

        $olderReply->created_at = \Carbon\Carbon::now()->subMonth();

        $this->assertEquals($reply->id, $user->lastReply->id);
    } 
}
