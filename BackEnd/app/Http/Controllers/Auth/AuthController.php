<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\UserProfile;
use App\Models\TSProfile;
use App\Models\User;


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
            return response()->json(['msg' => 'Đăng nhập thất bại', 'email' => $request->email]);
        }
    }
}
