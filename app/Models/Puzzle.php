<?php

namespace App\Models;

use App\Casts\DateForHumansCast;
use App\Models\Level;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Puzzle extends Model
{
    use HasFactory;

    protected $casts = [
        'created_at' => DateForHumansCast::class
    ];

    protected $fillable = [
        'question', 'answer'
    ];

    public function levels()
    {
        return $this->belongsToMany(Level::class, 'level_puzzle')->withTimestamps();
    } 
}
