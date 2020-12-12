<?php

namespace App\Traits;

use App\Models\Visit;
use Illuminate\Support\Carbon;

trait Visitable
{

    public function visits()
    {
        return $this->morphMany(Visit::class, 'visit');
    }

    public function recordVisit($ip)
    {
        $visits = $this->visits();

        $visit = $visits->where('ip', $ip)->latest()->first();

        if(! $visit) {
            return $visits->create(['ip' => $ip]);
        }

        if($visit->created_at < Carbon::yesterday()) {
            return $visits->create(['ip' => $ip]);
        }
        
        return;
    }
}
