<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class UserAvatarsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function store()
    {
        $this->validate(request(), [
            'avatar' => 'required|image'
        ]);

        $user = auth()->user();
        
        if ($user->avatar_path) {
            Storage::disk('public')->delete($user->getAttributes()['avatar_path']);
        }

        $user->update([
            'avatar_path' => request()->file('avatar')->store('avatars', 'public')
        ]);
    }
}
