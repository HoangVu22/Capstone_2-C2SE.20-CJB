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
        Schema::create('tours', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 100);
            $table->unsignedInteger('ts_id');
            $table->string('description');
            $table->string('address', 100);
            $table->dateTime('from_date');
            $table->dateTime('to_date');
            $table->double('price', 10, 4);
            $table->integer('slot');
            $table->string('lon',20);
            $table->string('lat',20);
            $table->timestamps();

            $table->foreign('ts_id')
                  ->references('id')
                  ->on('ts_profiles')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tours');
    }
};
