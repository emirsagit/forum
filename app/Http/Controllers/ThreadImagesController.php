<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ThreadImagesController extends Controller
{
    public function store(Request $request)
    {
        $this->validate(request(), [
            'file' => 'required|image'
        ]);

        $image = auth()->user()->images()->create([
            'image' => request()->file('file')->store('images', 'public')
        ]);
        
        return response()->json([
            'success' => 1,
            'file' => [  
              'url' => 
                env('APP_URL') . '/storage/' . $image->image,
              // any other image data you want to store, such as width, height, color, extension, etc
            ],
        ]); 
    } 
}
