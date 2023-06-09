<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;


class HomepageGroupResource extends JsonResource
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
            'from_date' => $this->from_date,
            'to_date' => $this->to_date,
            'from_where' => $this->from_where,
            'to_where' => $this->to_where,
            'host' => $this->user->name,
            'room' => [
                'owner' => $this->room->user->name,
                'name' => $this->room->name,
                'description' => $this->room->description,
                'member' => $this->room->members()->where('is_confirm', true)->count('user_id'),
            ],
            'status' => 200,
        ];
    }
}
