<?php

namespace App\Http\Controllers;

use App\Models\Films;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FilmsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(Request $request)
    {
        $validate = $request-> validate([
            'name'=> 'required|string|max:255',
            'desc'=> 'required|string|',
            'genre'=> 'required|string|max:255',
            'creators'=> 'required|string|max:255',
            'realise'=> 'required|string|max:255',
            'duration'=> 'required|string|max:255',
            'posterMain'=> 'required|string|max:255',
            'posterAd'=> 'required|string|max:255',
        ]);
        $request->user()->films()->create();
        return Inertia::render('panalAdmin');
    }

    /**
     * Display the specified resource.
     */
    public function show(Films $films)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Films $films)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Films $films)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Films $films)
    {
        //
    }
}
