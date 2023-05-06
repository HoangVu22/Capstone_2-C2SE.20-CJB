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
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('from_id');
            $table->foreign('from_id')
                  ->references('id')
                  ->on('users')
                  ->onDelete('cascade');

            $table->unsignedInteger('to_id')->nullable();
            $table->foreign('to_id')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade');

            $table->unsignedInteger('room_id')->nullable();
            $table->foreign('room_id')
                    ->references('id')
                    ->on('rooms')
                    ->onDelete('cascade');
            $table->string('content');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};
