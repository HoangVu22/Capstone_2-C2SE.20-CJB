<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'phone_number' => '0' . fake()->unique()->numberBetween(100000000, 99999999999999),
            'is_Admin' => false,
            'user_roles' => array_rand(['user' => 1, 'ts' => 2]),
            'email_verified_at' => now(),
            'password' => 'truongboanhai', // password
            'remember_token' => Str::random(10),
            'about' => Str::random(100),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
