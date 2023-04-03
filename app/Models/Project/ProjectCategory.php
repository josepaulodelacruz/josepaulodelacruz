<?php

namespace App\Models\Project;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectCategory extends Model
{
    use HasFactory;

    protected $fillable = [
      'category_id',
      'category'
    ];

    public function project()
    {
      return $this->belongsTo(Projects::class, 'project_id');
    }
}
