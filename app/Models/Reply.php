<?php

namespace App\Models;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Thread;
use App\Traits\WithPolicy;
use App\Traits\ConvertHtml;
use App\Traits\Favouriteable;
use App\Traits\RecordsActivity;
use App\Casts\DateForHumansCast;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Reply extends Model
{
    
    use HasFactory, Favouriteable, RecordsActivity, ConvertHtml;

    protected $casts = [
        'created_at'=> DateForHumansCast::class,
        'body' => 'array',
        'editors_data' => 'array'
    ];
    
    protected $fillable = [
        'user_id', 'thread_id', 'body', 'editors_data'
    ];

    protected $with= [
        'thread', 
    ];
    //foru costum get to be shown attributes in json format 
    protected $appends= ['favouritesCount', 'isFavourited'];

    protected static function booted()
    {
        static::created(function ($reply) {
            $reply->thread->increment('replies_count');
        });

        static::deleted(function ($reply) {
            $reply->thread->decrement('replies_count');
        });
    }

    public function wasRecentlyPublished()
    {
        return Carbon::parse($this->created_at)->lt(Carbon::now()->subMinute());         
    } 

    public function getBodyAttribute($value)
    {
        return $this->getHtml($value);
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    } 

    public function thread()
    {
        return $this->belongsTo(Thread::class);
    } 

    public function path()
    {
        return $this->thread->path() . "#reply-" . $this->id;
    }
    
    public function isBest()
    {
        return $this->id == $this->thread->best_reply_id;
    } 

    public function markAsBest()
    {
        $this->thread->update(['best_reply_id' => $this->id]);
    } 

    public function deleteMarkedBest()
    {
        $this->thread->update(['best_reply_id' => null]);
    } 
}
