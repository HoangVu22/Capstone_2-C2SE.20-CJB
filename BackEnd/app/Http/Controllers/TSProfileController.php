<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserProfileResource;
use App\Models\TSProfile;
use App\Models\User;
use Illuminate\Http\Request;

class TSProfileController extends Controller
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
    public function show(TSProfile $tSProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TSProfile $tSProfile)
    {
        User::where('id', $request->id)->update([
            'name' => $request->name,
            'phone_number' => $request->phone_number,
        ]);

        TSProfile::where('user_id', $request->id)->update([
            'avatar' => $request->avatar,
        ]);

        return response()->json([
            'msg' => "Update thành công",
            'status' => 200,
            'user' => User::find($request->id),
            'profile' => TSProfile::where('user_id', $request->id)->get(),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TSProfile $tSProfile)
    {
        //
    }
}
