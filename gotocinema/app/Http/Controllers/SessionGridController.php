<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSGridRequest;
use App\Models\HallConfig;
use App\Models\SessionGrid;
use Illuminate\Support\Facades\DB;
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
        $spent = SessionGrid::select('id')->where('data', '<', $this->today)->get();
        if(count($spent)) {
            foreach($spent as $el) {
                $this->destroy($el->id);
            }
        } // До сих пор все работает.
        $dates = SessionGrid::select('*')->where('data', '=', $this->today);
        return Inertia::render();
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
        $valid = $request->validated();
        $chosenDat='';

        foreach($valid as $el) {
            $el['nameHall'] = HallConfig::find($el['id_hall'])['name'];
            $el['sold_seats'] = HallConfig::find($el['id_hall'])['config'];
            $el['allpwed'] = false;
            $chosenDat = $el['data'];
            SessionGrid::create($el);
        }
        $mess = 'Сетка сеансов на '.' успешно добавлена.';
        //return redirect(route('grid.index'));
        $this->show($chosenDat, 'admin');
    }

    /**
     * Display the specified resource.
     */
    public function show($selectDate, $page)
    {
        $chosen = $selectDate? $selectDate: $this->today;
        $out=[];
        if($page === 'admin') {

        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SessionGrid $sessionGrid)
    {
        //
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
    public function destroy($id)
    {
        //
        dd($id.' - '.$this->today);
    }
}
