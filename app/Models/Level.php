<?php

namespace App\Models;

use App\Models\User;
use App\Models\Puzzle;
use App\Traits\ConvertHtmlBlog;
use App\Casts\DateForHumansCast;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Level extends Model
{
    use HasFactory, ConvertHtmlBlog;

    public function getRouteKeyName()
    {
        return 'slug';
    }

    protected $fillable = [
        'name', 'slug', 'seo_title', 'seo_description', 'image', 'body', 'editors_data', 'user_id'
    ];

    protected $casts = [
        'created_at' => DateForHumansCast::class,
        'updated_at' => DateForHumansCast::class,
        'body' => 'array',
        'editors_data' => 'array',
    ];

    public function getBodyAttribute($value)
    {
        return $this->getHtml($value);
    }

    public function puzzles()
    {
        return $this->belongsToMany(Puzzle::class)->withTimestamps()->with('levels')->latest();
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    } 
}
