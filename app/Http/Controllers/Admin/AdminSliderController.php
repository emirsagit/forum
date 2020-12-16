<?php

namespace App\Http\Controllers\Admin;

use App\Models\Blog;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminSliderController extends Controller
{
    public function update(Blog $blog)
    {
        $blog->update([
            'slider' => ! $blog->slider
        ]);
        return $blog->slider;
    } 
}
