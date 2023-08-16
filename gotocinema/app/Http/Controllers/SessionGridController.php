<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSGridRequest;
use App\Models\HallConfig;
use App\Models\SessionGrid;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SessionGridController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $today = date('Y-m-d');
        $spent = DB::table('session_grids')->select('id')->where('data', '<', $today)->get();
        if(count($spent)) {
            foreach($spent as $el) {
                $this->destroy($el);
            }
        } // До сих пор все работает.
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
dd($valid);
        foreach($valid as $el) {
            $el['nameHall'] = HallConfig::find($el['id_hall'])['name'];
            $el['sold_seats'] = HallConfig::find($el['id_hall'])['config'];
            $el['allpwed'] = false;
            SessionGrid::create($el);
        }
        $mess = 'Сетка сеансов на '.' успешно добавлена.';
        return redirect(route('grid.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(SessionGrid $sessionGrid)
    {
        //
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
    }
}
