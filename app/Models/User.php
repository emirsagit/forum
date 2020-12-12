<?php

namespace App\Models;

use App\Models\Image;
use App\Models\Reply;
use App\Models\Thread;
use App\Models\Activity;
use App\Casts\DateForHumansCast;
use Spatie\Searchable\SearchResult;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Searchable\Searchable;

class User extends Authenticatable implements MustVerifyEmail, Searchable 
{
    use HasFactory, Notifiable, SoftDeletes;

    public function getSearchResult(): SearchResult
    {
        // ModelSearchAspect clasına withtrashed eklediğim için sonuçlar softdelete olanlarla birlikte gelecek
        return new SearchResult(
           $this,
           $this->username,
        );
    }

    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar_path',
        'username'
    ];

    public function getRouteKeyName()
    {
        return 'username';
    }

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'created_at' => DateForHumansCast::class,
    ];

    public function getAvatarPathAttribute($avatar)
    {
        return $avatar ? '/storage/' . $avatar : strtoupper($this->username[0]);
    }

    public function isAdmin()
    {
        return in_array($this->email, config('admin'));
    } 

    public function threads()
    {
        return $this->hasMany(Thread::class)->latest();
    }

    public function activities()
    {
        return $this->hasMany(Activity::class)->latest()->with('subject');
    }

    public function lastReply()
    {
        return $this->hasOne(Reply::class)->latest()->withOut('thread');
    }

    public function replies()
    {
        return $this->hasMany(Reply::class)->latest();
    }

    public function images()
    {
        return $this->hasMany(Image::class);
    } 

    public function subscriptions()
    {
        return $this->hasMany(ThreadSubscription::class);
    } 
}
