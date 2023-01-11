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
        Schema::create('dealers', function (Blueprint $table) {
            $table->id();
            $table->string('first_name',50);
            $table->string('last_name',50);
            $table->string('licence',50);
            $table->text('address');
            $table->string('state',50);
            $table->text('inventory_location');
            $table->string('contact_first_name',50);
            $table->string('contact_last_name',50);
            $table->bigInteger('mobile');
            $table->string('email',160);
            $table->text('carfax_api');
            $table->text('autocheck_api');
            $table->text('billtrust_account');
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
        Schema::dropIfExists('dealers');
    }
};
