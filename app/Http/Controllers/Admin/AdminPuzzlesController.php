<?php

namespace App\Http\Controllers\Admin;

use App\Models\Level;
use App\Models\Puzzle;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\PuzzlesFormRequest;

class AdminPuzzlesController extends Controller
{
    public function index()
    {
        return view('admin.puzzles.index', [
            'puzzles' => Puzzle::with('levels')->latest()->get(),
            'levels' => Level::get()
        ]);
    }

    public function store(PuzzlesFormRequest $request)
    {
        $puzzle = Puzzle::create([
            'question' => $request->question,
            'answer' => $request->answer,
        ]);

        $puzzle->levels()->attach($request->levels);

        return $puzzle->load('levels'); 
    }

    public function update(Puzzle $puzzle, PuzzlesFormRequest $request)
    {
        $puzzle->update([
            'question' => $request->question,
            'answer' => $request->answer,
        ]);

        $puzzle->levels()->sync($request->levels);
            
        return $puzzle->load('levels'); 
    }

    public function destroy(Puzzle $puzzle)
    {
        $puzzle->delete();
    }

    public function level(Level $level)
    {
        return $level->puzzles;
    } 
}
