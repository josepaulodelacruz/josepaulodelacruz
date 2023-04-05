<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
          [
            'value' => "Programming",
            'label' => 'Programming',
            'icon_code' => "&#xeb8e;",
          ],
          [
            'value' => "Mobile",
            'label' => 'Mobile',
            'icon_code' => "&#xeae4;",
          ],
          [
            'value' => "Web",
            'label' => 'Web',
            'icon_code' => "&#xe80b;",
          ],
          [
            'value' => "Design",
            'label' => 'Design',
            'icon_code' => "&#xe30d;",
          ],
          [
            'value' => "DevOps",
            'label' => 'DevOps',
            'icon_code' => "&#xe8be;",
          ],

        ];

        DB::table('categories')->insert($data);
    }
}
