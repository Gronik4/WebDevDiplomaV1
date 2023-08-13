<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSGridRequest;
use App\Models\SessionGrid;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class SessionGridController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        //
        return response('Hellow! SessionGrid');
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
        foreach($request as $el) { SessionGrid::create($el->validated());}
        $mess = 'Сетка сеансов на '.' успешно добавлена.';
        return Inertia::render('SessionGrid')->with('mess', $mess);
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
    public function update(Request $request, SessionGrid $sessionGrid)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SessionGrid $sessionGrid)
    {
        //
    }
}
