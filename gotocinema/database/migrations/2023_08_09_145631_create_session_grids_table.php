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
        Schema::create('session_grids', function (Blueprint $table) {
            $table->id();
            $table->string('data')->nullable();
            $table->bigInteger('id_hall')->unsigned()->index()->nullable();
            $table->foreign('id_hall')->references('id')->on('halls_configs')->onDelete('cascade');
            $table->string('nameHall')->nullable();
            $table->string('ses_start')->nullable();
            $table->bigInteger('id_film')->unsigned()->index()->nullable();
            $table->foreign('id_film')->references('id')->on('films')->onDelete('cascade');
            $table->json('sold_seats')->nullable();
            $table->boolean('allpwed')->default(false)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('session_grids');
    }
};
