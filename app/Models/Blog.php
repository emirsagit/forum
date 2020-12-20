<?php

namespace App\Models;

use App\Models\User;
use App\Models\Channel;
use App\Traits\Visitable;
use App\Traits\ConvertHtmlBlog;
use App\Traits\RecordsActivity;
use App\Casts\DateForHumansCast;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Blog extends Model implements Searchable
{
    use HasFactory, RecordsActivity, ConvertHtmlBlog, Visitable;

    public function getSearchResult(): SearchResult
    {
        $url = route('blogs.show', [$this->channel, $this->slug]);

        return new SearchResult(
            $this,
            $this->title,
            $url
        );
    }

    protected $fillable = [
        'title', 'body', 'summary', 'image', 'user_id', 'channel_id', 'blog_title', 'blog_description', 'slug', 'slider', 'editors_data',
    ];

    protected $casts = [
        'updated_at' => DateForHumansCast::class,
        'slider' => 'boolean',
        'body' => 'array',
        'editors_data' => 'array',
    ];

    protected $with = [
        'channel'
    ];

    public function path()
    {
        return '/blogs/' . $this->channel->slug . '/' . $this->slug;
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function getBodyAttribute($value)
    {
        return $this->getHtml($value);
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function channel()
    {
        return $this->belongsTo(Channel::class);
    }
}
