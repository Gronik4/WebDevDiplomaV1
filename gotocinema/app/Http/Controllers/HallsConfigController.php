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
        HallConfig::create($request->validated());
        return redirect(route('halls.index'));
    }

    /**
     * Update the specified resource in storage.Обновите указанный ресурс в хранилище.
     */
    public function update($id, StoreHallRequest $request)
    {
        $hall = HallConfig::find($id);
        $hall->fill($request->validated());
        $hall->save();
        /**
         * if($hall->save()) {
         *   $ mass = $request->has(''config')? 'Конфигурация зала обновлена':'Конфигурация цен обновлена';
         * }
         */

        /*if($request->config) {
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
        $hall->update($valide);*/
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
