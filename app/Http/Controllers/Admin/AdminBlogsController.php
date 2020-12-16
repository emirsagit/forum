<?php

namespace App\Http\Controllers\Admin;

use App\Models\Blog;
use App\Models\Image;
use App\Models\Channel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Rules\EditorJsValidationRules;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\AdminBlogFormRequest;
use App\Http\Requests\AdminBlogUpdateFormRequest;

class AdminBlogsController extends Controller
{
    public function index()
    {
        return view('admin.blogs.index', [
            'blogs' => Blog::with(['channel'])->latest()->get(),
            'channels' => Channel::get()
        ]);
    }

    public function store(AdminBlogFormRequest $request)
    {
        $blog = Blog::create([
            'user_id' => auth()->user()->id,
            'channel_id' => $request->channel_id,
            'title' => $request->title,
            'slug' => $request->slug,
            'summary' => $request->summary,
            'body' => $request->body,
            'editors_data' => $request->body,
            'blog_title' => $request->blog_title,
            'blog_description' => $request->blog_description,
            'image' => $request->file('image')->store('blog', 'public')
        ]);
        
        $this->updateImagesTable($request, $blog);

        $this->destroyEditorsNotUsedImages();

        return $blog->load('channel');
    }

    public function update(Blog $blog, AdminBlogUpdateFormRequest $request)
    {
        if ($request->image) {
            Storage::disk('public')->delete($blog->image);
            $blog->update([
                'image' => $request->file('image')->store('blog', 'public')
            ]);
        };

        $blog->update([
            'channel_id' => $request->channel_id,
            'title' => $request->title,
            'summary' => $request->summary,
            'body' => $request->body,
            'editors_data' => $request->body,
            'blog_title' => $request->blog_title,
            'blog_description' => $request->blog_description,
        ]);

        $this->updateImagesTable($request, $blog);

        $this->destroyEditorsNotUsedImages();

        return $blog->load('channel');
    }

    public function destroyEditorsNotUsedImages()
    {
        $images = Image::where('blog_id', null)->get();
        foreach ($images as $image) {
            Storage::disk('public')->delete($image->image_path);
            $image->delete();
        }
    } 

    public function updateImagesTable($request, $blog)
    {
        foreach ($request->body['blocks'] as $block) {
            if ($block['type'] === 'image') {
                $image = explode("/", $block['data']['file']['url'], 3);
                $image = Image::where('image_path', $image[2])->first();
                $image->update([
                    'blog_id' => $blog->id
                ]);
            }
        }
    } 
}
