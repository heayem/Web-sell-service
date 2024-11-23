<?php

use App\Http\Controllers\Clients\FeatureController;
use App\Http\Controllers\Clients\HomeController;
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
Route::get('/feature', [FeatureController::class, 'index'])->name('feature.page');


require __DIR__ . '/auth.php';
