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
        Schema::create('item_option_values', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('item_option_attributes_id')->index();
            $table->foreign('item_option_attributes_id')->references('id')->on('item_option_attributes')->onDelete('cascade');
            $table->string('label1')->nullable(true);
            $table->string('value1_wholesale')->nullable(true);
            $table->string('value1_retail')->nullable(true);
            $table->string('label2')->nullable(true);
            $table->string('value2_wholesale')->nullable(true);
            $table->string('value2_retail')->nullable(true);
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
        Schema::dropIfExists('item_option_value');
    }
};
