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
        return Inertia::render('PanalAdmin', [
            'halls'=> HallsConfig::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource. Отобразите форму для создания нового ресурса
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.Сохраните вновь созданный ресурс в хранилище
     */
    public function store(Request $request)
    {
        $validated = $request-> validate([
            'name'=> 'required|string|max:255',
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
        return Inertia::render('PanalAdmin');
    }

    /**
     * Display the specified resource. Отобразить указанный ресурс.
     */
    public function show(HallsConfig $hallsConfig)
    {
        //
    }

    /**
     * Show the form for editing the specified resource. Отобразите форму для редактирования указанного ресурса.
     */
    public function edit(HallsConfig $hallsConfig)
    {
        //
    }

    /**
     * Update the specified resource in storage.Обновите указанный ресурс в хранилище.
     */
    public function update(Request $request, HallsConfig $hallsConfig)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HallsConfig $hallsConfig)
    {
        //
    }
}
