<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog\Blogs;
use App\Models\Category\Category;
use Illuminate\Http\File;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminController extends Controller
{
  public function index()
  {
    return Inertia::render('Panel');
  }

  public function blogIndex(Request $request)
  {
    $categories = Category::select(['id', 'value', 'label', 'icon_code'])->get();
    $categories->map(function($category) {
      $category->isSelected = false;
      return $category;
    });

    $latestBlogs = $request->user()->blogs()->latest()->take(5)->get();

    $blogs = $request->user()->blogs()->with([
      'categories',
//      'views' => function($query) {
//        $query->selectRaw('blog_id, count(*) as aggregate')->groupBy('blog_id');
//      }
    ])->get();

    return Inertia::render('Blog/Blog', [
      'categories' => $categories,
      'blogs' => $blogs,
      'latestBlogs' => $latestBlogs,
    ]);
  }

  public function blogAdd() {
    $categories = Category::select(['id', 'value', 'label', 'icon_code'])->get();

    return Inertia::render('Blog/BlogAdd', [
      'categories' => $categories,
    ]);
  }

  public function blogEdit($id)
  {
    $categories = Category::select(['id', 'value', 'label', 'icon_code'])->get();

    $blog = Blogs::where('id', $id)->with('categories')->first();

    return Inertia::render('Blog/BlogEdit', [
      'categories' => $categories,
      'blog' => $blog,
    ]);
  }

  public function blogDoc($id)
  {
    $blog = Blogs::where('id', $id)->with(['categories', 'user'])->first();

    return Inertia::render('Blog/BlogDoc', ['blog' => $blog]);
  }

  public function projectIndex(Request $request)
  {
    $projects =  $request->user()->projects()->with([
      'categories',
      'views' => function($query) {
        $query->selectRaw('project_id, count(*) as aggregate')->groupBy('project_id');
      }
    ])->get();

    $categories = Category::select(['id', 'value', 'label', 'icon_code'])->get();
    $categories->map(function($category) {
      $category->isSelected = false;
      return $category;
    });

    return Inertia::render('Project/Projects', [
      'projects' => $projects,
      'categories' => $categories,
    ]);
  }

  public function projectAdd()
  {
    $categories = Category::select(['id', 'value', 'label', 'icon_code'])->get();

    return Inertia::render('Project/ProjectAdd', [
      'categories' => $categories,
    ]);
  }

  public function projectEdit($id, Request $request)
  {
    $categories = Category::select(['id', 'value', 'label', 'icon_code'])->get();

    $project = $request->user()->projects()->where('id', $id)->with('categories')->first();

    return Inertia::render('Project/ProjectEdit', [
      'categories' => $categories,
      'project' => $project,
    ]);
  }

  public function categories()
  {
    //get categories
    $categories = Category::all();

    //get categories latest 5
    $categoriesLatest = Category::latest()->take(5)->get();

    return Inertia::render('Categories/index', ['categories' => $categories, 'categoriesLatest' => $categoriesLatest]);
  }

}
