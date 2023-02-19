<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Auth\Events\Failed;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
class taskcontroller extends Controller
{
    public function login(Request $request){
        $request->validate([
            'email'=>'required|email',
            'password'=>'required',
        ]);
        $check=User::where('email',$request->email)->first();
        if(!$check || !Hash::check($request->password,$check->password)){
            return response([
                'message'=> ['this credentials do not match our credentials']
                , 404]
            );
        }

        $createToken=$check->createToken('my-apps-token')->plainTextToken;
        $response=[
            'user'=>$check,
            'token'=>$createToken,
        ];
        return response($response,201);
    }

   public function view_data(){

    $users="this is the retrived data";
    $data=DB::table('users')->get();
    return response()->json($data);

   }

    public function getuser(){

        // return "hello";
      
        //  $data= DB::table('users')->get();
        //   return $data;
        $users="ahmedin";
        return response()->json($users);
        
    }
    public function create(Request $request){
      
        $request->validate([
             'name'=>'required|min:5',
             'email'=>'required|email|unique:users',
             
        ]);
         $check=DB::table('users')->insert
         (['name'=>$request->name, 
         'email'=>$request->email,
         'password'=>Hash::make(1234567745),
        ]);
         
         if($check){
            $data="successfully inserted";
           return response()->json($data, 200); 
         }
         return response("password not match");
    }
    public function delete($id){
        $check=DB::table('users')->where('id',$id)->delete();
        if($check)
        {
            $data=DB::table('users')->get();
            return response()->json($data);
            // return redirect('/view_data');
            return response()->json($data,200);
        }
    }
    public function update_user($id){
         $update_user=DB::table('users')->where('id',$id)->get();
         if($update_user){
            return response()->json($update_user,200);
         }
    }
    public function submit_update_user_data(Request $request ,$id){
        // $request->validate([
        //     'name'=>'required|min:3',
        //     'email'=>'required|email|unique:users',
        // ]);
        $update_user=DB::table('users')->where('id',$id)->update([
            'name'=>$request->name,
            'email'=>$request->email
            ]);
            if($update_user){
                return response()->json([
                    'message'=>"you are successfully updated",
                    'status'=>200]);
            }
            else{
                return response()->json([
                  'message'=>'Failed',
                  'status'=>400,
                ]);
            }
    }
    public function registeruser(Request $request){
        $request->validate([
           'fullName'=>'required',
           'email'=>'required|email',
           'password'=>'required|min:4',
           'confirm_password'=>'required',
        ]);
        User::create([
             'name'=>$request->fullName,
             'email'=>$request->email,
             'password'=>Hash::make($request->password),
             'token'
        ]);


       return response()->json([
                         'message'=>'succes',
                         'status'=>200,
                            ]);
                        
    }
    public function getProduct(){
             
                 $products_list=DB::table('products')->select()->get();
                 return response()->json([
                    'product'=>$products_list,
                    'status'=>200,

                ]);
}
}
