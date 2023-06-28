<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreHallRequest;
use App\Models\HallConfig;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HallsConfigController extends Controller
{
    /**
     * Display a listing of the resource. Отобразите список ресурса.
     */
    public string $mess = '';
    public function index()
    {
        $message = $this->mess? $this->mess: '';
        return Inertia::render('PanelAdmin', ['halls'=>HallConfig::all(), 'mess'=>$message]);
    }

    /**
     * Store a newly created resource in storage.Сохраните вновь созданный ресурс в хранилище
     */
    public function store(StoreHallRequest $request)
    {
        $valid = $request->validate();
        $hall = HallConfig::create([
            'name'=>$request->name,
            'config'=>$request->config,
            'price_vip'=>$request->price_vip,
            'price_ordinary'=>$request->price_ordinary
        ]);
        $hall->save($valid);
        //return Inertia::render('PanelAdmin', ['halls'=>HallsConfig::all()]);
        return redirect(route('halls.index'));
    }

    /**
     * Update the specified resource in storage.Обновите указанный ресурс в хранилище.
     */
    public function update($id, Request $request)
    {
        $hall = HallConfig::find($id);
        if($request->config) {
            $parm = ['config'=>'required|json'];
            $this->mess = 'Конфигурация зала обновлена';
        } else {
            $parm=[
                'price_vip'=>'required|integer',
                'price_ordinary'=>'required|integer',
            ];
            $this->mess = 'Конфигурация цен обновлена';
        }
        $valide = $request->validate($parm);
        $hall->update($valide);
        //return Inertia::render('PanelAdmin', ['halls'=>HallsConfig::all(), 'mess'=>$mess]);
        return( redirect(route('halls.index')));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $hallDelete = HallConfig::find($id);
        $hallDelete->delete();
        return redirect(route('halls.index'));
    }
}
