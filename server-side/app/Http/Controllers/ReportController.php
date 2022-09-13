<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReportController extends Controller
{

    function transactionList(){
        $result=TransactionModel::orderById('id', 'desc')->get();
        return $result;
    }

    function TransactionListByDate(Request $request){

        $result=  TransactionModel::orderBy('id','desc')->get();
        return  $result;
    }

}
