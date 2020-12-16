<?php

namespace App\Http\Controllers\Admin;

use App\Models\Image;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class AdminImagesController extends Controller
{
    public function store(Image $image)
    {
        $image = $image->create([
            'image_path' => request()->file('file')->store('blog/editor', 'public'),
            // 'alt' => pathinfo(request()->file('file')->getClientOriginalName(), PATHINFO_FILENAME)
        ]);

        $path = Storage::url($image->image_path);

        return ['path' => $path, 'success' => true];
    } 
}
