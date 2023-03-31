<?php

namespace App\Http\Controllers;

use App\Models\PersonalTours;
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(PersonalTours $personalTours)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PersonalTours $personalTours)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PersonalTours $personalTours)
    {
        //
    }

    public function homepageGroups()
    {
        return HomepageGroupResource::collection(PersonalTours::where('from_date', '>=', date('y-m-d'))->get());
    }
}
