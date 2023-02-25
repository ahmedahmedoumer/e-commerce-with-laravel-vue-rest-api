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
         Schema::create('verified_payment', function(Blueprint $table){
                 $table->id();
                 $table->unsignedBigInteger('userID');
                 $table->string('productID');
                 $table->string('quantity');
                 $table->integer('total_price');
                 $table->foreign('userID')->references('id')->on('users')->onDelete('cascade');
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
        //
    }
};
