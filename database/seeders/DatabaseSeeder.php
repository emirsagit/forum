<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\Level;
use App\Models\Reply;
use App\Models\Puzzle;
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
            Blog::factory(10)->create([
                'channel_id' => $channel->id
            ]);
            $threads = Thread::factory(10)->create([
                'channel_id' => $channel->id
            ]);
            $threads->each(function ($thread) {
                Reply::factory(10)->create([
                    'thread_id' => $thread->id
                ]);
            });
        });
        $levels = Level::factory(5)
            ->create()
            ->each(function ($level) {
                $level->puzzles()->attach($puzzles = Puzzle::factory(10)
                    ->create()
                    ->filter(function ($puzzle) {
                        return $puzzle->id;
                    }));
            });
    }
}
