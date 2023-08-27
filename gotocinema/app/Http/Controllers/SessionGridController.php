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
        $hls = HallConfig::all();
        return Inertia::render('PanelAdmin', ['halls'=>$hls, 'films'=>Film::all()]);
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

        foreach($valid as $el) {
            $el['nameHall'] = HallConfig::find($el['id_hall'])['name'];
            $el['sold_seats'] = HallConfig::find($el['id_hall'])['config'];
            $el['allpwed'] = false;
            SessionGrid::create($el);
        }
        return redirect(route('grid.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show($grid)
    {
        $out = SessionGrid::select('data', 'id_hall', 'nameHall', 'ses_start', 'id_film', 'allpwed')->
             where('data', '=', $grid)->get();
        return response()->json(['datas'=>$out]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($DATA, $seats)
    {
        
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
    public function destroy($spent)
    {
        foreach($spent as $el) {
            $el->delete();
        }
        $this->index();
    }
}
