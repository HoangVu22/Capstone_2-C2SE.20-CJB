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
        Schema::create('personal_tours', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 100);
            $table->unsignedInteger('room_id');
            $table->unsignedInteger('owner_id');
            $table->string('description')->nullable();
            $table->dateTime('from_date');
            $table->dateTime('to_date');
            $table->string('lat');
            $table->string('lon');
            $table->string('from_where');
            $table->string('to_where');
            $table->timestamps();

            $table->foreign('owner_id')
                  ->references('id')
                  ->on('users')
                  ->onDelete('cascade');

            $table->foreign('room_id')
                  ->references('id')
                  ->on('rooms')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personal_tours');
    }
};
