<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserProfileResource;
use App\Models\TSProfile;
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
        $user_profile = TSProfile::where('user_id', $request->id)->update([
                                                                    'avatar' => $request->avatar,
                                                                ]);

        return new UserProfileResource($user_profile);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TSProfile $tSProfile)
    {
        //
    }
}
