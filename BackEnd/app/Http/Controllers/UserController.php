<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\TSProfile;
use App\Models\User;
use App\Models\UserProfile;
use Illuminate\Http\Request;

use function PHPUnit\Framework\isEmpty;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('pages.user', [
            'title' => 'List users',
            'users' => User::where('id', '>', 1)->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('pages.userCreate', [
            'title' => 'Create users',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request)
    {
        User::create($request->all());

        return redirect()->route('user')->with('success', 'Created successfully!');
    }

    public function userProfile (string $id) {
        $data = User::with('userProfile')->find($id);
        // $data = $data->user_profile;

        return $data;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = UserProfile::with('user')->where('user_id', $id)->get();
        $data = sizeof($data) === 0 ? TSProfile::with('user')->where('user_id', $id)->get() : $data;
//         id": 2,
//   "user_id": 3,
//   "gender": "male",
//   "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOnUBiI51lBoTRhYTJHEh8eM4BUb66vN5BeQ&usqp=CAU",
//   "user": {
//     "id": 3,
//     "name": "Tân",
//     "email": "tan123@gmail.com",
//     "is_admin": 0,
//     "user_roles": "user",
//     "phone_number": "021736321",
//     "about": "Solo yasuo?"
  
        return view('pages.userDetail', [
            'profile' => $data[0],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
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
    public function destroy(string $id)
    {
        //
    }
}
