<?php

namespace App\Http\Controllers;

use App\Models\PersonalTours;
use App\Models\Rooms;
use Illuminate\Http\Request;
use App\Http\Resources\HomepageGroupResource;

class PersonalToursController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return HomepageGroupResource::collection(PersonalTours::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        PersonalTours::create([
            'name' => $request->name,
            'owner_id' => $request->owner_id,
            'room_id' => $request->room_id,
            'description' => $request->description,
            'from_date' => $request->from_date,
            'to_date' => $request->to_date,
            'lat' => $request->lat,
            'lon' => $request->lon,
            'from_where' => $request->from_where,
            'to_where' => $request->to_where,
        ]);

        Rooms::find($request->room_id)->members()->detach($request->owner_id);
        Rooms::find($request->room_id)->members()->attach($request->owner_id, ['is_confirm' => true]);

        return response()->json(['msg' => "Tạo personal tour thành công", 'status' => 200], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        if(PersonalTours::find($id) == null){
            return response()->json(['msg' => "Tour không tồn tại", 'status' => 404], 404);
        }
        return response()->json(
            PersonalTours::where('personal_tours.id', $id)
            ->join('users', 'personal_tours.owner_id', '=', 'users.id')
            ->select('personal_tours.*', 'users.name as owner_name')
            ->get(),
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PersonalTours $personalTours)
    {
        if(PersonalTours::find($request->id) == null){
            return response()->json(['msg' => "Tour không tồn tại", 'status' => 404], 404);
        }
        else{
            if($request->owner_id != PersonalTours::find($request->id)->owner_id){
                return response()->json(['msg' => "Đây không phải là tour của bạn", 'status' => 403], 403);
            }
            else{
                PersonalTours::find($request->id)->update([
                    'name' => $request->name,
                    'owner_id' => $request->owner_id,
                    'room_id' => $request->room_id,
                    'description' => $request->description,
                    'from_date' => $request->from_date,
                    'to_date' => $request->to_date,
                    'lat' => $request->lat,
                    'lon' => $request->lon,
                    'from_where' => $request->from_where,
                    'to_where' => $request->to_where,
                ]);
                return response()->json(['msg' => "Update tour thành công", 'status' => 200], 200);
            }
        } 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, PersonalTours $personalTours)
    {
        if(PersonalTours::find($request->id) == null){
            return response()->json(['msg' => "Tour không tồn tại", 'status' => 404], 404);
        }
        else{
            if($request->owner_id != PersonalTours::find($request->id)->owner_id){
                return response()->json(['msg' => "Đây không phải là tour của bạn", 'status' => 403], 403);
            }
            else{
                PersonalTours::find($request->id)->delete();
                return response()->json(['msg' => "Delete tour thành công", 'status' => 200], 200);
            }
        }
    }

    public function homepageGroups()
    {
        // dd(1);
        return HomepageGroupResource::collection(PersonalTours::where('from_date', '>=', date('y-m-d'))->get());
    }

    public function allPersonalTour(Request $request){
        return response()->json([
            'all_tour' => PersonalTours::where('owner_id', $request->id)->get(),
            'status' => 200,
        ]);
    }

    public function search(Request $request)
    {
        return response()->json([
            'tours' => PersonalTours::where('personal_tours.name', 'like', "%$request->name%")
            ->join('users', 'personal_tours.owner_id', '=', 'users.id')
            ->select('personal_tours.*', 'users.name as owner_name')
            ->get(),
            'status' => 200,
        ]);
    }
}
