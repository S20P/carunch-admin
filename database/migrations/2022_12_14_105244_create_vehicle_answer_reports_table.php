<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicle_answer_reports', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('vehicle_id')->index();
            $table->foreign('vehicle_id')->references('id')->on('vehicles')->onDelete('CASCADE');
            
            $table->bigInteger('inspection_item_id')->index();

            $table->foreign('inspection_item_id')->references('id')->on('inspection_items')->onDelete('CASCADE');
            $table->boolean('no_prior_event_observed');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vehicle_answer_reports');
    }
};
