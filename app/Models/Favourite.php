<?php

namespace App\Models;

use App\Models\User;
use App\Traits\RecordsActivity;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Favourite extends Model
{
    use HasFactory, RecordsActivity;

    protected $fillable = [
        'user_id', 'favouriteable_type', 'favouriteable_id'
    ];
    
    public function favourited()
    {
        return $this->morphTo('favouriteable');
    }
}
