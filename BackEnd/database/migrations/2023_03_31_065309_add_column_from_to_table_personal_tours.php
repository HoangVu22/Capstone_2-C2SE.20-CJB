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
        Schema::table('personal_tours', function (Blueprint $table) {
            //
            $table->string('from_where');
            $table->string('to_where');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('personal_tours', function (Blueprint $table) {
            //
            $table->dropColumn('from_where');
            $table->dropColumn('to_where');
        });
    }
};
