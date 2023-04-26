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
  
        return view('pages.userDetail', [
            'profile' => $data[0],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $data = UserProfile::with('user')->where('user_id', $id)->get();
        $data = sizeof($data) === 0 ? TSProfile::with('user')->where('user_id', $id)->get() : $data;
  
        return view('pages.userEdit', [
            'profile' => $data[0],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserRequest $request, User $user)
    {
        $request = isset($request->password) 
                   ? $request->validated() 
                   : $request->except(['password']);

        $user->update($request);
        return redirect()->route('user.show', ['id' => $request['id']])->with('success', 'Updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
