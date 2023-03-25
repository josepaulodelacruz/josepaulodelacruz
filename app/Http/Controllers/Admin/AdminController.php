<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
      return Inertia::render('Panel');
    }

    public function blogIndex()
    {
      return Inertia::render('Blog/Blog');
    }

  public function projectIndex()
  {
    return Inertia::render('Project/Projects');
  }
}
