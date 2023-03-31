<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\TSProfile;

class Tours extends Model
{
    use HasFactory;

    protected $table = 'tours';

    protected $fillable = [
        'ts_id',
        'name',
        'address',
        'description',
        'from_date',
        'to_date',
        'price',
        'slot',
        'lat',
        'lon',
        'transport',
        'cuisine',
        'sight_seeing'
    ];

    public function tsProfile(){
        return $this->belongsTo(TSProfile::class, 'ts_id');
    }
}
