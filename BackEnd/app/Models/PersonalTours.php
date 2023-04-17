<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class PersonalTours extends Model
{
    use HasFactory;

    protected $table = 'personal_tours';

    protected $fillable = [
        'name',
        'owner_id',
        'room_id',
        'description',
        'address',
        'from_date',
        'to_date',
        'lat',
        'lon',
        'from_where',
        'to_where',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function user(){
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function rooms(){
        return $this->belongsToMany(User::class, 'rooms', 'pt_id', 'user_id');
    }
}
