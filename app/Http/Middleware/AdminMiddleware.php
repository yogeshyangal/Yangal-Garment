<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next)
    {
        if (!Auth::check()) {
            return redirect('/admin/login');
        }

        $user = Auth::user();
        
        // Check if user has any admin role
        $adminRoles = ['super-admin', 'product-manager', 'content-manager', 'sales-manager'];
        
        $hasAdminRole = false;
        foreach ($user->roles as $role) {
            if (in_array($role->slug, $adminRoles)) {
                $hasAdminRole = true;
                break;
            }
        }

        if (!$hasAdminRole) {
            Auth::logout();
            return redirect('/admin/login')->with('error', 'You do not have permission to access the admin panel.');
        }

        return $next($request);
    }
}
