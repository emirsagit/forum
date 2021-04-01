<?php

namespace App\Models;

use App\Models\User;
use App\Models\Reply;
use App\Models\Channel;
use App\Traits\ConvertHtml;
use Illuminate\Support\Str;
use App\Events\NewReplyCreated;
use App\Traits\RecordsActivity;
use App\Casts\DateForHumansCast;
use Spatie\Searchable\Searchable;
use App\Models\ThreadSubscription;
use App\Traits\Visitable;
use Spatie\Searchable\SearchResult;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Thread extends Model implements Searchable
{
    use HasFactory, RecordsActivity, ConvertHtml, Visitable;

    public function getSearchResult(): SearchResult
     {
        $url = route('threads.show', $this->slug);
     
         return new SearchResult(
            $this,
            $this->title,
            $url
         );
     }

    protected $fillable = [
        'user_id', 'title', 'body', 'channel_id', 'replies_count', 'visits_count', 'slug', 'best_reply_id', 'locked', 'editors_data', 'thread_title', 'thread_description'
    ];

    protected $with = [
        'channel'
    ];

    protected $casts = [
        'body' => 'array',
        'editors_data' => 'array',
        'locked' => 'boolean',
        'created_at'=> DateForHumansCast::class,
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    protected static function booted()
    {
        /* same as $thread->replies->each(function($reply) { $reply->delete(); })
        we do these becoues we want reply deleted with its activities together. 
        this method trigger recordsactivity thread for each reply...*/
        static::deleting(function ($thread) {
            $thread->replies->each->delete();
        });

        static::created(function ($thread) {
            $thread->update(['slug' => $thread->title]);
            $thread->channel->increment('threads_count');
        });

        static::deleted(function ($thread) {
            $thread->channel->decrement('threads_count');
        });
    }

    public function scopeTrendings($query)
    {    
        return $query->where('votes', '>', 100);
    } 

    public function path()
    {
        return '/' . $this->slug;
    }

    public function setSlugAttribute($value)
    {
        $slug = Str::slug($value);

        if (static::where('slug', $slug)->exists()) {
            $slug = $slug . '-' . $this->id;
        }

        return $this->attributes['slug'] = $slug;
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

    public function getBodyAttribute($value)
    {
        return $this->getHtml($value);
    }

    public function bestReply()
    {
        return $this->belongsTo(Reply::class, 'best_reply_id')->with('owner');
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function replies()
    {
        return $this->hasMany(Reply::class)->with('owner', 'favourites');
    }

    public function channel()
    {
        return $this->belongsTo(Channel::class);
    }
}
