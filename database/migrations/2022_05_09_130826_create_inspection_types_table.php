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
        Schema::create('inspection_types', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('location_id');
            $table->string('type',50);
            $table->json('vehicle_types');
            $table->boolean('status')->default(true);
            $table->timestamps();
            $table->index('location_id');
            $table->foreign('location_id')->references('id')->on('inspection_locations')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropForeign('inspection_types_location_id_foreign');
        Schema::dropIndex('inspection_types_location_id_index');
        Schema::dropColumn('location_id');
        Schema::dropIfExists('inspection_types');
    }
};
