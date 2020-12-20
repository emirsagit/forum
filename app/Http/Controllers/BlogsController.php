<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Thread;
use App\Models\Channel;
use Illuminate\Http\Request;

class BlogsController extends Controller
{
    public function index()
    {
        $blogs = Blog::orderByDesc('updated_at')->withCount('visits')->get();

        $trendings = $blogs->sortByDesc('visits_count')->take(8);

        $blogs = $blogs->take(4);

        $sliders = Blog::where('slider', true)->get();

        $threads = Thread::orderByDesc('updated_at')->take(8)->get();

        return view('blogs.index', ['blogs' => $blogs, 'sliders' => $sliders, 'trendings' => $trendings, 'threads' => $threads]);
    } 

    public function channel(Channel $channel)
    {
        $blogs = Blog::where('channel_id', $channel->id)->orderByDesc('updated_at')->get();

        if (request()->wantsJson()) {
            return $blogs;
        }

        $sliders = Blog::where('slider', true)->get();
        
        return view('blogs.index', ['blogs' => $blogs, 'sliders' => $sliders]);
    }

    public function show(Channel $channel, Blog $blog)
    {
        $blog->recordVisit($_SERVER['REMOTE_ADDR']);

        $blog->load('owner')->loadCount('visits');

        return view('blogs.show', [
            'blog' => $blog,
            'blogs' => $channel->blogs,
        ]);
    } 
}
