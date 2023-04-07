<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use \App\Http\Controllers\Admin\AdminController;
use \App\Http\Controllers\Category\CategoryController;
use App\Http\Controllers\Admin\ProjectController;
use \App\Http\Controllers\RouteController;

Route::get('/', [RouteController::class, 'home'])->name('home');

Route::middleware(['auth', 'verified'])->group(function() {
  Route::get('/panel', [AdminController::class, 'index'])->name('panel');
  Route::get('/panel/projects', [AdminController::class, 'projectIndex'])->name('panel.projects');
  Route::get('/panel/projects/add', [AdminController::class, 'projectAdd'])->name('panel.projects.add');
  Route::get('/panel/projects/edit/{id}', [AdminController::class, 'projectEdit'])->name('panel.projects.edit');
  Route::get('/panel/blogs', [AdminController::class, 'blogIndex'])->name('panel.blogs');
  Route::get('/panel/blogs/add', [AdminController::class, 'blogAdd'])->name('panel.blogs.add');
  Route::get('/panel/categories', [AdminController::class, 'categories'])->name('panel.categories');

  /// Categories
  Route::post('/panel/categories/add', [CategoryController::class, 'store'])->name('panel.categories.add');
  Route::delete('/panel/categories/delete/{id}', [CategoryController::class, 'destroy'])->name('panel.categories.delete');

  //projects
  Route::post('/panel/projects/add', [ProjectController::class, 'addProject'])->name('project.addProject');
  Route::post('/panel/projects/edit/{id}', [ProjectController::class, 'editProject'])->name('project.editProject');

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
