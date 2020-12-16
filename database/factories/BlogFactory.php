<?php

namespace Database\Factories;

use App\Models\Blog;
use App\Models\User;
use App\Models\Channel;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class BlogFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Blog::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => User::factory(),
            'channel_id' => Channel::factory(),
            'title' => $title = $this->faker->sentence,
            'body' => $this->faker->paragraph,
            'slug' => Str::slug($title),
            'image' => 'blog/' . rand(1, 7) . '.jpg'
        ];
    }
}
