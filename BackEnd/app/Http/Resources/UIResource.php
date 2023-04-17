<?php

namespace App\Http\Resources;

use App\Models\UserProfile;
use App\Models\TSProfile;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class UIResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'email' => $this->email,
            'phone_number' => $this->phone_number,
            'user_roles' => $this->user_roles,
            'about' => $this->about,
            'user_profile' => $this->user_roles === 'user'
                ? UserProfile::where('user_id', $request->id)->get() 
                : tsProfile::where('user_id', $request->id)->get(),
            'status' => 200,
        ];
    }
}
