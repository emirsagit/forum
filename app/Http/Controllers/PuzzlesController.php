<?php

namespace App\Http\Controllers;

use App\Models\Level;
use Illuminate\Http\Request;

class PuzzlesController extends Controller
{
    public function index()
    {
        $levels = Level::withCount('puzzles')->get();

        return view('puzzles.index', compact('levels'));
    }

    public function show(Level $level)
    {
        $puzzles = $level->puzzles;
        $level->load('owner');
        $levels = Level::get();
        return view('puzzles.show', compact(['puzzles', 'level', 'levels']));
    }
}
