<?php

namespace App\Http\Controllers;

use App\Models\Film;
use App\Models\HallConfig;
use App\Models\SessionGrid;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientGridController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    public function showHall(string $state) {
        list($dat, $start, $namehall, $idFilm)=explode(',', $state);
        $namefilm = Film::find((int)$idFilm)->name;
        $stringHall = HallConfig::where('name', $namehall);
        $vip = $stringHall->value('price_vip');
        $odinary = $stringHall->value('price_ordinary');
        
        $soldSeats= SessionGrid::where('data', $dat)->
            where('nameHall', $namehall)->
            where('id_film', $idFilm)->
            where('ses_start', $start)->value('sold_seats');
        $out = [$dat, $start, $namehall, $namefilm, $vip, $odinary, $soldSeats];
        return Inertia::render('ShowHall', ['seats'=>$out]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $chosen)
    {
        $films = SessionGrid::select('id_film')->where('data', $chosen)->where('allpwed', true)->distinct()->get();
        $out=[];
        foreach($films as $el) {
            $nameHalls = SessionGrid::select('nameHall')->
                where('data', $chosen)->
                where('id_film', $el->id_film)->
                where('allpwed', true)->
                distinct()->get(); // distinct()-> Получаем только уникальные значения
            $hallGrid =[];
            foreach($nameHalls as $item) {
                $sessions = SessionGrid::select('ses_start')->
                where('data', $chosen)->
                where('nameHall', $item->nameHall)->
                where('id_film', $el->id_film)->
                where('allpwed', true)->get();

                $arr1 = [$item->nameHall=>$sessions];
                $hallGrid[]=$arr1;
            }
            
            $arr = [$el->id_film=>$hallGrid];
            $out[]=$arr;
        }
        return response()->json(['datas'=>$out]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
