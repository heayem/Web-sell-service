<?php

use App\Http\Controllers\Clients\AboutController;
use App\Http\Controllers\Clients\HomeController;
use App\Http\Controllers\Clients\ServiceController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [HomeController::class, 'index'])->name('home.page');
Route::get('/service', [ServiceController::class, 'index'])->name('service.page');
Route::get('/about-us', [AboutController::class, 'index'])->name('about.us.page');


require __DIR__ . '/auth.php';
