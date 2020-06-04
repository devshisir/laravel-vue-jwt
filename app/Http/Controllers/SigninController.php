<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SigninController extends Controller
{
    public function __invoke(Request $request)
    {

        $this->validate($request,[
            'email' => 'required',
            'password' => 'required',
        ],
        [
            'email.required' => 'Please enter your email!',
            'password.required' => 'Please enter your password!',
        ]
    );

        if (!$token = auth()->attempt($request->only('email','password'))) {
            return response('You enter wrong email or password!', 401);
        }

        return response()->json([
            'token' => $token
        ]);
    }
}
