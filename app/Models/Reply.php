<?php

namespace App\Models;

use App\Models\User;
use App\Models\Thread;
use App\Traits\Favouriteable;
use App\Traits\RecordsActivity;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Reply extends Model
{
    use HasFactory, Favouriteable, RecordsActivity;
    
    protected $fillable = [
        'user_id', 'thread_id', 'body'
    ];

    protected $with= [
        'thread', 
    ];

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
}
