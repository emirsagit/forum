<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Thread;
use App\Models\Channel;
use Artesaos\SEOTools\Facades\SEOTools;

class BlogsController extends Controller
{
    public function index()
    {
        $this->indexSeo();

        $blogs = Blog::orderByDesc('updated_at')->withCount('visits')->get();

        $trendings = $blogs->sortByDesc('visits_count')->take(8);

        $blogs = $blogs->take(4);

        $channels = Channel::orderBy('created_at' ,'desc')->get();

        $threads = Thread::orderByDesc('updated_at')->take(8)->get();

        return view('blogs.index', ['blogs' => $blogs, 'trendings' => $trendings, 'threads' => $threads, 'channels' => $channels]);
    } 

    public function channel(Channel $channel)
    {
        if($channel->channel_description && $channel->channel_title) {
            $this->channelSeo($channel);
        }

        $blogs = Blog::where('channel_id', $channel->id)->orderByDesc('updated_at')->get();

        if (request()->wantsJson()) {
            return $blogs;
        }

        return view('blogs.index', ['blogs' => $blogs]);
    }

    public function show(Blog $blog)
    {
        $this->showSeo($blog);

        $blog->recordVisit($_SERVER['REMOTE_ADDR']);

        $blog->load('owner')->loadCount('visits');

        return view('blogs.show', [
            'blog' => $blog,
            'blogs' => $blog->channel->blogs,
        ]);
    } 

    protected function indexSeo()
    {
        SEOTools::setTitle('Parkinson Hastaları Yardımlaşma ve Dayanışma Platformu');
        SEOTools::setDescription('Parkinson tedavisi ile ilgili son gelişmeleri sayfamızda bulabilirsiniz. Parkinson hasta ve hasta yakınlarını buluşturan parkinson forumu hizmetinizdedir.');
        SEOTools::opengraph()->setUrl('https://www.parkinsonnedir.com/blog');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite('@parkinsonnedir');
        SEOTools::jsonLd()->addImage('https://www.parkinsonnedir.com/img/logo.jpg');
    }

    protected function channelSeo($channel)
    {
        SEOTools::setTitle($channel->channel_title);
        SEOTools::setDescription($channel->channel_description);
        SEOTools::opengraph()->setUrl('https://www.parkinsonnedir.com/forum/' . $channel->slug);
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite('@parkinsonnedir');
        SEOTools::jsonLd()->addImage('https://www.parkinsonnedir.com/img/logo.jpg');
    }

    protected function showSeo($blog)
    {
        SEOTools::setTitle($blog->blog_title);
        SEOTools::setDescription($blog->blog_description);
        SEOTools::opengraph()->setUrl('https://www.parkinsonnedir.com/' . $blog->slug);
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite('@parkinsonnedir');
        SEOTools::jsonLd()->addImage('https://www.parkinsonnedir.com/img/logo.jpg');
    }
}
