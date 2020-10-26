<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    protected $fillable = [
        'type', 'user_id', 'subject_id', 'subject_type', 'created_at'
    ];

    use HasFactory;

    public function subject()
    {
        return $this->morphTo();
    }

    public static function feed($user, $take=50)
    {
        return static::where('user_id', $user->id)
        ->with('subject')
        ->take($take)
        ->get()
        ->groupBy(function ($activity) {
            return $activity->created_at->format('d-m-Y');
        });
    }
}
