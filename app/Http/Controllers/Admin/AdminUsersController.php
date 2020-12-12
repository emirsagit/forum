<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Http\Controllers\Controller;

class AdminUsersController extends Controller
{
    public function index()
    {
        return view(
            'admin.users.index',
            [
                'users' => User::withTrashed()->latest()->get()
            ]
        );
    }

    public function update()
    {
        User::withTrashed()->where('username', request('user'))->first()->restore();
    } 

    public function destroy(User $user)
    {
        if ($user->isAdmin()) return;
        $user->delete(); 
    }
}
