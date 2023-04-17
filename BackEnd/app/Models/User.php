<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\PersonalTours;
use App\Models\Tours;
use App\Models\UserProfile;

// use App\Models\Scopes\ExceptScope;
 
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The "booted" method of the model.
     */
    // protected static function booted(): void
    // {
    //     static::addGlobalScope(new ExceptScope);
    // }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phone_number',
        'is_Admin',
        'user_roles',
        'about',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'created_at',
        'updated_at',
        'email_verified_at'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function tours(){
        return $this->hasMany(Tours::class);
    }

    public function personal_tours(){
        return $this->hasMany(PersonalTours::class);
    }

    public function rooms(){
        return $this->belongsToMany(PersonalTours::class, 'rooms', 'user_id', 'pt_id');
    }

    public function userProfile(){
        return $this->hasOne(UserProfile::class, 'user_id', 'id');
    }
}
