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
        Schema::table('vehicle_answer_reports', function (Blueprint $table) {

            if (Schema::hasColumn('vehicle_answer_reports', 'inspection_item_id')) {
            $table->dropForeign(['inspection_item_id']);
            $table->dropColumn('inspection_item_id');
            }
           
            $table->bigInteger('vehicle_inspection_item_id')->nullable()->index();
            $table->foreign('vehicle_inspection_item_id')
                ->references('id')
                ->on('vehicle_inspection_items')
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
        Schema::table('vehicle_answer_reports', function (Blueprint $table) {
            //
        });
    }
};
