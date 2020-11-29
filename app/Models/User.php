<?php

namespace App\Models;

use App\Models\Image;
use App\Models\Reply;
use App\Models\Thread;
use App\Models\Activity;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar_path'
    ];

    public function getRouteKeyName()
    {
        return 'name';
    }

    protected $hidden = [
        'password',
        'remember_token',
        'email'
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getAvatarPathAttribute($avatar)
    {
        return $avatar ? '/storage/' . $avatar : '/img/defaultavatar.svg';
    }

    public function isAdmin()
    {
        return in_array($this->email, ['emirsagit@gmail.com', 'sagitemir@gmail.com']);
    } 

    public function threads()
    {
        return $this->hasMany(Thread::class)->latest();
    }

    public function activities()
    {
        return $this->hasMany(Activity::class)->latest();
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
