<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Rooms;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Casts\Attribute;

class PersonalTours extends Model
{
    use HasFactory;

    protected $table = 'personal_tours';

    protected $fillable = [
        'name',
        'owner_id',
        'room_id',
        'description',
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

    protected function fromDate(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => date('d-m-Y', strtotime($value)),
        );
    }

    protected function toDate(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => date('d-m-Y', strtotime($value)),
        );
    }

    public function user(){
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function room(){
        return $this->belongsTo(Rooms::class, 'owner_id');
    }

    public function rooms(){
        return $this->belongsToMany(User::class, 'rooms', 'pt_id', 'user_id');
    }
}
