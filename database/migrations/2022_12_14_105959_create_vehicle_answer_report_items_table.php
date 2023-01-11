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
        Schema::create('vehicle_answer_report_items', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('vehicle_answer_report_id')->index();
            $table->foreign('vehicle_answer_report_id')->references('id')->on('vehicle_answer_reports')->onDelete('CASCADE');
            $table->bigInteger('item_option_attribute_id')->index();
            $table->foreign('item_option_attribute_id')->references('id')->on('item_option_attributes')->onDelete('CASCADE');
            $table->string('item_option_answerd');
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
        Schema::dropIfExists('vehicle_answer_report_items');
    }
};
