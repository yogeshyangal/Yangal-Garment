<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class CacheResponse
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next, $minutes = 60)
    {
        $key = 'response_' . md5($request->fullUrl());

        if (Cache::has($key)) {
            return Cache::get($key);
        }

        $response = $next($request);

        // Only cache successful GET requests
        if ($request->isMethod('GET') && $response->isOk()) {
            Cache::put($key, $response, $minutes * 60);
        }

        return $response;
    }
}
