<?php

namespace App\Http\Controllers;

use App\Models\Enquiry;
use App\Models\Customer;
use App\Models\EnquiryFile;
use App\Mail\NewEnquiryNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class EnquiryController extends Controller
{
    /**
     * Store a new enquiry.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'customer_name' => 'required|string|max:255',
            'organization_name' => 'nullable|string|max:255',
            'customer_type' => 'nullable|string|max:255',
            'phone' => 'required|string|regex:/^[0-9]{10}$/',
            'whatsapp' => 'nullable|string|regex:/^[0-9]{10}$/',
            'email' => 'required|email|max:255',
            'product' => 'required|string|max:255',
            'quantity' => 'required|integer|min:100',
            'sizes' => 'nullable|string',
            'fabric_preference' => 'nullable|string|max:255',
            'color_preference' => 'nullable|string|max:255',
            'printing_requirement' => 'nullable|string',
            'expected_delivery_date' => 'nullable|date|after:today',
            'additional_requirements' => 'nullable|string',
            'logo_file' => 'nullable|file|mimes:jpg,jpeg,png,webp,pdf|max:5120',
            'design_file' => 'nullable|file|mimes:jpg,jpeg,png,webp,pdf|max:5120',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create or find customer
        $customer = Customer::firstOrCreate(
            ['email' => $request->email],
            [
                'name' => $request->customer_name,
                'phone' => $request->phone,
                'whatsapp' => $request->whatsapp,
                'organization_name' => $request->organization_name,
                'customer_type' => $request->customer_type,
            ]
        );

        // Create enquiry
        $enquiry = Enquiry::create([
            'customer_id' => $customer->id,
            'customer_name' => $request->customer_name,
            'organization_name' => $request->organization_name,
            'customer_type' => $request->customer_type,
            'phone' => $request->phone,
            'whatsapp' => $request->whatsapp,
            'email' => $request->email,
            'product_name' => $request->product,
            'quantity' => $request->quantity,
            'sizes' => $request->sizes,
            'fabric_preference' => $request->fabric_preference,
            'color_preference' => $request->color_preference,
            'printing_requirement' => $request->printing_requirement,
            'expected_delivery_date' => $request->expected_delivery_date,
            'additional_requirements' => $request->additional_requirements,
            'status' => 'new',
        ]);

        // Handle file uploads
        if ($request->hasFile('logo_file')) {
            $this->handleFileUpload($request->file('logo_file'), $enquiry, 'logo');
        }

        if ($request->hasFile('design_file')) {
            $this->handleFileUpload($request->file('design_file'), $enquiry, 'design');
        }

        // Send email notification
        try {
            Mail::to(config('mail.from.address'))->send(new NewEnquiryNotification($enquiry));
        } catch (\Exception $e) {
            \Log::error('Failed to send enquiry email: ' . $e->getMessage());
        }

        return response()->json([
            'message' => 'Enquiry submitted successfully',
            'enquiry_id' => $enquiry->id,
        ], 201);
    }

    /**
     * Handle file upload securely.
     */
    protected function handleFileUpload($file, $enquiry, $type)
    {
        // Generate random filename
        $filename = uniqid() . '_' . time() . '.' . $file->getClientOriginalExtension();
        
        // Store file securely
        $path = $file->storeAs('enquiries/' . $enquiry->id, $filename, 'public');
        
        // Create file record
        EnquiryFile::create([
            'enquiry_id' => $enquiry->id,
            'file_name' => $file->getClientOriginalName(),
            'file_path' => $path,
            'file_type' => $type,
            'file_size' => $file->getSize(),
            'mime_type' => $file->getMimeType(),
        ]);
    }
}
