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
        Schema::create('vehicle_item_option_attributes', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('vehicle_inspection_item_id');
            $table->string('label');
            $table->string('label_type');
            $table->timestamps();
            $table->index('vehicle_inspection_item_id');
            $table->foreign('vehicle_inspection_item_id')->references('id')->on('vehicle_inspection_items')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::dropForeign('vehicle_item_option_attributes_vehicle_inspection_item_id_foreign');
        // Schema::dropIndex('vehicle_item_option_attributes_vehicle_inspection_item_id_index');
        // Schema::dropColumn('vehicle_inspection_item_id');
        Schema::dropIfExists('vehicle_item_option_attributes');
    }
};
