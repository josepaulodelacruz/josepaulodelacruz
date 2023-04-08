<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BlogsController extends Controller
{
  public function addBlog(Request $request)
  {
    $data = $request->validateWithBag('blogAddForm', [
      'title' => 'required|string|max:255',
      'description' => 'required|string|max:255',
      'host_link' => 'required|string',
      'cover_photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
      'categories' => 'required|array|min:1',
    ]);

    //loop through all $data['categories] and return only the value
    $categories = array_map(function($category) {
      return [
        'category_id' => $category['id'],
        'category' => $category['value'],
      ];
    }, $data['categories']);

    unset($data['categories']);

    //upload project image
    $path = $this->uploadFile($request->file('cover_photo'), '/public/blogs/' . $data['title']);

    //update $data with file path
    $data['cover_photo'] = $path;

    //create project related to user
    $blog = $request->user()->blogs()->create($data);

    //create list of categories related to the newly created project
    $blog->categories()->createMany($categories);

    return to_route('panel.blogs');
  }

  private function uploadFile($file, $path)
  {
    $path = $file->store($path);
    return Storage::url($path);
  }

}
