<?php

use App\Http\Controllers\ClientGridController;
use App\Http\Controllers\FilmsController;
use App\Models\HallConfig;
use App\Http\Controllers\HallsConfigController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SessionGridController;
use App\Models\Film;
use App\Models\SessionGrid;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'films'=>Film::all(),
        'grid'=>SessionGrid::select('*')->where('data', '=', date('Y-m-d'))->get()
    ]);
})->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/panelAdmin', function() {
    return Inertia::render('PanelAdmin', [
        'halls'=> HallConfig::all(),
        'films'=>Film::all(),
    ]);
})->middleware(['status', 'verified'])->name('panelAdmin');

Route::get('/ShowHall', function () {return Inertia::render('ShowHall');})->name('showHall');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('grid_client/showHall/{state}', [ClientGridController::class, 'showHall'])->name('showHall');
Route::get('showHall/{state}', function(SessionGrid $grid) {return $grid;});
Route::get('grid_client/showTiket/{tiket}', [ClientGridController::class, 'tiket'])->name('showTiket'); 
Route::resource('halls', HallsConfigController::class);
Route::resource('grid', SessionGridController::class);
Route::resource('grid_client', ClientGridController::class);

require __DIR__.'/auth.php';
