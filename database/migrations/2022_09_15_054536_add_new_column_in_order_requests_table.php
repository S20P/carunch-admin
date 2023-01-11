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
        Schema::table('vehicles', function (Blueprint $table) {
            $table->bigInteger('vehicle_type_id');
            $table->foreign('vehicle_type_id')->references('id')->on('vehicle_types')->onDelete('cascade');
            $table->string('vehicle_year',160);
            $table->string('vehicle_make',160);
            $table->string('vehicle_model',160);
            $table->bigInteger('vehicle_mileage');
            $table->decimal('vehicle_wholesale_value',8,2);
            $table->decimal('vehicle_retail_value',8,2);
            $table->text('address')->nullable(true)->change();
            $table->string('state',50)->nullable(true)->change();
            $table->bigInteger('mobile')->nullable(true)->change();
            $table->string('email',160)->nullable(true)->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('vehicles', function (Blueprint $table) {
            //
        });
    }
};
