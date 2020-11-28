<?php

namespace App\Http\Controllers;

use App\Models\Thread;
use Illuminate\Http\Request;
use Spatie\Searchable\Search;

class SearchController extends Controller
{
    public function index(Request $request)
    {
        $searchResults = (new Search())
            ->registerModel(Thread::class, 'title')
            ->search($search = $request->search);

        return view('search.index', compact(['searchResults', 'search']));
    }
}
