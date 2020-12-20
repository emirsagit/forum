<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'logo', 'home_h1', 'home_title', 'home_description', 'logo_title', 'facebook', 'instagram', 'twitter', 'about', 'puzzle_title', 'puzzle_description'
    ];
}
