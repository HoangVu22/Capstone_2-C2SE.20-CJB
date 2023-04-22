<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transactions extends Model
{
    use HasFactory;

    protected $fillable = [
        'ordered_id',
        'amount',
        'bankCode',
        'cardType',
        'responseCode',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $table = 'transactions';
}
