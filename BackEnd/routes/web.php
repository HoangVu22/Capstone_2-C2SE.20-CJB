<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::middleware('auth')->group(function () {
//     Route::get('/dashboard', function () {
//         return view('pages.dashboard');
//     })->name('dashboard');
// });
// code for dev
Route::get('/', function () {
    return view('pages.dashboard');
})->name('dashboard');

Route::controller(UserController::class)->group(function () {
    Route::prefix('user')->group(function () {
        Route::get('/', 'index')->name('user');
        Route::get('/create', 'create')->name('user.create');
        Route::post('/create', 'store')->name('user.store');
        Route::get('/{id}', 'show')->name('user.show');
    });
});
