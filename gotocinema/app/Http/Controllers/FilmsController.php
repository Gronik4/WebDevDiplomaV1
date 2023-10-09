<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFilmRequest;
use App\Models\Film;
use App\Models\HallConfig;
use App\Models\SessionGrid;
use App\Services\PreparingPosters;
use Inertia\Inertia;

class FilmsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('PanelAdmin', ['films'=>Film::all(), 'halls'=>HallConfig::all()]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFilmRequest $request, PreparingPosters $preparing)
    {
        $valid=$request->validated();
        [$posterA, $posterC]=$preparing->addPosters($valid['image']);
        $data = array_slice($valid, 0, 6);
        $data['posterMain']=$posterC;
        $data['posterAd']=$posterA;
        Film::create($data);
        return redirect(route('films.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id, PreparingPosters $preparing)
    {
        if(SessionGrid::where('id_film', $id)->exists()) {
            $message='Вы не можете удалить этот фильм, поскольку он запланирован к показу. Сначала удалите его из сетки.';
            return redirect(route('films.index'))->with('mess', $message);
        } 

        $filmDelete = Film::find($id);
        $preparing->deletePostres($filmDelete);
        $filmDelete->delete();
        return redirect(route('films.index'));
    }
}
