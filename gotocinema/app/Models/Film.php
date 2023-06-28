<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    use HasFactory;
    protected $fillable = [
        'id', 'name', 'desc', 'genre', 'creators', 'realise', 'duration', 'posterMain', 'posterAd' 
    ];
}
