<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\CartController;

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
Route::get('/countTransaction',[DashboardController::class,'countTransaction']);
Route::get('/countTotalIncome',[DashboardController::class,'countTotalIncome']);
Route::get('/IncomeLast7Days',[DashboardController::class,'IncomeLast7Days']);


// Cart
Route::post('/cartAdd',[CartController::class,'cartAdd']);
Route::get('/cartItemPlus/{id}/{quantity}/{price}',[CartController::class,'cartItemPlus']);
Route::get('/cartItemMinus/{id}/{quantity}/{price}',[CartController::class,'cartItemMinus']);
Route::get('/removeCartList/{id}',[CartController::class,'removeCartList']);
Route::get('/cartList',[CartController::class,'cartList']);

//Transaction
Route::get('/cartSell/{invoice}',[TransactionController::class,'cartSell']);
Route::get('/transactionList',[TransactionController::class,'transactionList']);
Route::get('/recentTransactionList',[TransactionController::class,'recentTransactionList']);