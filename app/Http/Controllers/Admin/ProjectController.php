<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
      'categories' => 'required|array|min:1',
      'files' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    ]);

    //loop through all $data['categories] and return only the value
    $categories = array_map(function($category) {
      return [
        'category_id' => $category['id'],
        'category' => $category['value'],
      ];
    }, $data['categories']);

    unset($data['categories']);

    //create a timestamp for the project image
    $string = time() . '.' . $request->file('files')->getClientOriginalExtension();

    //upload project image
    $path = $this->uploadFile($request->file('files'), 'public/projects/'. $string . '/' .$data['title']);

    //update $data with file path
    $data['file'] = $path;

    //create project related to user
    $project = $request->user()->projects()->create($data);

    //create list of categories related to the newly created project
    $project->categories()->createMany($categories);

    return to_route('panel.projects');
  }

  private function uploadFile($file, $path)
  {
    $path = $file->store($path);
    return Storage::url($path);
  }
}
