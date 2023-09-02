<?php

namespace App\Http\Controllers;

use App\Models\Project\Projects;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RouteController extends Controller
{
  public function home(Request $request)
  {
    return Inertia::render('Home');
  }

  public function hero(Request $request)
  {
      return Inertia::render('Project/Hero/index');
  }
}
