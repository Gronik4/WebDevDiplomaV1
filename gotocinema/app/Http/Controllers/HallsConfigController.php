<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreHallRequest;
use App\Http\Requests\UpdateHallRequest;
use App\Models\Film;
use App\Models\HallConfig;
use App\Models\SessionGrid;
use Illuminate\Routing\Route;
use Inertia\Inertia;

class HallsConfigController extends Controller
{
    /**
     * Display a listing of the resource. Отобразите список ресурса.
     */
    public function index()
    {
        return Inertia::render('PanelAdmin', ['halls'=>HallConfig::all(), 'films'=>Film::all()]);
    }

    /**
     * Store a newly created resource in storage.Сохраните вновь созданный ресурс в хранилище
     */
    public function store(StoreHallRequest $request)
    {
        HallConfig::create($request->validated());
        return redirect(route('halls.index'));
    }

    /**
     * Update the specified resource in storage.Обновите указанный ресурс в хранилище.
     */
    public function update($id, UpdateHallRequest $request)
    {
        $hall = HallConfig::find($id);
        $hall->update($request->validated());
        
        $mess = $request->has('config')? 'Конфигурация зала обновлена':'Конфигурация цен обновлена';
        return redirect(route('halls.index'))->with('mess', $mess);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        if(SessionGrid::where('id_hall', $id)->exists()) {
            $message = 'Вы не можете удалить этот зал, поскольку в нём запланированы фильмы. Сначала очистите его сетку.';
            return redirect(route('halls.index'))->with('mess', $message);
        }
        $hallDelete = HallConfig::find($id);
        $hallDelete->delete();
        return redirect(route('halls.index'));
    }
}
