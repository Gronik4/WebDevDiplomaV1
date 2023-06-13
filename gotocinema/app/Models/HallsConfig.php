<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HallsConfig extends Model
{
    use HasFactory;
    protected $table = 'halls_configs';
    protected $fillable = [
        'name', 'config', 'price_vip', 'price_ordinary',
    ];
}
