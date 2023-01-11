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
        Schema::table('item_option_values', function (Blueprint $table) {
            $table->string('value1_wholesale')->default('0')->change();
            $table->string('value1_retail')->default('0')->change();
            $table->string('value2_wholesale')->default('0')->change();
            $table->string('value2_retail')->default('0')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('item_option_values', function (Blueprint $table) {
            //
        });
    }
};
