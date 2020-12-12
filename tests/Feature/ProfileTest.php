<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Thread;

class ProfileTest extends TestCase
{
    public function test_user_can_browse_a_user_profile_page()
    {
        $this->withoutExceptionHandling();

        $user = User::factory()->create();

        $this->get("/profiles/$user->username")
            ->assertSee($user->name);
    }

    public function test_user_can_see_threads_in_profile_page()
    {
        $this->withoutExceptionHandling();

        $this->be($user = User::factory()->create());

        $thread = Thread::factory()->create([
            'user_id' => $user->id
        ]);

        $this->get("/profiles/$user->username")
            ->assertSee($thread->title);
    } 
}
