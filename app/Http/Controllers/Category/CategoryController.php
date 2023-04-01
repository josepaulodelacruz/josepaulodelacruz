<?php

namespace App\Http\Controllers\Category;

use App\Http\Controllers\Controller;
use App\Models\Category\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
  public function store(Request $request)
  {
    //validate $request
    $request->validateWithBag('categoryForm', [
      'name' => 'required|string|max:255|unique:categories,name',
      'icon' => 'required|string|max:255',
    ]);

    $data = Category::create([
      'name' => $request->name,
      'icon_code' => $request->icon,
    ]);
  }

  public function update(Request $request, Category $category)
  {
    $category->update([
      'name' => $request->name,
    ]);
  }

  public function destroy($id)
  {
    Category::destroy($id);
  }
}
