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
        Schema::create('item_option_attributes', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('item_option_id');
            $table->string('label');
            $table->string('label_type');
            $table->json('label_options')->nullable();
            $table->timestamps();
            $table->index('item_option_id');
            $table->foreign('item_option_id')->references('id')->on('item_options')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropForeign('item_option_attributes_item_option_id_foreign');
        Schema::dropIndex('item_option_attributes_item_option_id_index');
        Schema::dropColumn('item_option_id');
        Schema::dropIfExists('item_option_attributes');
    }
};
