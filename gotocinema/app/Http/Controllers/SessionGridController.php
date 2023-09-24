<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSGridRequest;
use App\Http\Requests\UpdateSGridRequest;
use App\Models\Film;
use App\Models\HallConfig;
use App\Models\SessionGrid;
use Inertia\Inertia;

class SessionGridController extends Controller
{
    private $today;
    public function __construct()
    {
        $this->today = date('Y-m-d');
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    
    { 
        $spent = SessionGrid::select('*')->where('data', '<', $this->today)->get();
        if(count($spent)) {$this->destroy($spent);}
        return Inertia::render('PanelAdmin', ['halls'=>HallConfig::all(), 'films'=>Film::all()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSGridRequest $request, )
    {
        $valid = $request->validated()['grid'];

        foreach($valid as $el) {
            $el['nameHall'] = HallConfig::find($el['id_hall'])['name'];
            $el['sold_seats'] = HallConfig::find($el['id_hall'])['config'];
            $el['allpwed'] = false;
            $dat = $el['data'];
            
            SessionGrid::create($el);
        }
        $message = 'Сетка сеансов сохранена.';
        return redirect(route('grid.index'))->with('mess', $message);
    }

    /**
     * Display the specified resource.
     */
    public function show($grid)
    {
        $halls = HallConfig::select('id')->get();
        $out = [];
        foreach($halls as $el){
            $films = SessionGrid::select('id_film')->where('data', $grid)->where('id_hall', $el->id)->get();
            $arrFilm = [];
            foreach($films as $item) {
                $arrFilm[]=$item->id_film;
            }
            
            $out[]=array_fill($el->id, 1, $arrFilm);
        }
        $permissions=SessionGrid::select('allpwed')->where('data', $grid)->first();
        $soldSeats=SessionGrid::select('sold_seats')->
            where('data', $grid)->
            where('sold_seats', 'like', '% buying-scheme__chair_take%')->count();
        return response()->json(['datas'=>$out, 'test'=>$permissions, 'sold'=>$soldSeats]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($dat, UpdateSGridRequest $request)
    {
        list($flag, $date)=explode(',', $dat);
        if($flag == 'grids') {
             $valid = $request->validated()['grids'];
            $spent=SessionGrid::select('*')->where('data', $date)->get();
            foreach($spent as $el) {$el->delete();}
            foreach($valid as $el) {
                $el['nameHall'] = HallConfig::find($el['id_hall'])['name'];
                $el['sold_seats'] = HallConfig::find($el['id_hall'])['config'];
                $el['allpwed'] = false;   
                SessionGrid::create($el);
            }
            $this->show($date);
        }
        if($flag == 'allow') {
            $valid = $request->validated();
            SessionGrid::where('data', $date)->update($valid);
            return redirect(route('grid.index'));   
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($spent)
    {
        foreach($spent as $el) {
            $el->delete();
        }
        $this->index();
    }
}
