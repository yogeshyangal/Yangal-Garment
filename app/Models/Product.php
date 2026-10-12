<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'short_description',
        'description',
        'price_min',
        'price_max',
        'moq',
        'fabric',
        'gsm',
        'sizes',
        'colors',
        'printing_options',
        'usage',
        'is_featured',
        'is_active',
        'seo_title',
        'meta_description',
    ];

    protected $casts = [
        'sizes' => 'array',
        'colors' => 'array',
        'printing_options' => 'array',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function images(): HasMany
    {
        return $this->hasMany(ProductImage::class);
    }

    public function pricingTiers(): HasMany
    {
        return $this->hasMany(PricingTier::class);
    }
}
