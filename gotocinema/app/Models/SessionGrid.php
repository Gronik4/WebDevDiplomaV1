<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class SessionGrid extends Model
{
    use HasFactory;
    protected $table = 'session_grids';
    protected $fillable = [
        'data', 'id_hall', 'nameHall', 'ses_start', 'id_film',	'sold_seats',	'allpwed'
    ];

    public function session_grids():HasMany {
        return $this->hasMany(SessionGrid::class);
    }

    public function allpwed():BelongsToMany {
        return $this->belongsToMany(SessionGrid::class);
    }
}
