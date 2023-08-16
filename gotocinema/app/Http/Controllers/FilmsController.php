<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFilmRequest;
use App\Models\Film;
use App\Models\HallConfig;
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
    public function store(StoreFilmRequest $request)
    {
       Film::create($request->validated());
       return redirect(route('films.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $filmDelet = Film::find($id);
        $filmDelet->delete();
        return redirect(route('films.index'));
    }
}
