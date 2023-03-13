<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use app\Http\controllers\apiController;
use App\Http\Controllers\taskcontroller;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return response()->json([
        'user'=>$request->user(),
        'isAdmin'=>$request->user()->role_user->role->name
    ]);
});
Route::get('/gettask' , [taskcontroller::class ,'getuser']);
Route::any('/create',[taskcontroller::class,'create'])->name('create');
Route::get('get/{id}', [taskcontroller::class,'update_user']);
Route::get('view_data',[taskcontroller::class , 'view_data']);
Route::get("/delete_data/{id}",[taskcontroller::class ,'delete']);
Route::post('update/{id}',[taskcontroller::class ,'submit_update_user_data']);
Route::post('/register',[taskcontroller::class,'registeruser']);
Route::get('/getProduct',[taskcontroller::class,'getProduct'])->name('getProduct');
Route::post('/PayOut',[taskcontroller::class,'payout'])->name('PayOut');

// });
Route::post('/login',[taskcontroller::class,'login']);

// [taskcontroller::class,'adminLogin']);
// Route::post('/admin/login',function(){
//      return "hello";
// });
