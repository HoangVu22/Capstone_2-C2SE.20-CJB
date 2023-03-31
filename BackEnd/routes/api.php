<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\PersonalToursController;
use App\Http\Controllers\ToursController;
use App\Http\Controllers\TSProfileController;
use App\Http\Controllers\UserProfileController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(AuthController::class)->prefix('auth')->group(function(){
    Route::post('/login', 'login');
    Route::post('/userRegister', 'userRegister');
    Route::post('/tsRegister', 'tsRegister');

});

Route::controller(UserProfileController::class)->prefix('user/profile')->group(function(){
    Route::post('/update', 'update');
});

Route::controller(TSProfileController::class)->prefix('ts/profile')->group(function(){
    Route::post('/update', 'update');
});

Route::prefix('homepage')->group(function(){
    Route::get('/group', [PersonalToursController::class, 'homepageGroups']);
    Route::get('/tour', [ToursController::class, 'homepageTours']);
});