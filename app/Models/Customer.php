<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'whatsapp',
        'organization_name',
        'customer_type',
        'address',
        'city',
        'state',
        'pincode',
    ];

    public function enquiries(): HasMany
    {
        return $this->hasMany(Enquiry::class);
    }
}
