<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CategoryModel;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    function addCategory(Request $request){
        $name=$request->input('name');
        $imagepath=$request->file('image')->store('public/img');
        $code=time();
        $result=CategoryModel::insert(['cat_name'=>$name, 'cat_code'=>$code, 'cat_icon'=>$imagepath]);
        return $result;
    }

    function selectCategory(){
        $result=CategoryModel::all();
        return $result;
    }

    function deleteCategory(Request $request){
        $id= $request->id;
        $cat_icon= CategoryModel::Where('id',$id)->get(['cat_icon']);
        Storage::delete($cat_icon[0]['cat_icon']);
        $result=CategoryModel::Where('id', $id)->delete();
        return  $result;
    }

    function updateCategoryWithoutImage(Request $request){
        $id=$request->input('id');
        $name=$request->input('name');
        $result=CategoryModel::Where('id', $id)->update(['cat_name'=>$name]);
        return  $result;
    }

    function updateCategoryWithImage(Request $request){
        $id= $request->input('id');

        // Old Image Delete
        $cat_icon= CategoryModel::Where('id',$id)->get(['cat_icon']);
        Storage::delete($cat_icon[0]['cat_icon']);

        // New Image Upload
        $imagePath= $request->file('image')->store('public/img');


        $name= $request->input('name');

        $result= CategoryModel::Where('id', $id)->update(['cat_name'=>$name,'cat_icon'=>$imagePath]);

        return $result;
    }
}