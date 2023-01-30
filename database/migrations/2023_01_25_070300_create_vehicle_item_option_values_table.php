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
        Schema::create('vehicle_item_option_values', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('vehicle_item_option_attributes_id')->index();
            $table->foreign('vehicle_item_option_attributes_id')->references('id')->on('vehicle_item_option_attributes')->onDelete('cascade');
            $table->string('label1')->nullable(true);
            $table->string('value1_wholesale')->default('0')->nullable(true);
            $table->string('value1_retail')->default('0')->nullable(true);
            $table->string('label2')->nullable(true);
            $table->string('value2_wholesale')->default('0')->nullable(true);
            $table->string('value2_retail')->default('0')->nullable(true);
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
        // Schema::dropForeign('vehicle_item_option_values_vehicle_item_option_attributes_id_foreign');
        // Schema::dropIndex('vehicle_item_option_values_vehicle_item_option_attributes_id_index');
        // Schema::dropColumn('vehicle_item_option_attributes_id');
        Schema::dropIfExists('vehicle_item_option_values');
    }
};
