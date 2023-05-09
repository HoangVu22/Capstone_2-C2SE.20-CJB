<?php

namespace App\Http\Controllers;

use App\Models\Notifications;
use App\Models\User;
use Illuminate\Http\Request;

class NotificationsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
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
    public function show(Notifications $notifications)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Notifications $notifications)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Notifications $notifications)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Notifications $notifications)
    {
        //
    }

    public function send(Request $request)
    {
        Notifications::create($request->all());
        
        return response()->json([
            'status' => 200,
            'msg' => "Gửi thông báo thành công"
        ]);
    }

    public function read(Request $request)
    {
        if(empty(Notifications::find($request->notification_id))){
            return response()->json([
                'status' => 404,
                'msg' => "Thông báo không tồn tại"
            ]);
        }
        if(Notifications::find($request->notification_id)->status == true){
            return response()->json([
                'status' => 403,
                'msg' => "Thông báo đã được đọc"
            ]);
        }
        else{
            Notifications::where('id', $request->notification_id)->update([
                'status' => true,
            ]);

            return response()->json([
                'status' => 200,
                'msg' => "Đã đọc thông báo"
            ]);
        }
    }

    public function getNotification(Request $request)
    {
        if(empty(User::find($request->receiver_id))){
            return response()->json([
                'status' => 404,
                'msg' => "Người nhận không tồn tại"
            ]);
        }

        return response()->json([
            'status' => 200,
            'all_unread_notification' => 
                Notifications::where('receiver_id', $request->receiver_id)
                ->where('status', false)
                ->get(),
        ]);
    }
}
