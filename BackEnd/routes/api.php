<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
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

})->middleware(['auth', 'auth.session']);

Route::controller(UserProfileController::class)->prefix('user/profile')->group(function(){
    Route::post('/create', 'store');
    Route::post('/userRegister', 'userRegister');

});