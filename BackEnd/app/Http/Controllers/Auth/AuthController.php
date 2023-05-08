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
use JWTAuth;
use JWTAuthException;

class AuthController extends Controller
{
    //
    public function login(Request $request){
        // if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
        //     if(Auth::user()->is_Admin == true){
        //         return redirect()->route('dashboard');
        //     }
        //     else{
        //         setcookie('userId', Auth::user()->id);// cookies available in 2 hours
        //         // dd($_COOKIE['userId']);
        //         return response()->json(['msg' => 'Đăng nhập thành công', 
        //                                 'user_info' =>
        //                                     new UserInfoResource(User::find(Auth::user()->id)),
        //                                 'status' => 200,
        //                                 ], 200);
        //     }
        // }
        // else{
        //     return response()->json(['msg' => 'Đăng nhập thất bại', 'email' => $request->email, 'status' => 401], 401);
        // }
        $credentials = $request->only('email', 'password');
        $token = null;
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['msg' => 'Đăng nhập thất bại', 'email' => $request->email, 'status' => 401], 401);
            }
        } catch (JWTAuthException $e) {
            return response()->json(['failed_to_create_token'], 500);
        }
        return response()->json([
            'msg' => 'Đăng nhập thành công',
            'token' => $token, 
            'user_info' =>
                new UserInfoResource(User::find(Auth::user()->id)),
            'status' => 200,
        ], 200);
    }

    public function getUserInfo(Request $request){
        $user = JWTAuth::toUser($request->token);
        return response()->json($user);
    }

    public function userRegister(Request $request){
        try{
            $email = User::where('email', $request->email)->firstOrFail();
            return response()->json(['msg' => 'Đăng ký thất bại email của bạn đã tồn tại', 
                                    'data' =>[
                                        'email' => $request->email,
                                        'phone_number' => $request->phone_number,
                                        'password' => $request->password,
                                        'name' => $request->name,
                                        'status' => 401
                                    ]], 401);
        }
        catch(\Exception){
            $email = $request->email;
        }
        
        $user = User::create([
            'name' => $request->name,
            'email' => $email,
            'phone_number' => $request->phone_number,
            'password' => $request->password,
            'is_Admin' => false,
            'user_roles' => "user",
        ]);

        UserProfile::create([
            'user_id' => $user->id,
            'gender' => 'female',
            'avatar' => ''
        ]); 

        return response()->json(['msg' => "Đăng ký thành công", 'status' => 200], 200);
    }

    public function tsRegister(Request $request){
        try{
            $email = User::where('email', $request->email)->firstOrFail();
            return response()->json(['msg' => 'Đăng ký thất bại email của bạn đã tồn tại', 
                                    'data' =>[
                                        'email' => $request->email,
                                        'phone_number' => $request->phone_number,
                                        'password' => $request->password,
                                        'name' => $request->name,
                                        'status' => 401
                                    ]], 401);
        }
        catch(\Exception){
            $email = $request->email;
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $email,
            'phone_number' => $request->phone_number,
            'password' => $request->password,
            'is_Admin' => false,
            'user_roles' => "ts",
        ]);

        TsProfile::create([
            'user_id' => $user->id,
            'avatar' => ''
        ]);

        return response()->json(['msg' => "Đăng ký thành công", 'status' => 200], 200);
    }
}
