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
        Schema::create('item_options', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('inspection_location_id');
            $table->bigInteger('inspection_type_id');
            $table->bigInteger('inspection_item_id');
            $table->boolean('status')->default(true);
            $table->timestamps();
            $table->index('inspection_location_id');
            $table->foreign('inspection_location_id')->references('id')->on('inspection_locations')->onDelete('cascade');
            $table->index('inspection_type_id');
            $table->foreign('inspection_type_id')->references('id')->on('inspection_types')->onDelete('cascade');
            $table->index('inspection_item_id');
            $table->foreign('inspection_item_id')->references('id')->on('inspection_items')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropForeign('item_options_inspection_type_id_foreign');
        Schema::dropIndex('item_options_inspection_type_id_index');
        Schema::dropColumn('inspection_type_id');
        Schema::dropForeign('item_options_inspection_location_id_foreign');
        Schema::dropIndex('item_options_inspection_location_id_index');
        Schema::dropColumn('inspection_location_id');
        Schema::dropForeign('item_options_inspection_item_id_foreign');
        Schema::dropIndex('item_options_inspection_item_id_index');
        Schema::dropColumn('inspection_item_id');
        Schema::dropIfExists('item_options');
    }
};
