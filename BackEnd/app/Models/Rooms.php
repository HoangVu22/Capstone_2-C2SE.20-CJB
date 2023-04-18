<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Rooms extends Model
{
    use HasFactory;

    protected $table = 'rooms';

    protected $fillable = [
        'room_owner',
        'name',
        'description',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function user(){
        return $this->belongsTo(User::class, 'room_owner');
    }

    public function members(){
        return $this->belongsToMany(User::class, 'members', 'room_id', 'user_id');
    }
}
