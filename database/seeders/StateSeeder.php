<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $states = [
            ['name'=>'Alabama'],
            ['name'=>'Alaska'],
            ['name'=> 'California'],
            ['name'=>'Florida'],
            ['name'=> 'Hawaii'],
            ['name'=> 'Nevada'],
            ['name'=> 'New Jersey'],
            ['name'=> 'Texas']
        ];

        DB::table('states')->insert($states);
    }
}
