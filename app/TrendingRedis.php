<?php

namespace App;

use Illuminate\Support\Facades\Redis;

class TrendingRedis
{
    public function get()
    {
        return collect(array_map('json_decode', Redis::zrevrange($this->cacheKey(), 0, 4)));
    }

    public function push($thread)
    {
        Redis::zincrby($this->cacheKey(), 1, json_encode([
            'title' => $thread->title,
            'path' => $thread->path()
        ]));
    }

    public function cacheKey()
    {
        return app()->environment('testing') ? 'test_trending_threads' : 'trending_threads';
    } 

    public function reset()
    {
        Redis::del($this->cacheKey());
    } 
}
