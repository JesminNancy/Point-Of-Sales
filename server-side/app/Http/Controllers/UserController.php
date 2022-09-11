<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserModel;

class UserController extends Controller
{
    function AddUser(Request $request){
        $name= $request->input('fullname');
        $username= $request->input('username');
        $role= $request->input('role');
        $password= $request->input('password');

        $userCount=UserModel::where('username',$username)->count();

        if($userCount>0){
         return "exists";
        }else{
         $result=UserModel::insert([
             "fullname"=>$name, "username"=>$username, "role"=>$role,
             "lastactivity"=>"No Activity", "password"=>$password,
         ]);
         return $result;
        }
     }

     function selectUser(){

        return UserModel::all();

      }

      function DeleteUser(Request $request){
        $id=$request->id;
        $result=UserModel::where('id',$id)->delete();
        if($result==true){
         return "Data Deleted";
        }else{
         return "Data Not Delete";
        }
    }

    function UpdateUser(Request $request){
        $id=$request->input('id');
        $name= $request->input('fullname');
        $username= $request->input('username');
        $role= $request->input('role');
        $password= $request->input('password');

        $userCount=UserModel::where('username',$username)->count();

        if($userCount>0){
         return "exists";
        }else{
         $result=UserModel::where('id',$id)->update([
             "fullname"=>$name, "username"=>$username, "role"=>$role,
             "lastactivity"=>"No Activity", "password"=>$password,
         ]);
         return $result;
        }
      }
}