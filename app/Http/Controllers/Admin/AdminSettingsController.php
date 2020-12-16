<?php

namespace App\Http\Controllers\Admin;

use App\Models\Setting;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class AdminSettingsController extends Controller
{
    public function store(Request $request)
    {
        $setting = Setting::first();

        if (!$setting) {
            Setting::create([
                'home_h1' => $request->home_h1,
                'home_title' => $request->home_title,
                'logo_title' => $request->logo_title,
                'home_description' => $request->home_description,
                'facebook' => $request->facebook,
                'instagram' => $request->instagram,
                'twitter' => $request->twitter,
                'about' => $request->about,
            ]);
        } else {
            $setting->update([
                'home_h1' => $request->home_h1,
                'logo_title' => $request->logo_title,
                'home_title' => $request->home_title,
                'home_description' => $request->home_description,
                'facebook' => $request->facebook,
                'instagram' => $request->instagram,
                'twitter' => $request->twitter,
                'about' => $request->about,
            ]);
        }
    }

    public function index()
    {
        return Setting::first();
    }

    public function destroy(Setting $setting)
    {
        Storage::disk('public')->delete($setting->logo);

        $setting->update([
            'logo' => null
        ]);
    }

    public function upload()
    {
        $this->validate(request(), [
            'logo' => 'required|image'
        ]);

        $setting = Setting::first();

        if (!$setting) {
            Setting::create([
                'logo' => request()->file('logo')->store('logo', 'public')
            ]);
        } else {
            Storage::disk('public')->delete($setting->logo);
            $setting->update([
                'logo' => request()->file('logo')->store('logo', 'public')
            ]);
        }
    }
}