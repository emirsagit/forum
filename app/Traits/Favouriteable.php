<?php

namespace App\Traits;

use App\Models\Favourite;

trait Favouriteable
{
    public function isFavourited()
    {
        return $this->favourites->where('user_id', auth()->user()->id)->count();
    } 

    public function getFavouritesCountAttribute()
    {
        return $this->favourites->count();
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