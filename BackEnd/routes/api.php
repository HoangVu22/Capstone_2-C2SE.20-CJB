<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\FriendController;
use App\Http\Controllers\PersonalToursController;
use App\Http\Controllers\ToursController;
use App\Http\Controllers\TSProfileController;
use App\Http\Controllers\UserProfileController;
use App\Http\Controllers\RoomsController;

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

Route::prefix('ts/tour')->group(function(){
    Route::get('/', [ToursController::class, 'index']);
    Route::get('/{id}', [ToursController::class, 'show']);
    Route::post('/create', [ToursController::class, 'store']);
    Route::post('/update/{id}', [ToursController::class, 'update']);
    Route::get('/delete/{id}', [ToursController::class, 'destroy']);
});

Route::prefix('personal/tour')->group(function(){
    Route::post('/create', [PersonalToursController::class, 'store']);
    Route::get('/show/{id}', [PersonalToursController::class, 'show']);
    Route::post('/update/{id}', [PersonalToursController::class, 'update']);
    Route::get('/delete/{id}', [PersonalToursController::class, 'destroy']);
});

Route::prefix('personal/room')->group(function(){
    Route::post('/create', [RoomsController::class, 'store']);
    Route::get('/show/{id}', [RoomsController::class, 'show']);
    Route::post('/update/{id}', [RoomsController::class, 'update']);
    Route::get('/delete/{id}', [RoomsController::class, 'destroy']);
});

Route::prefix('friend')->group(function(){
    Route::post('/create', [FriendController::class, 'store']);
    Route::get('/show/{id}', [FriendController::class, 'show']);
    Route::delete('/delete', [FriendController::class, 'destroy']);
});