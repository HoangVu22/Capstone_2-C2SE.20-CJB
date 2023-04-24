<?php

namespace App\Http\Controllers;

use App\Models\UserProfile;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Resources\UIResource;

class UserProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(UserProfile $userProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        // return $request;
        User::where('id', $request->id)->update([
            'name' => $request->name,
            'phone_number' => $request->phone_number,
            'about' => $request->about,
        ]);

        UserProfile::where('user_id', $request->id)->update([
            'gender' => $request->gender,
            'avatar' => $request->avatar,
        ]);

        return response()->json([
            'msg' => "Update thành công",
            'status' => 200,
            'user_info' => new UIResource(User::find($request->id)),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserProfile $userProfile)
    {
        //
    }

    public function allRoom(Request $request){
        return response()->json([
            'all_room' => User::find($request->user_id)->rooms()->where('is_confirm', true)->get(),
            'status' => 200,
        ]);
    }
}
