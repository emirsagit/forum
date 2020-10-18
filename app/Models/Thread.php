<?php

namespace App\Models;

use App\Models\User;
use App\Models\Reply;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Thread extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id', 'title', 'body'
    ];

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    } 

    public function replies()
    {
        return $this->hasMany(Reply::class);
    } 
}
