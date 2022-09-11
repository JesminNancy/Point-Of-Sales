<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//User......
Route::post('/addUser',[UserController::class,'AddUser']);
Route::get('/selectUser',[UserController::class,'selectUser']);
Route::get('/DeleteUser/{id}',[UserController::class,'DeleteUser']);
Route::post('/UpdateUser',[UserController::class,'UpdateUser']);