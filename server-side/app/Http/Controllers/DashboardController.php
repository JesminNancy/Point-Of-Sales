<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductModel;
use App\Models\CategoryModel;
use App\Models\TransactionModel;

class DashboardController extends Controller
{
    function countProduct(){
        return ProductModel::count();
    }

    function countCategory(){
        $result= CategoryModel::count();
        return $result;
    }


    function countTransaction(){
        $result=TransactionModel::count();
        return $result;
    }

    function countTotalIncome(){
        $transaction=TransactionModel::all();
        $total_income=0;
        foreach($transaction as $transactionlist){
            $total_income=$total_income+$transactionlist['product_total_price'];
        }
        return $total_income;

        }

}
