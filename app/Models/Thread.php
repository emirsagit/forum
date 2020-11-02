<?php

namespace App\Models;

use App\Models\User;
use App\Models\Reply;
use App\Models\Channel;
use App\Events\NewReplyCreated;
use App\Traits\RecordsActivity;
use App\Models\ThreadSubscription;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Thread extends Model
{
    use HasFactory, RecordsActivity;

    protected $fillable = [
        'user_id', 'title', 'body', 'channel_id', 'replies_count'
    ];

    protected $with = [
        'channel'
    ];

    protected static function booted()
    {
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
        $reply = $this->replies()->create($reply);

        event(new NewReplyCreated($reply));

        return $reply;
    }

    public function ScopeFilter($query, $filters)
    {
        return $filters->apply($query);
    }

    public function subscribe($userId = null)
    {
        $this->subscriptions()
            ->create(['user_id' => $userId ?: auth()->user()->id]);
    }

    public function unsubscribe($userId = null)
    {
        $this->subscriptions()
            ->where('user_id', $userId ?: auth()->user()->id)
            ->delete();
    }

    public function subscriptions()
    {
        return $this->hasMany(ThreadSubscription::class);
    }

    public function getIsSubscribedAttribute()
    {
        if (!Auth::check()) return;
        return $this->subscriptions->where('user_id', auth()->user()->id)->count();
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
