<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TransactionModel;
use App\Models\CartModel;

class TransactionController extends Controller
{
    function cartSell(Request $request){
        $invoice=$request->invoice;
        $CartList=CartModel::Where('invoice_no',$invoice)->get();
        $cartInsertDeleteResult="";
        foreach($CartList as $CartListItem) {
            $resultInsert=  TransactionModel::insert([
                "invoice_no"=>$CartListItem['invoice_no'],
                "invoice_date"=>$CartListItem['invoice_date'],
                "product_name"=>$CartListItem['product_name'],
                "product_qty"=>$CartListItem['product_qty'],
                "product_unit_price"=>$CartListItem['product_unit_price'],
                "product_total_price"=>$CartListItem['product_total_price'],
                "seller_name"=>$CartListItem['seller_name'],
                "product_icon"=>$CartListItem['product_icon'],
            ]);

            if($resultInsert==1){
                $resultDelete= CartModel::Where('id',$CartListItem['id'])->delete();
                if($resultDelete==1){
                    $cartInsertDeleteResult=1;
                }
                else{
                    $cartInsertDeleteResult=0;
                }
            }
        }
        return $cartInsertDeleteResult;
    }


}