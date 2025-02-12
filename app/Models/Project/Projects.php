<?php

namespace App\Models\Project;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projects extends Model
{
    use HasFactory;

    protected $fillable = [
      'title',
      'description',
      'host_link',
      'source_code',
      'file',
    ];

    public function user()
    {
      return $this->belongsTo(User::class);
    }

    public function categories()
    {
      return $this->hasMany(ProjectCategory::class, 'project_id');
    }

    public function views()
    {
      return $this->hasMany(ProjectViews::class, 'project_id');
    }
}
