<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\EnquiryController;

// Public routes
Route::get('/', function () {
    return view('app');
});

// API routes
Route::post('/api/enquiries', [EnquiryController::class, 'store']);

// Admin authentication routes
Route::prefix('admin')->group(function () {
    Route::get('/login', [LoginController::class, 'showLoginForm'])->name('admin.login');
    Route::post('/login', [LoginController::class, 'login'])->name('admin.login.submit');
    Route::post('/logout', [LoginController::class, 'logout'])->name('admin.logout');
});

// Admin protected routes
Route::prefix('admin')->middleware('admin')->group(function () {
    Route::get('/dashboard', function () {
        return view('admin.dashboard');
    })->name('admin.dashboard');
    
    // Add other admin routes here
    Route::get('/products', function () {
        return view('admin.products');
    })->name('admin.products');
    
    Route::get('/enquiries', function () {
        return view('admin.enquiries');
    })->name('admin.enquiries');
    
    Route::get('/blogs', function () {
        return view('admin.blogs');
    })->name('admin.blogs');
    
    Route::get('/settings', function () {
        return view('admin.settings');
    })->name('admin.settings');
});
