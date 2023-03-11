<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class describingRoleTypes extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
          DB::table('roles')->insert(
            [
            'name'=>'user',
            'slug'=>'user',
            'description'=>'user',
            'level'=>'5',
            'created_at'=>now(),
            'updated_at'=>now(),
             ]
            );
            DB::table('roles')->insert([
                'name'=>'user',
                'slug'=>'user',
                'level'=>'privateuser',
                'description'=>'moderate user',
                'created_at'=>now(),
                'updated_at'=>now(),
                 ]);
                 DB::table('roles')->insert([
                    'name'=>'moderate',
                    'slug'=>'moderate',
                    'description'=>'moderate ',
                    'level'=>'3',
                    'created_at'=>now(),
                    'updated_at'=>now(),
                     ]);
                     DB::table('roles')->insert([
                        'name'=>'moderateadmin',
                        'slug'=>'moderateadmin',
                        'description'=>'moderate admin',
                        'level'=>'2',
                        'created_at'=>now(),
                        'updated_at'=>now(),
                         ]);
                         DB::table('roles')->insert([
                            'name'=>'admin',
                            'slug'=>'admin',
                            'description'=>'super admin',
                            'level'=>'1',
                            'created_at'=>now(),
                            'updated_at'=>now(),
                             ]);
    }
}
