<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

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

    //navigate to route panel.blogs.doc
    return redirect()->route('panel.blogs.doc', ['id' => $blog->id]);
  }

  public function editBlog(Request $request, $id)
  {
    $data = $request->validateWithBag('blogAddForm', [
      'title' => 'required|string|max:255',
      'description' => 'required|string|max:255',
      'host_link' => 'required|string',
      'cover_photo' => 'required',
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

    //find project
    $blog = $request->user()->blogs()->find($id);

    //validate if the $data['file'] is a string then delete the file
    if (!is_string($data['cover_photo'])) {
      //delete the file directory of the $blog->file
      Storage::deleteDirectory('/public/blogs/' . $blog->title);

      //upload project image
      $path = $this->uploadFile($request->file('cover_photo'), '/public/blogs/' . $blog->title);

      //update $data with file path
      $data['cover_photo'] = $path;
    }

    //update the project
    $updatedBlog = $blog->update($data);

    //delete many related categories in $updatedProject
    $blog->categories()->where('blog_id', $blog->id)->delete();

    //create list of categories related to the newly created project
    $blog->categories()->createMany($categories);

    return redirect()->route('panel.blogs.doc', ['id' => $blog->id]);
  }

  private function uploadFile($file, $path)
  {
    $path = $file->store($path);
    return Storage::url($path);
  }

}
