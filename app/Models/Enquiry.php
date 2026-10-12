<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Enquiry extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'customer_name',
        'organization_name',
        'customer_type',
        'phone',
        'whatsapp',
        'email',
        'product_id',
        'product_name',
        'quantity',
        'sizes',
        'fabric_preference',
        'color_preference',
        'printing_requirement',
        'expected_delivery_date',
        'additional_requirements',
        'status',
        'admin_notes',
        'contacted_at',
        'quotation_sent_at',
        'sample_approval_at',
        'confirmed_at',
        'completed_at',
    ];

    protected $casts = [
        'sizes' => 'array',
        'expected_delivery_date' => 'date',
        'contacted_at' => 'datetime',
        'quotation_sent_at' => 'datetime',
        'sample_approval_at' => 'datetime',
        'confirmed_at' => 'datetime',
        'completed_at' => 'datetime',
    ];

    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function files(): HasMany
    {
        return $this->hasMany(EnquiryFile::class);
    }
}
