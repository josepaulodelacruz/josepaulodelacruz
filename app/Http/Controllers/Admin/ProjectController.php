<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

//TODO create a seeder for categories

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
      'categories' => 'required|array|min:1'
    ]);

    //loop through all $data['categories] and return only the value
    $categories = array_map(function($category) {
      return [
        'category_id' => $category['id'],
        'category' => $category['value'],
      ];
    }, $data['categories']);

    unset($data['categories']);

    //create project related to user
    $project = $request->user()->projects()->create($data);

    //create list of categories related to the newly created project
    $project->categories()->createMany($categories);

    return to_route('panel.projects');
  }

}
