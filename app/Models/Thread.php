<?php

namespace App\Models;

use App\Models\User;
use App\Models\Reply;
use App\Models\Channel;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Thread extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id', 'title', 'body', 'channel_id'
    ];

    public function path()
    {
        return '/threads/' . $this->channel->slug . '/' . $this->id;
    } 

    public function addReply($reply)
    {
        $this->replies()->create($reply);
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
