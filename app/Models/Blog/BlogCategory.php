<?php

namespace App\Models\Blog;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogCategory extends Model
{
    use HasFactory;

    protected $fillable = [
      'category',
      'category_id',
    ];

    public function blog()
    {
      return $this->belongsTo(Blogs::class);
    }
}
