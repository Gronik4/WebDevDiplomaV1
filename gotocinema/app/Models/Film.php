<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Film extends Model
{
    use HasFactory;
    protected $fillable = [
        'id', 'name', 'desc', 'genre', 'creators', 'realise', 'duration', 'posterMain', 'posterAd' 
    ];
    
    public function films(): HasMany {
        return $this->hasMany(Films::class);
    }
    
    public function grid_client(): HasMany {
        return $this->hasMany(Films::class);
    }
}
