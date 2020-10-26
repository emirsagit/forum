<?php

namespace App\Models;

use App\Models\User;
use App\Models\Reply;
use App\Models\Channel;
use App\Traits\RecordsActivity;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Thread extends Model
{
    use HasFactory, RecordsActivity;

    protected $fillable = [
        'user_id', 'title', 'body', 'channel_id'
    ];

    protected $with = [
        'channel'
    ];

    protected static function booted()
    {
        static::addGlobalScope('replyCount', function (Builder $builder) {
            $builder->withCount('replies');
        });

         /* same as $thread->replies->each(function($reply) { $reply->delete(); })
        we do these becoues we want reply deleted with its activities together. 
        this method trigger recordsactivity thread for each reply...*/
        static::deleting(function ($thread) {
            $thread->replies->each->delete();
        });
    }

    public function path()
    {
        return '/threads/' . $this->channel->slug . '/' . $this->id;
    }

    public function addReply($reply)
    {
        $this->replies()->create($reply);
    }

    public function ScopeFilter($query, $filters)
    {
        return $filters->apply($query);
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function replies()
    {
        return $this->hasMany(Reply::class);
    }

    public function channel()
    {
        return $this->belongsTo(Channel::class);
    }
}
