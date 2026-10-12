<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('enquiries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')->nullable()->constrained()->nullOnDelete();
            $table->string('customer_name');
            $table->string('organization_name')->nullable();
            $table->string('customer_type')->nullable();
            $table->string('phone');
            $table->string('whatsapp')->nullable();
            $table->string('email');
            $table->foreignId('product_id')->nullable()->constrained()->nullOnDelete();
            $table->string('product_name')->nullable();
            $table->integer('quantity')->nullable();
            $table->json('sizes')->nullable();
            $table->string('fabric_preference')->nullable();
            $table->string('color_preference')->nullable();
            $table->text('printing_requirement')->nullable();
            $table->date('expected_delivery_date')->nullable();
            $table->text('additional_requirements')->nullable();
            $table->string('status')->default('new');
            $table->text('admin_notes')->nullable();
            $table->timestamp('contacted_at')->nullable();
            $table->timestamp('quotation_sent_at')->nullable();
            $table->timestamp('sample_approval_at')->nullable();
            $table->timestamp('confirmed_at')->nullable();
            $table->timestamp('completed_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('enquiries');
    }
};
