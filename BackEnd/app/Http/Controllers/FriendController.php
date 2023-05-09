<?php

namespace App\Http\Controllers;

use App\Models\Friend;
use Illuminate\Http\Request;

class FriendController extends Controller
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
        if($request->user_id == $request->friend_id){
            return response()->json([
                'msg' => 'Không thể follow, user_id = friend_id',
                'status' => 403,
            ]);
        }
        $hasFollow = Friend::where('user_id', $request->user_id)->where('friend_id', $request->friend_id)->get()->toArray();

        if(count($hasFollow) > 0){
            return response()->json([
                'msg' => 'Bạn đã follow người này rồi',
                'status' => 403,
            ]);
        }
        else{
            Friend::create([
                'user_id' => $request->user_id,
                'friend_id' => $request->friend_id,
            ]);
            
            return response()->json([
                'msg' => 'Make friend thành công',
                'status' => 200
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return response()->json(Friend::where('user_id', $id)->get());
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        Friend::where([
            'user_id' => $request->user_id,
            'friend_id' => $request->friend_id,
        ])->delete();

        return response()->json(['msg' => 'Unfriend thành công']);
    }
}
