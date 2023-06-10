<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('halls_configs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->json('config');
            $table->decimal('price_vip', 4);
            $table->decimal('price_ordinary', 4);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('halls_configs');
    }
};
