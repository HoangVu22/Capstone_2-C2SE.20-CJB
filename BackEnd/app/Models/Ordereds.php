<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ordereds extends Model
{
    use HasFactory;

    protected $table = 'ordereds';

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
