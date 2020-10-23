<?php

namespace App\Models;

use App\Models\User;
use App\Models\Favourite;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Reply extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id', 'thread_id', 'body'
    ];

    public function isFavourited()
    {
        return $this->favourites()->where('user_id', auth()->user()->id)->exists();
    } 

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    } 

    public function favourites()
    {
        return $this->morphMany(Favourite::class, 'favouriteable');
    } 

    public function favourite()
    {
        $attributes = ['user_id' => auth()->id()];
        if(! $this->favourites()->where($attributes)->exists()) {
            $this->favourites()->create($attributes);
        }
    } 
}
