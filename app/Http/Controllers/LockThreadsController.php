<?php

namespace App\Http\Controllers;

use App\Models\Thread;

class LockThreadsController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'admin']);
    }

    public function store(Thread $thread)
    {
        $thread->update(['locked' => true]);
    }
    
    public function destroy(Thread $thread)
    {
        $thread->update(['locked' => false]);
    }
}
