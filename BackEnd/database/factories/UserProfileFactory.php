<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserProfile>
 */
class UserProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => fake()->unique()->numberBetween(6, 55),
            'gender' => array_rand(['male' => 1, 'female' => 2]),
            'avatar' => array_rand([ 
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOnUBiI51lBoTRhYTJHEh8eM4BUb66vN5BeQ&usqp=CAU' => 2,
                'https://haycafe.vn/wp-content/uploads/2021/12/hinh-anh-anime-nam-1.jpg' => 3,
            ]),
        ];
    }
}
