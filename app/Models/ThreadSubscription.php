<?php

namespace App\Models;

use App\Models\User;
use App\Models\Thread;
use App\Notifications\ThreadWasUpdated;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ThreadSubscription extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'thread_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function thread()
    {
        return $this->belongsTo(Thread::class);
    }
}
