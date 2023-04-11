<?php

namespace App\Http\Controllers;

use App\Models\Rooms;
use Illuminate\Http\Request;

class RoomsController extends Controller
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
        Rooms::create([
            'room_owner' => $request->owner_id,
            'name' => $request->name,
            'description' => $request->description,
        ]);

        return response()->json([
            'msg' => "Tạo room thành công",
            'status' => 200,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return response()->json([
            'room' => Rooms::find($id),
            'status' => 200,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Rooms $rooms)
    {
        if(Rooms::find($request->id) == null){
            return response()->json(['msg' => "Room không tồn tại", 'status' => 404], 404);
        }
        else{
            if($request->room_owner != Rooms::find($request->id)->room_owner){
                return response()->json(['msg' => "Đây không phải là room của bạn", 'status' => 403], 403);
            }
            else{
                Rooms::find($request->id)->update([
                    'name' => $request->name,
                    'description' => $request->description,
                ]);
                return response()->json(['msg' => "Update room thành công", 'status' => 200], 200);
            }
        } 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Rooms $rooms)
    {
        if(Rooms::find($request->id) == null){
            return response()->json(['msg' => "Room không tồn tại", 'status' => 404], 404);
        }
        else{
            if($request->room_owner != Rooms::find($request->id)->room_owner){
                return response()->json(['msg' => "Đây không phải là room của bạn", 'status' => 403], 403);
            }
            else{
                Rooms::find($request->id)->delete();
                return response()->json(['msg' => "Delete room thành công", 'status' => 200], 200);
            }
        }
    }
}
