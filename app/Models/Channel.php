<?php

namespace App\Models;

use App\Models\Blog;
use App\Models\Thread;
use App\Casts\DateForHumansCast;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Channel extends Model
{
    use HasFactory;

    protected $casts = [
        'created_at'=> DateForHumansCast::class,
    ];

    protected $fillable = [
        'name', 'slug', 'color', 'channel_title', 'channel_description'
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function threads()
    {
        return $this->hasMany(Thread::class);
    } 

    public function blogs()
    {
        return $this->hasMany(Blog::class);
    } 
}
