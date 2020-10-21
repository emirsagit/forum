<?php

namespace Database\Seeders;

use App\Models\Reply;
use App\Models\Thread;
use App\Models\Channel;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //her chanelin 10 threadi, her threadin 10 reply'ı var.
        $channels = Channel::factory(10)->create();
        $channels->each(function ($channel) {
            $threads = Thread::factory(10)->create([
                'channel_id' => $channel->id
            ]);
            $threads->each(function ($thread) {
                Reply::factory(10)->create([
                    'thread_id' => $thread->id
                ]);
            });
        });
    }
}
