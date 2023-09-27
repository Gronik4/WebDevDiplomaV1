<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create(
            [
                'name'=>'Admin',
                'email'=> 'lyly@yandex.ru',
                'password'=>'administrator_g2c',
                'status'=> '1'
            ]
        );
    }
}
