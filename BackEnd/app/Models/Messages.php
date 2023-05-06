<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Messages extends Model
{
    use HasFactory;

    protected $table = "messages";

    protected $fillable = [
        'image_name',
        'tour_id',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];
}
