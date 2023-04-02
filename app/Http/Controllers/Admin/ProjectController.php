<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{

  public function addProject(Request $request)
  {
    $data = $request->validateWithBag('projectFormBag', [
      'title' => 'required|string|max:255',
      'description' => 'required|string',
      'host_link' => 'required|string',
      'source_code' => 'required|string',
      'project_image' => 'nullable',
    ]);


    //create project related to user
    $request->user()->projects()->create($data);

    return to_route('panel.projects');
  }

}
