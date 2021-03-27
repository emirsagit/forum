<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Activity;
use Artesaos\SEOTools\Facades\SEOTools;

class ProfilesController extends Controller
{
    public function show(User $user)
    {
        SEOTools::setTitle($user->name);
        SEOTools::setDescription("Parkinson Hasta ve Hasta Yakınları Forum üyelerimizden " . $user->name . "aktivitelerini görüntüleyebilirsiniz.");
        SEOTools::opengraph()->setUrl('https://www.parkinsonnedir.com/profiles' . $user->slug);
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::twitter()->setSite('@parkinsonnedir');
        SEOTools::jsonLd()->addImage('https://www.parkinsonnedir.com/img/logo.jpg');

        return view('profiles.show', [
            'user' => $user,
            'activities' => Activity::feed($user)
        ]);
    }
}
