<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ordereds extends Model
{
    use HasFactory;

    protected $table = 'ordereds';

    protected $fillable = [
        'user_id',
        'tour_id',
        'price',
        'tickets',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
