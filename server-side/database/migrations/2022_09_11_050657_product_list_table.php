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
        Schema::create('product_list',function (Blueprint $table){
            $table->bigIncrements('id');
            $table->string('product_name');
            $table->string('product_code');
            $table->string('product_icon');
            $table->string('product_price');
            $table->string('product_category');
            $table->string('product_remarks');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};