<?php

namespace App\Http\Controllers\Admin;

use App\Models\Level;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\LevelsFormRequest;
use App\Http\Requests\LevelUpdateFormRequest;

class AdminLevelsController extends Controller
{
    public function index()
    {
        return view('admin.levels.index', [
            'levels' => Level::withCount('puzzles')->latest()->get(),
        ]);
    }

    public function store(LevelsFormRequest $request)
    {
        $level = Level::create([
            'name' => $request->name,
            'user_id' => auth()->user()->id,
            'seo_title' => $request->seo_title,
            'seo_description' => $request->seo_description,
            'slug' => $request->slug,
            'body' => $request->body,
            'editors_data' => $request->body,
            'image' => $request->file('image') ? $request->file('image')->store('puzzles', 'public') : null
        ]);

        return $level;
    }


    public function update(Level $level, LevelUpdateFormRequest $request)
    {
        if ($request->image) {
            Storage::disk('public')->delete($level->image);
            $level->update([
                'image' => $request->file('image')->store('puzzles', 'public')
            ]);
        };

        $level->update([
            'name' => $request->name,
            'seo_title' => $request->seo_title,
            'seo_description' => $request->seo_description,
            'body' => $request->body,
            'editors_data' => $request->body,
        ]);

        return $level;
    }

    public function destroy(Level $level)
    {
        if ($level->image) {
            Storage::disk('public')->delete($level->image);
        };

        $level->delete();
    }
}
