<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegistrationController extends Controller
{
    public function __invoke(Request $request)
    {
        $this->validate($request,[
                'name'    =>   'required',
                'email'    =>   'required|unique:Users',
                'password'    =>   'required',
            ],
            [
                'name.required' => 'please enter your name',
                'email.required' => 'please enter your email',
                'email.unique' => 'Email already taken try new one',
                'password.required' => 'Please enter your password',
            ]
        );

        $createUser = User::create([
            'name'   => $request->name,
            'email'   => $request->email,
            'password' => Hash::make($request['password']),
        ]);

        if($createUser){
            return response('user create success',200);
        }




    }
}
