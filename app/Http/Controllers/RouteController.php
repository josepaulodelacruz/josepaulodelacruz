<?php

namespace App\Http\Controllers;

use App\Models\Project\Projects;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RouteController extends Controller
{
  public function home(Request $request)
  {

    $project = Projects::find(1); // home route for the project
//
//    $ip = $request->ip();
//    $user_agent = $_SERVER['HTTP_USER_AGENT'];
////    $ip = $_SERVER['REMOTE_ADDR'];
//
//    $project->views()->updateOrCreate([
//      'ip' => $ip,
//      'user_agent' => $user_agent
//    ]);

    return Inertia::render('Home');
  }
}
