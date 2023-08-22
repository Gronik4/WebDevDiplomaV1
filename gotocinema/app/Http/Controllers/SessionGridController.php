<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSGridRequest;
use App\Models\Film;
use App\Models\HallConfig;
use App\Models\SessionGrid;
use Inertia\Inertia;

class SessionGridController extends Controller
{
    private $today;
    private $grid;
    public function __construct()
    {
        $this->today = date('Y-m-d');
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $spent = SessionGrid::select('id')->where('data', '<', $this->today)->get();
        if(count($spent)) {$this->destroy($spent);}
        $dates = SessionGrid::select('*')->where('data', '=', $this->today)->get();
        return Inertia::render('Welcome', ['grid'=>$dates]);
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
    public function store(StoreSGridRequest $request)
    {
        $valid = $request->validated()['grid'];
        $chosenDat='';

        foreach($valid as $el) {
            $el['nameHall'] = HallConfig::find($el['id_hall'])['name'];
            $el['sold_seats'] = HallConfig::find($el['id_hall'])['config'];
            $el['allpwed'] = false;
            $chosenDat = $el['data'];
            SessionGrid::create($el);
        }
        $grid = $chosenDat.', '.'admin';
        $this->show($grid);
        //return redirect(route('grid.show'));
    }

    /**
     * Display the specified resource.
     */
    public function show($grid)
    {
        [$selectDate, $flag] = explode(',', $grid);
    
        if($flag === 'admin') {
            $out = SessionGrid::select('data', 'id_hall', 'nameHall', 'ses_start', 'id_film', 'allpwed')->
                where('data', '=', $selectDate)->get();

        return Inertia::render('PanelAdmin', [
            'films'=>function() {return Film::all();},
            'halls'=>function() {return HallConfig::all();},
            'grid'=>Inertia::lazy(function($out) {return $out;})
        ]);
        }
        $out = SessionGrid::select('*')->where('data', '=', $selectDate)->get();
        return Inertia::render('Welcome', ['grid'=>$out]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($DATA, $seats)
    {
        [$data, $idHall, $sStart] = $DATA;
        $config = SessionGrid::select('sold_seats')->where('data', '=', $data)->
            where('id_hall', '-',  $idHall)->where('ses_start', '=', $sStart)->get();
        $config->update($seats);
        $this->show($data, 'client');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SessionGrid $sessionGrid)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($ids)
    {
        foreach($ids as $id) {
            $del = SessionGrid::find($id);
            dd($del);
            $del->delete();
        }
        //dd($id.' - '.$this->today);
        return redirect(route('grid.index'));
    }
}
