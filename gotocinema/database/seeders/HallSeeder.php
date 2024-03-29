<?php

namespace Database\Seeders;

use App\Models\HallConfig;
use Illuminate\Database\Seeder;

class HallSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        HallConfig::create(
            [
                'name'=>'Красный1',
                'config'=>'"<div class=\"conf-step__row\"><span class=\"conf-step__chair conf-step__chair_standart\" id=\"11\"></span><span class=\"conf-step__chair conf-step__chair_standart\" id=\"12\"></span><span class=\"conf-step__chair conf-step__chair_vip\" id=\"13\"></span><span class=\"conf-step__chair conf-step__chair_standart\" id=\"14\"></span><span class=\"conf-step__chair conf-step__chair_standart\" id=\"15\"></span></div><div class=\"conf-step__row\"><span class=\"conf-step__chair conf-step__chair_standart\" id=\"21\"></span><span class=\"conf-step__chair conf-step__chair_standart\" id=\"22\"></span><span class=\"conf-step__chair conf-step__chair_vip\" id=\"23\"></span><span class=\"conf-step__chair conf-step__chair_standart\" id=\"24\"></span><span class=\"conf-step__chair conf-step__chair_standart\" id=\"25\"></span></div><div class=\"conf-step__row\"><span class=\"conf-step__chair conf-step__chair_standart\" id=\"31\"></span><span class=\"conf-step__chair conf-step__chair_vip\" id=\"32\"></span><span class=\"conf-step__chair conf-step__chair_vip\" id=\"33\"></span><span class=\"conf-step__chair conf-step__chair_vip\" id=\"34\"></span><span class=\"conf-step__chair conf-step__chair_standart\" id=\"35\"></span></div>"',
                'price_vip'=>'300',
                'price_ordinary'=>'220',
            ]
        );

        HallConfig::create(
            [
                'name'=>'Синий1',
                'config'=>'"<div class=\"conf-step__row\"><span class=\"conf-step__chair conf-step__chair_standart\" id=\"11\"></span><span class=\"conf-step__chair conf-step__chair_standart\" id=\"12\"></span><span class=\"conf-step__chair conf-step__chair_standart\" id=\"13\"></span><span class=\"conf-step__chair conf-step__chair_standart\" id=\"14\"></span><span class=\"conf-step__chair conf-step__chair_standart\" id=\"15\"></span></div><div class=\"conf-step__row\"><span class=\"conf-step__chair conf-step__chair_standart\" id=\"21\"></span><span class=\"conf-step__chair conf-step__chair_standart\" id=\"22\"></span><span class=\"conf-step__chair conf-step__chair_vip\" id=\"23\"></span><span class=\"conf-step__chair conf-step__chair_standart\" id=\"24\"></span><span class=\"conf-step__chair conf-step__chair_standart\" id=\"25\"></span></div><div class=\"conf-step__row\"><span class=\"conf-step__chair conf-step__chair_standart\" id=\"31\"></span><span class=\"conf-step__chair conf-step__chair_vip\" id=\"32\"></span><span class=\"conf-step__chair conf-step__chair_vip\" id=\"33\"></span><span class=\"conf-step__chair conf-step__chair_vip\" id=\"34\"></span><span class=\"conf-step__chair conf-step__chair_standart\" id=\"35\"></span></div>"',
                'price_vip'=>'250',
                'price_ordinary'=>'170',
            ]
        );
    }
}
