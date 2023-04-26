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
        Schema::create('transactions', function (Blueprint $table) {
            $table->increments('bankTranNo');
            $table->unsignedInteger('ordered_id');
            $table->decimal('amount', 15, 4);;
            $table->string('bankCode');
            $table->string('cardType');
            $table->string('responseCode');
            $table->timestamps();

            $table->foreign('ordered_id')
            ->references('id')
            ->on('ordereds')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
