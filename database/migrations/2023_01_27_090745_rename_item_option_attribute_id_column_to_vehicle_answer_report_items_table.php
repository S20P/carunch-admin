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
        Schema::table('vehicle_answer_report_items', function (Blueprint $table) {
            if (Schema::hasColumn('vehicle_answer_report_items', 'item_option_attribute_id')) {
                $table->dropForeign(['item_option_attribute_id']);
                $table->dropColumn('item_option_attribute_id');
        }
                $table->bigInteger('vehicle_item_option_attribute_id')->nullable()->index();
                $table->foreign('vehicle_item_option_attribute_id')
                    ->references('id')
                    ->on('vehicle_item_option_attributes')
                    ->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('vehicle_answer_report_items', function (Blueprint $table) {
            //
        });
    }
};
