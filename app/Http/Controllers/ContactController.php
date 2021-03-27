<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\ContactFormSent;
use Artesaos\SEOTools\Facades\SEOTools;
use App\Http\Requests\ContactFormRequest;
use Illuminate\Support\Facades\Notification;

class ContactController extends Controller
{
    public function index(User $user)
    {
        SEOTools::setTitle('Parkinson Hastaları Yardımlaşma ve Dayanışma Formu İletişim');
        SEOTools::setDescription('Parkinson hasta ve hasta yakınları forum editörleri ile sayfamızı kullanarak iletişime geçebilirsiniz.');
        
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
