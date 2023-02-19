<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
class apiController extends Controller
{
  public function getuser(){
      // return "hello";
    
       $data= DB::table('users')->get();
        return $data;
      //  return response()->json($data);
  }
}
