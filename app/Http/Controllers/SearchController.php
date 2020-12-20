<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\User;
use App\Models\Thread;
use Illuminate\Http\Request;
use Spatie\Searchable\Search;

class SearchController extends Controller
{
    // Spatie ModelSearchAspect clasına withtrashed eklediğim için sonuçlar softdelete olanlarla birlikte gelecek
    public function index(Request $request)
    {
        $searchResults = (new Search())
            ->registerModel(Thread::class, 'title')
            ->registerModel(Blog::class, 'title')
            ->search($search = $request->search);

        return view('search.index', compact(['searchResults', 'search']));
    }

    public function users(Request $request)
    {
        if (!$request->search) {
            return User::latest()->get();
        }

        $results = (new Search())
            ->registerModel(User::class, 'username')
            ->search($request->search);

        $results = $results->map(function ($result) {
            return $result->searchable;
        });

        return $results;
    }

    public function threads(Request $request)
    {
        if (!$request->search) {
            return Thread::latest()->get();
        }

        $results = (new Search())
            ->registerModel(Thread::class, 'title')
            ->search($request->search);

        $results = $results->map(function ($result) {
            return $result->searchable;
        });

        return $results;
    }

    public function blogs(Request $request)
    {
        if (!$request->search) {
            return Blog::latest()->get();
        }

        $results = (new Search())
            ->registerModel(Blog::class, 'title')
            ->search($request->search);

        $results = $results->map(function ($result) {
            return $result->searchable;
        });

        return $results;
    }
}
