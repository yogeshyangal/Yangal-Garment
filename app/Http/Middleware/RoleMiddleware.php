<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next, string $role)
    {
        if (!Auth::check()) {
            return redirect('/admin/login');
        }

        $user = Auth::user();
        
        if (!$user->hasRole($role)) {
            abort(403, 'You do not have permission to access this resource.');
        }

        return $next($request);
    }
}
