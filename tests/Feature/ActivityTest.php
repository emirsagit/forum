<?php

namespace Tests\Feature;

use Carbon\Carbon;
use Tests\TestCase;
use App\Models\User;
use App\Models\Reply;
use App\Models\Thread;
use App\Models\Activity;


class ActivityTest extends TestCase
{
    public function test_it_records_activity_when_we_create_thread()
    {
        $this->be(User::factory()->create());

        $thread = Thread::factory()->create();

        $this->assertDatabaseHas('activities', [
            'type' => 'created_thread',
            'user_id' => auth()->user()->id,
            'subject_id' => $thread->id,
            'subject_type' => 'App\Models\Thread',
        ]);

        $activity = Activity::first();

        $this->assertEquals($activity->subject->id, $thread->id);
    }

    public function test_it_records_activity_when_we_create_reply()
    {
        $this->be(User::factory()->create());

        $reply = Reply::factory()->create();

        $this->assertDatabaseHas('activities', [
            'type' => 'created_reply',
            'user_id' => auth()->user()->id,
            'subject_id' => $reply->id,
            'subject_type' => 'App\Models\Reply',
        ]);
    }

    public function test_it_fetches_a_feed_for_users_group_by_date()
    {
        $this->be($user = User::factory()->create());

        Thread::factory(2)->create([
            'user_id' => $user->id
        ]);

        auth()->user()->activities()->first()->update([
            'created_at' => Carbon::yesterday()
        ]);

        $feed = Activity::feed(auth()->user());

        $this->assertTrue(
            $feed->keys()->contains(Carbon::yesterday()->format('d-m-Y'))
        );
    }
}
