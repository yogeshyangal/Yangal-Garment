import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const QuotePage = () => {
    const [formData, setFormData] = useState({
        customer_name: '',
        organization_name: '',
        customer_type: '',
        phone: '',
        whatsapp: '',
        email: '',
        product: '',
        quantity: '',
        sizes: '',
        fabric_preference: '',
        color_preference: '',
        printing_requirement: '',
        expected_delivery_date: '',
        additional_requirements: '',
        logo_file: null,
        design_file: null,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const customerTypes = [
        'School',
        'Sports Academy',
        'Coaching Institute',
        'Company',
        'Organization',
        'Club',
        'Event',
        'Other',
    ];

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.customer_name.trim()) {
            newErrors.customer_name = 'Customer name is required';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.product.trim()) {
            newErrors.product = 'Product selection is required';
        }

        if (!formData.quantity || formData.quantity < 100) {
            newErrors.quantity = 'Minimum order quantity is 100 pieces';
        }

        if (formData.logo_file) {
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'application/pdf'];
            const maxSize = 5 * 1024 * 1024; // 5MB

            if (!allowedTypes.includes(formData.logo_file.type)) {
                newErrors.logo_file = 'Only JPG, JPEG, PNG, WEBP, and PDF files are allowed';
            } else if (formData.logo_file.size > maxSize) {
                newErrors.logo_file = 'File size must be less than 5MB';
            }
        }

        if (formData.design_file) {
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'application/pdf'];
            const maxSize = 5 * 1024 * 1024; // 5MB

            if (!allowedTypes.includes(formData.design_file.type)) {
                newErrors.design_file = 'Only JPG, JPEG, PNG, WEBP, and PDF files are allowed';
            } else if (formData.design_file.size > maxSize) {
                newErrors.design_file = 'File size must be less than 5MB';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach(key => {
                if (formData[key] instanceof File) {
                    formDataToSend.append(key, formData[key]);
                } else if (formData[key]) {
                    formDataToSend.append(key, formData[key]);
                }
            });

            // API call will be added here
            // const response = await fetch('/api/enquiries', {
            //     method: 'POST',
            //     body: formDataToSend,
            // });

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            setSubmitSuccess(true);
            setFormData({
                customer_name: '',
                organization_name: '',
                customer_type: '',
                phone: '',
                whatsapp: '',
                email: '',
                product: '',
                quantity: '',
                sizes: '',
                fabric_preference: '',
                color_preference: '',
                printing_requirement: '',
                expected_delivery_date: '',
                additional_requirements: '',
                logo_file: null,
                design_file: null,
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitSuccess) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow bg-gray-50">
                    <div className="max-w-2xl mx-auto px-4 py-20">
                        <div className="bg-white rounded-xl shadow-md p-8 text-center">
                            <div className="text-6xl mb-4">✅</div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                Thank You!
                            </h1>
                            <p className="text-lg text-gray-600 mb-6">
                                Your enquiry has been submitted successfully. Our team will contact you within 24-48 hours with a quotation.
                            </p>
                            <a
                                href="/"
                                className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                            >
                                Back to Home
                            </a>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow bg-gray-50">
                <div className="bg-blue-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold mb-4">Get a Bulk Quote</h1>
                        <p className="text-lg text-blue-100">
                            Fill in the form below and we'll get back to you with a competitive quotation
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Customer Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="customer_name"
                                        value={formData.customer_name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                            errors.customer_name ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Your full name"
                                    />
                                    {errors.customer_name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.customer_name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Organization Name
                                    </label>
                                    <input
                                        type="text"
                                        name="organization_name"
                                        value={formData.organization_name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="School, Company, etc."
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Customer Type
                                    </label>
                                    <select
                                        name="customer_type"
                                        value={formData.customer_type}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="">Select type</option>
                                        {customerTypes.map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                            errors.phone ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="10-digit number"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        WhatsApp Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="whatsapp"
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="10-digit number"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                            errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Product *
                                    </label>
                                    <select
                                        name="product"
                                        value={formData.product}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                            errors.product ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    >
                                        <option value="">Select product</option>
                                        <option value="school-polo-tshirt">School Polo T-Shirt</option>
                                        <option value="custom-tshirt">Custom T-Shirt</option>
                                        <option value="track-pants">Track Pants</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {errors.product && (
                                        <p className="text-red-500 text-sm mt-1">{errors.product}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Quantity (pieces) *
                                    </label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        min="100"
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                            errors.quantity ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Minimum 100"
                                    />
                                    {errors.quantity && (
                                        <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Sizes Required
                                </label>
                                <input
                                    type="text"
                                    name="sizes"
                                    value={formData.sizes}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="e.g., 20 S, 30 M, 40 L, 10 XL"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Fabric Preference
                                    </label>
                                    <input
                                        type="text"
                                        name="fabric_preference"
                                        value={formData.fabric_preference}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="e.g., 100% Cotton, Polyester blend"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Color Preference
                                    </label>
                                    <input
                                        type="text"
                                        name="color_preference"
                                        value={formData.color_preference}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="e.g., Navy Blue, White"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Printing Requirement
                                </label>
                                <textarea
                                    name="printing_requirement"
                                    value={formData.printing_requirement}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Describe your printing needs (logo, names, numbers, etc.)"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Expected Delivery Date
                                </label>
                                <input
                                    type="date"
                                    name="expected_delivery_date"
                                    value={formData.expected_delivery_date}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Additional Requirements
                                </label>
                                <textarea
                                    name="additional_requirements"
                                    value={formData.additional_requirements}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Any other specific requirements"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Upload Logo
                                    </label>
                                    <input
                                        type="file"
                                        name="logo_file"
                                        onChange={handleChange}
                                        accept=".jpg,.jpeg,.png,.webp,.pdf"
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                            errors.logo_file ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    />
                                    <p className="text-sm text-gray-500 mt-1">
                                        JPG, JPEG, PNG, WEBP, PDF (Max 5MB)
                                    </p>
                                    {errors.logo_file && (
                                        <p className="text-red-500 text-sm mt-1">{errors.logo_file}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Upload Design / Reference
                                    </label>
                                    <input
                                        type="file"
                                        name="design_file"
                                        onChange={handleChange}
                                        accept=".jpg,.jpeg,.png,.webp,.pdf"
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                                            errors.design_file ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    />
                                    <p className="text-sm text-gray-500 mt-1">
                                        JPG, JPEG, PNG, WEBP, PDF (Max 5MB)
                                    </p>
                                    {errors.design_file && (
                                        <p className="text-red-500 text-sm mt-1">{errors.design_file}</p>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="consent"
                                    required
                                    className="w-4 h-4 text-blue-900 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                                    I agree to be contacted regarding my enquiry
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-900 text-white py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default QuotePage;
