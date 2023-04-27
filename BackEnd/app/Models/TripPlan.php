<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Tours;

class TripPlan extends Model
{
    use HasFactory;
    
    protected $table = "trip_plans";

    protected $fillable = [
        'name',
        'description',
        'tour_id',
        'lat',
        'lon',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    public function tour(){
        return $this->belongsTo(Tours::class, 'tour_id');
    }
}
