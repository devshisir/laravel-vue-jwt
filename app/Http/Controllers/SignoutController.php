<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SignoutController extends Controller
{
    public function __invoke()
    {
       auth()->logout();
       return response()->json([
           'message' => 'user logout'
       ]);
    }
}
