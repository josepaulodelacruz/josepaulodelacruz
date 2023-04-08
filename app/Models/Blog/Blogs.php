<?php

namespace App\Models\Blog;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blogs extends Model
{
    use HasFactory;

    protected $fillable = [
      'title',
      'description',
      'host_link',
      'cover_photo',
    ];

    public function user()
    {
      return $this->belongsTo(User::class);
    }

    public function categories()
    {
      return $this->hasMany(BlogCategory::class, 'blog_id');
    }
}
