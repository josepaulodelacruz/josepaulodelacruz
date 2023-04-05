<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category\Category;
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

  public function blogIndex()
  {
    return Inertia::render('Blog/Blog');
  }

  public function projectIndex(Request $request)
  {
    $projects =  $request->user()->projects()->with('categories')->get();

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

  public function categories()
  {
    //get categories
    $categories = Category::all();

    //get categories latest 5
    $categoriesLatest = Category::latest()->take(5)->get();

    return Inertia::render('Categories/index', ['categories' => $categories, 'categoriesLatest' => $categoriesLatest]);
  }

}
