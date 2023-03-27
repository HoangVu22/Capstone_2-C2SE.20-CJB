<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class TSProfile extends Model
{
    use HasFactory;

    protected $table = 'ts_profiles';

    public function user(){
        return $this->belongsTo(User::class);
    }
}
