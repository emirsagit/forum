<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Notifications\ContactFormSent;
use App\Http\Requests\ContactFormRequest;
use Illuminate\Support\Facades\Notification;

class ContactController extends Controller
{
    public function index(User $user)
    {
        $admins = $user->getAdmins();
        return view('contact.index', compact('admins'));
    }

    public function store(ContactFormRequest $request, User $user)
    {
        $users = $user->getAdmins();

        Notification::send($users, new ContactFormSent($request->all()));

        return back()->with([
            'message' => "Mesajınız Gönderildi"
        ]);
    }
}
