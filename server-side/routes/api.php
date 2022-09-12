<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\TransactionController;

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


//Category......
Route::post('/addCategory',[CategoryController::class,'addCategory']);
Route::get('/selectCategory',[CategoryController::class,'selectCategory']);
Route::delete('/deleteCategory/{id}',[CategoryController::class,'deleteCategory']);
Route::post('/withoutiamge',[CategoryController::class,'updateCategoryWithoutImage']);
Route::post('/withiamge',[CategoryController::class,'updateCategoryWithImage']);

//Product......
Route::post('/addProduct',[ProductController::class,'addProduct']);
Route::get('/selectProduct',[ProductController::class,'selectProduct']);
Route::get('/selectProductByCategory/{category}',[ProductController::class,'deleteProduct']);
Route::get('/deleteProduct/{id}',[ProductController::class,'deleteProduct']);
Route::post('/withoutiamge',[ProductController::class,'updateProductWithoutImage']);
Route::post('/withiamge',[ProductController::class,'updateProductWithImage']);

//Dashboard
Route::get('/countProduct',[DashboardController::class,'countProduct']);
Route::get('/countCategory',[DashboardController::class,'countCategory']);
