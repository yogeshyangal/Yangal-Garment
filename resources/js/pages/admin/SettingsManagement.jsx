import React, { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';

const SettingsManagement = () => {
    const [activeTab, setActiveTab] = useState('general');

    const tabs = [
        { id: 'general', label: 'General' },
        { id: 'company', label: 'Company Info' },
        { id: 'contact', label: 'Contact' },
        { id: 'social', label: 'Social Media' },
        { id: 'seo', label: 'SEO' },
    ];

    const [settings, setSettings] = useState({
        general: {
            site_name: 'Yangal Garment',
            site_tagline: 'Custom T-Shirts & Track Pants for Schools, Academies & Organizations',
            logo: '',
            favicon: '',
        },
        company: {
            company_name: 'Yangal Garment',
            business_type: 'Manufacturer',
            gstin: '',
            pan: '',
        },
        contact: {
            phone: '+91 98765 43210',
            whatsapp: '+91 98765 43210',
            email: 'info@yangalgarment.com',
            address: 'Your Address Here',
            city: 'City',
            state: 'State',
            pincode: '123456',
        },
        social: {
            facebook: '',
            instagram: '',
            twitter: '',
            linkedin: '',
        },
        seo: {
            default_meta_title: 'Yangal Garment - Custom T-Shirts & Track Pants',
            default_meta_description: 'Bulk manufacturing of custom t-shirts and track pants for schools, academies, and organizations.',
            google_analytics: '',
        },
    });

    const handleSettingChange = (group, key, value) => {
        setSettings(prev => ({
            ...prev,
            [group]: {
                ...prev[group],
                [key]: value,
            },
        }));
    };

    const handleSave = () => {
        // API call to save settings
        alert('Settings saved successfully!');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <AdminSidebar currentPage="settings" />
            <div className="ml-64">
                <AdminHeader />
                <main className="pt-20 p-6">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                        <p className="text-gray-600">Manage your website configuration</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm">
                        <div className="border-b">
                            <nav className="flex space-x-8 px-6">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                                            activeTab === tab.id
                                                ? 'border-blue-600 text-blue-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <div className="p-6">
                            {activeTab === 'general' && (
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Site Name
                                        </label>
                                        <input
                                            type="text"
                                            value={settings.general.site_name}
                                            onChange={(e) => handleSettingChange('general', 'site_name', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Site Tagline
                                        </label>
                                        <input
                                            type="text"
                                            value={settings.general.site_tagline}
                                            onChange={(e) => handleSettingChange('general', 'site_tagline', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Logo
                                            </label>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Favicon
                                            </label>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'company' && (
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            value={settings.company.company_name}
                                            onChange={(e) => handleSettingChange('company', 'company_name', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Business Type
                                        </label>
                                        <input
                                            type="text"
                                            value={settings.company.business_type}
                                            onChange={(e) => handleSettingChange('company', 'business_type', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                GSTIN
                                            </label>
                                            <input
                                                type="text"
                                                value={settings.company.gstin}
                                                onChange={(e) => handleSettingChange('company', 'gstin', e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                PAN
                                            </label>
                                            <input
                                                type="text"
                                                value={settings.company.pan}
                                                onChange={(e) => handleSettingChange('company', 'pan', e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'contact' && (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone
                                            </label>
                                            <input
                                                type="text"
                                                value={settings.contact.phone}
                                                onChange={(e) => handleSettingChange('contact', 'phone', e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                WhatsApp
                                            </label>
                                            <input
                                                type="text"
                                                value={settings.contact.whatsapp}
                                                onChange={(e) => handleSettingChange('contact', 'whatsapp', e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={settings.contact.email}
                                            onChange={(e) => handleSettingChange('contact', 'email', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Address
                                        </label>
                                        <textarea
                                            rows={3}
                                            value={settings.contact.address}
                                            onChange={(e) => handleSettingChange('contact', 'address', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                value={settings.contact.city}
                                                onChange={(e) => handleSettingChange('contact', 'city', e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                State
                                            </label>
                                            <input
                                                type="text"
                                                value={settings.contact.state}
                                                onChange={(e) => handleSettingChange('contact', 'state', e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Pincode
                                            </label>
                                            <input
                                                type="text"
                                                value={settings.contact.pincode}
                                                onChange={(e) => handleSettingChange('contact', 'pincode', e.target.value)}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'social' && (
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Facebook URL
                                        </label>
                                        <input
                                            type="url"
                                            value={settings.social.facebook}
                                            onChange={(e) => handleSettingChange('social', 'facebook', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="https://facebook.com/yourpage"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Instagram URL
                                        </label>
                                        <input
                                            type="url"
                                            value={settings.social.instagram}
                                            onChange={(e) => handleSettingChange('social', 'instagram', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="https://instagram.com/yourhandle"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Twitter URL
                                        </label>
                                        <input
                                            type="url"
                                            value={settings.social.twitter}
                                            onChange={(e) => handleSettingChange('social', 'twitter', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="https://twitter.com/yourhandle"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            LinkedIn URL
                                        </label>
                                        <input
                                            type="url"
                                            value={settings.social.linkedin}
                                            onChange={(e) => handleSettingChange('social', 'linkedin', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="https://linkedin.com/company/yourcompany"
                                        />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'seo' && (
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Default Meta Title
                                        </label>
                                        <input
                                            type="text"
                                            value={settings.seo.default_meta_title}
                                            onChange={(e) => handleSettingChange('seo', 'default_meta_title', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Default Meta Description
                                        </label>
                                        <textarea
                                            rows={3}
                                            value={settings.seo.default_meta_description}
                                            onChange={(e) => handleSettingChange('seo', 'default_meta_description', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Google Analytics ID
                                        </label>
                                        <input
                                            type="text"
                                            value={settings.seo.google_analytics}
                                            onChange={(e) => handleSettingChange('seo', 'google_analytics', e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="UA-XXXXXXXXX-X"
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="pt-6 border-t flex justify-end">
                                <button
                                    onClick={handleSave}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Save Settings
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SettingsManagement;
