<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Create default admin user
        $admin = User::firstOrCreate(
            ['email' => env('ADMIN_EMAIL', 'admin@yangalgarment.com')],
            [
                'name' => env('ADMIN_NAME', 'Super Admin'),
                'password' => Hash::make(env('ADMIN_PASSWORD', 'Admin@123456')),
            ]
        );

        // Assign super-admin role
        $superAdminRole = Role::where('slug', 'super-admin')->first();
        if ($superAdminRole && !$admin->roles()->where('slug', 'super-admin')->exists()) {
            $admin->roles()->attach($superAdminRole);
        }

        $this->command->info('Admin user created/updated successfully.');
        $this->command->warn('Default email: ' . env('ADMIN_EMAIL', 'admin@yangalgarment.com'));
        $this->command->warn('Please change the default password after first login.');
    }
}
