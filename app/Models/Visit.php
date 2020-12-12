<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visit extends Model
{
    protected $fillable = [
        'ip', 'visit_type', 'visit_id'
    ];
    use HasFactory;

    public function visitable()
    {
        return $this->morphTo('visit');
    }
}
