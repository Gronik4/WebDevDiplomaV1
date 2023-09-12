<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class HallConfig extends Model
{
    use HasFactory;
    protected $table = 'halls_configs';
    protected $fillable = [
        'name', 'config', 'price_vip', 'price_ordinary',
    ];

    public function halls_config(): HasMany {
        return $this->hasMany(HallsConfig::class);
    }
}
