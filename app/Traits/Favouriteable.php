<?php

namespace App\Traits;

use App\Models\Favourite;

trait Favouriteable
{
    //it is automatically call when relational model called
    protected static function bootFavouriteable()
    {
        if (auth()->guest()) {
            return;
        }

        static::deleting(function ($model) {
            $model->favourites->each->delete();
        });
    }

    public function isFavourited()
    {
        if (! $user = auth()->user()) return;
        return $this->favourites->where('user_id', $user->id)->count();
    }

    public function getIsFavouritedAttribute()
    {
        return $this->isFavourited();
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
        if (!$this->favourites()->where($attributes)->exists()) {
            $this->favourites()->create($attributes);
        }
    }

    public function unfavourite()
    {
        $attributes = ['user_id' => auth()->id()];
        $this->favourites()->where($attributes)->get()->each(function ($favourite){
            $favourite->delete();
        });
    }
}
