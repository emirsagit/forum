<?php

namespace App\Models;

use App\Models\Reply;
use App\Models\Thread;
use App\Models\Activity;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;


    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    public function getRouteKeyName()
    {
        return 'name';
    } 

    public function lastReply()
    {
        return $this->hasOne(Reply::class)->latest()->withOut('thread');
    } 

    public function replies()
    {
        return $this->hasMany(Reply::class)->latest();
    } 

    protected $hidden = [
        'password',
        'remember_token',
        'email'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function threads()
    {
        return $this->hasMany(Thread::class)->latest();
    } 

    public function activities()
    {
        return $this->hasMany(Activity::class)->latest();
    } 

}
