<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\UserProfile;
use App\Models\TSProfile;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    //
    public function login(Request $request){
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            if(Auth::user()->user_roles == 'user'){
                return response()->json(['msg' => 'Đăng nhập thành công', 
                                        'user_info' => [
                                            'name' => User::find(Auth::user()->id)->name,
                                            'email' => User::find(Auth::user()->id)->email,
                                            'phone_number' => User::find(Auth::user()->id)->phone_number,
                                            'user_roles' => User::find(Auth::user()->id)->user_roles
                                        ],
                                        'user_profile' => UserProfile::where('user_id', Auth::user()->id)
                                                        ->get()
                                        ]);
            }
            else{
                if(Auth::user()->user_roles == 'ts'){
                    return response()->json(['msg' => 'Đăng nhập thành công', 
                                            'user_info' => [
                                                'name' => User::find(Auth::user()->id)->name,
                                                'email' => User::find(Auth::user()->id)->email,
                                                'phone_number' => User::find(Auth::user()->id)->phone_number,
                                                'user_roles' => User::find(Auth::user()->id)->user_roles
                                            ],
                                            'ts_profile' => TSProfile::where('user_id', Auth::user()->id)
                                                            ->get()
                                            ]);
                }
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

        try{
            $phone_number = User::where('phone_number', $request->phone_number)->firstOrFail();
            return response()->json(['msg' => 'Đăng ký thất bại sdt của bạn đã tồn tại', 
                                    'data' =>[
                                        'email' => $request->email,
                                        'phone_number' => $request->phone_number,
                                        'password' => $request->password,
                                        'name' => $request->name
                                    ]], 401);
        }
        catch(\Exception){
            $phone_number = $request->phone_number;
        }
        
        User::create([
            'name' => $request->name,
            'email' => $email,
            'phone_number' => $phone_number,
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

        try{
            $phone_number = User::where('phone_number', $request->phone_number)->firstOrFail();
            return response()->json(['msg' => 'Đăng ký thất bại sdt của bạn đã tồn tại', 
                                    'data' =>[
                                        'email' => $request->email,
                                        'phone_number' => $request->phone_number,
                                        'password' => $request->password,
                                        'name' => $request->name
                                    ]], 401);
        }
        catch(\Exception){
            $phone_number = $request->phone_number;
        }
        
        User::create([
            'name' => $request->name,
            'email' => $email,
            'phone_number' => $phone_number,
            'password' => Hash::make($request->password),
            'is_Admin' => false,
            'user_roles' => "ts",
        ]);

        return response()->json(['msg' => "Đăng ký thành công"], 200);
    }
}
