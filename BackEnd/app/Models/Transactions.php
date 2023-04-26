<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

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

    protected function amount(): Attribute
    {
        return Attribute::make(
            set: fn ($value) => $value / 100,
            get: fn ($value) => $value / 100,
        );
    }

    protected $table = 'transactions';
}
