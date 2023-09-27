<?php

namespace Database\Seeders;

use App\Models\Film;
use Illuminate\Database\Seeder;

class FilmSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Film::create(
            [
                'name'=>'Вызов',
                'desc'=>'Торакальный хирург Женя за месяц должна подготовиться к космическому полету и отправиться на МКС, чтобы спасти космонавта. Удастся ли ей справиться с испытаниями?',
                'genre'=>'Драма',
                'creators'=>'Россия',
                'realise'=>'2023',
                'duration'=>'164',
                'posterMain'=>'poster_call.jpg',
                'posterAd'=>'poster_cal.png', 
            ]
        );

        Film::create(
            [
                'name'=>'Дыхание',
                'desc'=>'Виктор, успешный бизнесмен, бывший врач, нелегально возвращается в больницу, чтобы помочь маме, заболевшей COVID-19. Рискуя жизнью и свободой, пытаясь разобраться, что это такое, он вместе с медицинским коллективом помогает больнице лучше подготовиться к удару пандемии.',
                'genre'=>'Драма',
                'creators'=>'Россия',
                'realise'=>'2023',
                'duration'=>'100',
                'posterMain'=>'Breath.jpg',
                'posterAd'=>'Breath.png', 
            ]
        );
    }
}
