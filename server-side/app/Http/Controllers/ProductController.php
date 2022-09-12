<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductModel;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    function addProduct(Request $request){
        $product_name=$request->input('product_name');
        $product_code=time();
        $product_price=$request->input('product_price');
        $product_category=$request->input('product_category');
        $product_remarks=$request->input('product_remarks');
        $product_icon=$request->file('image')->store('public/img');

        $result=ProductModel::insert([
            'product_name'=>$product_name,
            'product_code'=>$product_code,
            'product_icon'=>$product_icon,
            'product_price'=>$product_price,
            'product_category'=>$product_category,
            'product_remarks'=>$product_remarks,
        ]);
        return $result;
    }

    function selectProduct(){
        $result=ProductModel::all();
        return $result;
    }

    function selectProductByCategory(Request $request){
        $category=$request->input('category');
        $result=ProductModel::where('product_category',$category)->get();
        return $result;
    }

    function deleteProduct(Request $request){
        $id= $request->id;
        $product_icon=ProductModel::Where('id',$id)->get(['product_icon']);
        Storage::delete($cat_icon[0]['product_icon']);
        $result=ProductModel::Where('id', $id)->delete();
        return  $result;
    }

    function updateProductWithoutImage(Request $request){
        $id=$request->input('id');
        $product_name=$request->input('product_name');
        $product_price=$request->input('product_price');
        $product_category=$request->input('product_category');
        $product_remarks=$request->input('product_remarks');

        $result=ProductModel::update([
            'product_name'=>$product_name,
            'product_price'=>$product_price,
            'product_category'=>$product_category,
            'product_remarks'=>$product_remarks,
        ]);
        return $result;
    }

    function updateProductWithImage(Request $request){
        $id= $request->input('id');
        // Old Image Delete
        $product_icon=ProductModel::Where('id',$id)->get(['product_icon']);
        Storage::delete($cat_icon[0]['product_icon']);

        //New Images Upload
        $product_icon=$request->file('image')->store('public/img');
        $product_name=$request->input('product_name');
        $product_price=$request->input('product_price');
        $product_category=$request->input('product_category');
        $product_remarks=$request->input('product_remarks');

        $result=ProductModel::update([
            'product_name'=>$product_name,
            'product_icon'=>$product_icon,
            'product_price'=>$product_price,
            'product_category'=>$product_category,
            'product_remarks'=>$product_remarks,
        ]);
        return $result;

    }
}
