<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $roles = [
            [
                'name' => 'Super Admin',
                'slug' => 'super-admin',
                'description' => 'Full access to all features',
            ],
            [
                'name' => 'Product Manager',
                'slug' => 'product-manager',
                'description' => 'Manage products and categories',
            ],
            [
                'name' => 'Content Manager',
                'slug' => 'content-manager',
                'description' => 'Manage blogs and content',
            ],
            [
                'name' => 'Sales Manager',
                'slug' => 'sales-manager',
                'description' => 'Manage enquiries and customers',
            ],
        ];

        foreach ($roles as $role) {
            Role::firstOrCreate(
                ['slug' => $role['slug']],
                $role
            );
        }
    }
}
