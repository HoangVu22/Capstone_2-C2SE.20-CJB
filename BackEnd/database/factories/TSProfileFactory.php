<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TSProfile>
 */
class TSProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => fake()->unique()->numberBetween(56, 105),
            'avatar' => array_rand([
                'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/323952197_567233611560466_7304591525322997827_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uMNInV918rgAX-D1MHH&_nc_ht=scontent.fdad3-5.fna&oh=00_AfDE2DudSyD_Uredi03XLsCYCxDtCxPsYmxgiPaQXNs3_g&oe=643A5F44' => 1, 
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOnUBiI51lBoTRhYTJHEh8eM4BUb66vN5BeQ&usqp=CAU' => 2,
                'https://haycafe.vn/wp-content/uploads/2021/12/hinh-anh-anime-nam-1.jpg' => 3,
            ]),
        ];
    }
}
