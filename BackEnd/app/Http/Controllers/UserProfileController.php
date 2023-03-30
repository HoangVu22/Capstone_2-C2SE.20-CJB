<?php

namespace App\Http\Controllers;

use App\Models\UserProfile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Resources\UserProfileResource;

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
        echo "abc";
        // dd(Auth::user());
        // dd($request->user());
        dd(Auth::id());
        //
        // $user_id = Auth::user()->user_id;
        $user_profile = UserProfile::create([
            'user_id' => Auth::id(),
            'gender' => $request->gender,
            'avatar' => $request->avatar,
        ]);

        return new UserProfileResource($user_profile);
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
    public function update(Request $request, UserProfile $userProfile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserProfile $userProfile)
    {
        //
    }
}
