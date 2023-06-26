<?php

namespace App\Http\Controllers;

use App\Models\HallsConfig;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HallsConfigController extends Controller
{
    /**
     * Display a listing of the resource. Отобразите список ресурса.
     */
    public function index()
    {
        return Inertia::render('PanalAdmin', ['halls'=> HallsConfig::all()]);
    }

    /**
     * Store a newly created resource in storage.Сохраните вновь созданный ресурс в хранилище
     */
    public function store(Request $request)
    {
        $validated = $request-> validate([
            'name'=> 'required|unique:halls_configs,name|string|max:255', // Проверка на отсутствие дублирующихся данных
            'config'=> 'exclude_unless: name, null|required|json', // Поле будет проверятся, если name = null
            'price_vip'=> 'exclude_unless: name, null|required|integer', // Поле будет проверятся, если = null 
            'price_ordinary'=>  'exclude_unless: name, null|required|integer' // Поле будет проверятся, если = null  
        ]);
        $hall = HallsConfig::create([
            'name'=>$request->name,
            'config'=>$request->config,
            'price_vip'=>$request->price_vip,
            'price_ordinary'=>$request->price_ordinary
        ]);
        $hall->save($validated);
        return Inertia::render('PanalAdmin', [
            'halls'=>HallsConfig::all()
        ]);
    }

    /**
     * Update the specified resource in storage.Обновите указанный ресурс в хранилище.
     */
    public function update($id, Request $request)
    {
        $hall = HallsConfig::find($id);
        if($request->config) {
            $parm = ['config'=> 'required|json'];
            $mess = 'Конфигурация зала обновлена';
        } else {
            $parm=[
                'price_vip'=> 'required|integer',
                'price_ordinary'=> 'required|integer',
            ];
            $mess = 'Конфигурация цен обновлена';
        }
        $valide = $request-> validate($parm);
        $hall-> update($valide);
        return Inertia::render('PanalAdmin', ['halls'=> HallsConfig::all(), 'mess'=> $mess]);
        //return redirect(route('halls.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $hallDelete = HallsConfig::find($id);
        $hallDelete->delete();
        return redirect(route('halls.index'));
    }
}
