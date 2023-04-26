<?php

namespace App\Http\Controllers;

use App\Models\Tours;
use Illuminate\Http\Request;
use App\Http\Resources\HomepageToursResource;

class ToursController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Tours::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Tours::create([
            'ts_id' => $request->ts_id,
            'name' => $request->name,
            'address' => $request->address,
            'description' => $request->description,
            'from_date' => $request->from_date,
            'to_date' => $request->to_date,
            'price' => $request->price,
            'slot' => $request->slot,
            'lat' => $request->lat,
            'lon' => $request->lon,
        ]);

        return response()->json(['msg' => "Tạo tour thành công", 'status' => 200], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return response()->json(Tours::find($id));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tours $tours)
    {
        if(Tours::find($request->id) == null){
            return response()->json(['msg' => "Tour không tồn tại", 'status' => 404], 404);
        }
        else{
            if($request->ts_id != Tours::find($request->id)->ts_id){
                return response()->json(['msg' => "Đây không phải là tour của bạn", 'status' => 403], 403);
            }
            else{
                Tours::find($request->id)->update([
                    'ts_id' => $request->ts_id,
                    'name' => $request->name,
                    'address' => $request->address,
                    'description' => $request->description,
                    'from_date' => $request->from_date,
                    'to_date' => $request->to_date,
                    'price' => $request->price,
                    'slot' => $request->slot,
                    'lat' => $request->lat,
                    'lon' => $request->lon,
                ]);
                return response()->json(['msg' => "Update tour thành công", 'status' => 200], 200);
            }
        } 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Tours $tours)
    {

        if(Tours::find($request->id) == null){
            return response()->json(['msg' => "Tour không tồn tại", 'status' => 404], 404);
        }
        else{
            if($request->ts_id != Tours::find($request->id)->ts_id){
                return response()->json(['msg' => "Đây không phải là tour của bạn", 'status' => 403], 403);
            }
            else{
                Tours::find($request->id)->delete();
                return response()->json(['msg' => "Delete tour thành công", 'status' => 200], 200);
            }
        }
    }

    public function homepageTours(){
        return HomepageToursResource::collection(Tours::where('from_date', '>=', date('y-m-d'))->get());
    }

    public function allTour(Request $request){
        return response()->json([
            'all_tour' => Tours::where('ts_id', $request->id)->get(),
            'status' => 200,
        ]);
    }
}
