<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Enquiry Notification</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Yangal Garment</h1>
            <p style="color: #bfdbfe; margin: 10px 0 0 0;">New Bulk Order Enquiry Received</p>
        </div>

        <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
            <h2 style="color: #1e3a8a; margin-top: 0;">Enquiry Details</h2>

            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Customer Name:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">{{ $enquiry->customer_name }}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Organization:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">{{ $enquiry->organization_name ?? 'N/A' }}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Customer Type:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">{{ $enquiry->customer_type ?? 'N/A' }}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Phone:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">{{ $enquiry->phone }}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">WhatsApp:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">{{ $enquiry->whatsapp ?? 'N/A' }}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Email:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">{{ $enquiry->email }}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Product:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">{{ $enquiry->product_name ?? 'N/A' }}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Quantity:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">{{ $enquiry->quantity ?? 'N/A' }} pieces</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Printing Requirement:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">{{ $enquiry->printing_requirement ?? 'N/A' }}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #6b7280;">Expected Delivery:</td>
                    <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">{{ $enquiry->expected_delivery_date ? $enquiry->expected_delivery_date->format('Y-m-d') : 'N/A' }}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; font-weight: bold; color: #6b7280;">Submitted On:</td>
                    <td style="padding: 10px;">{{ $enquiry->created_at->format('Y-m-d H:i:s') }}</td>
                </tr>
            </table>

            @if($enquiry->additional_requirements)
                <div style="background: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <h3 style="color: #1e3a8a; margin-top: 0; font-size: 16px;">Additional Requirements:</h3>
                    <p style="margin: 10px 0 0 0;">{{ $enquiry->additional_requirements }}</p>
                </div>
            @endif

            @if($enquiry->files && $enquiry->files->count() > 0)
                <div style="background: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <h3 style="color: #1e3a8a; margin-top: 0; font-size: 16px;">Attached Files:</h3>
                    <ul style="margin: 10px 0 0 0; padding-left: 20px;">
                        @foreach($enquiry->files as $file)
                            <li>{{ $file->file_name }} ({{ number_format($file->file_size / 1024, 2) }} KB)</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <div style="text-align: center; margin: 30px 0;">
                <a href="{{ config('app.url') }}/admin/enquiries" style="background: #1e3a8a; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
                    View Enquiry in Admin Panel
                </a>
            </div>
        </div>

        <div style="background: #1e3a8a; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
            <p style="margin: 0; font-size: 14px;">&copy; {{ date('Y') }} Yangal Garment. All rights reserved.</p>
            <p style="margin: 10px 0 0 0; font-size: 12px; color: #bfdbfe;">
                This is an automated email. Please do not reply.
            </p>
        </div>
    </div>
</body>
</html>
