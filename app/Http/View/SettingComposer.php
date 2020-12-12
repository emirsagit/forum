<?php

namespace App\Http\View;

use App\Models\Setting;
use Illuminate\View\View;

class SettingComposer
{
    protected $setting;

    public function __construct()
    {
        if (! $this->setting) {
            $this->setting = Setting::first();
        }
    }

    public function compose(View $view)
    {
        return $view->with(['setting' => $this->setting]);
    }
}
