<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Channel;
use Illuminate\Http\Request;

class BlogsController extends Controller
{
    public function index()
    {
        $blogs = Blog::latest()->take(4)->get();
        $sliders = Blog::where('slider', true)->get();
        return view('blogs.index', ['blogs' => $blogs, 'sliders' => $sliders, 'channels' => Channel::get()]);
    } 

    public function channel(Channel $channel)
    {
        $blogs = Blog::where('channel_id', $channel->id)->latest()->get();

        if (request()->wantsJson()) {
            return $blogs;
        }

        $sliders = Blog::where('slider', true)->get();
        
        return view('blogs.index', ['blogs' => $blogs, 'sliders' => $sliders]);
    }

    public function show(Channel $channel, Blog $blog)
    {
        $blog->load('owner');

        return view('blogs.show', [
            'blog' => $blog,
            'blogs' => $channel->blogs,
        ]);
    } 
}
