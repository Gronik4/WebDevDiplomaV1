<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SessionGrid extends Model
{
    use HasFactory;
    protected $table = 'session_grids';
    protected $fillable = [
        'data', 'id_hall', 'nameHall', 'ses_start', 'id_film',	'sold_seats',	'allpwed'
    ];
}
