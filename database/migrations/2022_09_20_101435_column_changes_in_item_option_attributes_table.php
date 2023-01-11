<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Artisan;
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
        Schema::table('item_option_attributes', function (Blueprint $table) {
            Artisan::call('db:seed', [
                '--class' => 'OptionJsonAttributeAddInNewTabelSeeder',
            ]);
            $table->bigInteger('inspection_item_id')->nullable(false)->change();
            $table->foreign('inspection_item_id')
                ->references('id')
                ->on('inspection_items')
                ->onDelete('cascade');
            $table->dropColumn('item_option_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('item_option_attributes', function (Blueprint $table) {
            //
        });
    }
};
