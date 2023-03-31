<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\UserProfile;
use App\Models\TSProfile;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\UserInfoResource;

class AuthController extends Controller
{
    //
    public function login(Request $request){
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            // $request->session()->regenerate();

            if(Auth::user()->is_Admin == true){
                return ;
            }
            else{
                return response()->json(['msg' => 'Đăng nhập thành công', 
                                        'user_info' =>
                                            new UserInfoResource(User::find(Auth::user()->id)),
                                        ], 200);
            }
        }
        else{
            return response()->json(['msg' => 'Đăng nhập thất bại', 'email' => $request->email], 401);
        }
    }

    public function userRegister(Request $request){
        try{
            $email = User::where('email', $request->email)->firstOrFail();
            return response()->json(['msg' => 'Đăng ký thất bại email của bạn đã tồn tại', 
                                    'data' =>[
                                        'email' => $request->email,
                                        'phone_number' => $request->phone_number,
                                        'password' => $request->password,
                                        'name' => $request->name
                                    ]], 401);
        }
        catch(\Exception){
            $email = $request->email;
        }
        
        User::create([
            'name' => $request->name,
            'email' => $email,
            'phone_number' => $request->phone_number,
            'password' => Hash::make($request->password),
            'is_Admin' => false,
            'user_roles' => "user",
        ]);

        return response()->json(['msg' => "Đăng ký thành công"], 200);
    }

    public function tsRegister(Request $request){
        try{
            $email = User::where('email', $request->email)->firstOrFail();
            return response()->json(['msg' => 'Đăng ký thất bại email của bạn đã tồn tại', 
                                    'data' =>[
                                        'email' => $request->email,
                                        'phone_number' => $request->phone_number,
                                        'password' => $request->password,
                                        'name' => $request->name
                                    ]], 401);
        }
        catch(\Exception){
            $email = $request->email;
        }

        User::create([
            'name' => $request->name,
            'email' => $email,
            'phone_number' => $request->phone_number,
            'password' => Hash::make($request->password),
            'is_Admin' => false,
            'user_roles' => "ts",
        ]);

        return response()->json(['msg' => "Đăng ký thành công"], 200);
    }
}
