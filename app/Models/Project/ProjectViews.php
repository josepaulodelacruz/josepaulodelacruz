<?php

namespace App\Models\Project;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectViews extends Model
{
    use HasFactory;

    protected $fillable = [
      'ip',
      'user_agent'
    ];

    public function project()
    {
      return $this->belongsTo(Projects::class);
    }

}
