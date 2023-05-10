<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\TSProfile;
use App\Models\TripPlan;
use App\Models\Images;
use Illuminate\Database\Eloquent\Casts\Attribute;

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

    public function tsProfile(){
        return $this->belongsTo(TSProfile::class, 'ts_id');
    }
    
    public function images(){
        return $this->hasMany(Images::class, 'tour_id');
    }

    public function tripPlans(){
        return $this->hasMany(TripPlan::class, 'tour_id');
    }
}
