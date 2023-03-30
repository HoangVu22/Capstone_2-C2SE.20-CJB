<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;


class UserProfileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'user_id' => $this->user->id, 
            'name' => $this->user->name,
            'phone_number' => $this->user->email,
            'email' => $this->user->password,
            'gender' => $this->gender,
            'avatar' => $this->avatar,
        ];
    }
}
