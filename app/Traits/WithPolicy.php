<?php

namespace App\Traits;

use Illuminate\Support\Facades\Gate;


trait WithPolicy
{
    public function getCanAttribute()
    {
        $methods = collect(get_class_methods(Gate::getPolicyFor($this)));

        return $methods->mapWithKeys(function ($method) {
            return [$method => Gate::allows($method, $this)];
        });
    }
}
