import React from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';

const AdminDashboard = () => {
    const stats = [
        { label: 'Total Products', value: '24', icon: '👕', color: 'bg-blue-500' },
        { label: 'Total Enquiries', value: '156', icon: '📨', color: 'bg-green-500' },
        { label: 'New Enquiries', value: '12', icon: '✉️', color: 'bg-yellow-500' },
        { label: 'Total Customers', value: '89', icon: '👥', color: 'bg-purple-500' },
        { label: 'Published Blogs', value: '18', icon: '📝', color: 'bg-pink-500' },
    ];

    const recentEnquiries = [
        { id: 1, customer: 'Rajesh Kumar', organization: 'Delhi Public School', product: 'School Polo T-Shirt', quantity: 500, status: 'new', date: '2 hours ago' },
        { id: 2, customer: 'Priya Sharma', organization: 'Sports Academy', product: 'Track Pants', quantity: 200, status: 'contacted', date: '5 hours ago' },
        { id: 3, customer: 'Amit Patel', organization: 'Coaching Institute', product: 'Custom T-Shirt', quantity: 150, status: 'quotation_sent', date: '1 day ago' },
        { id: 4, customer: 'Suresh Reddy', organization: 'Corporate Event', product: 'Custom T-Shirt', quantity: 300, status: 'new', date: '2 days ago' },
        { id: 5, customer: 'Neha Gupta', organization: 'Sports Club', product: 'Track Pants', quantity: 100, status: 'confirmed', date: '3 days ago' },
    ];

    const recentProducts = [
        { id: 1, name: 'Classic School Polo T-Shirt', category: 'School Polo T-Shirts', price: '₹180 - ₹280', status: 'active', date: '2 days ago' },
        { id: 2, name: 'Performance Track Pants', category: 'Track Pants', price: '₹200 - ₹320', status: 'active', date: '5 days ago' },
        { id: 3, name: 'Custom Printed T-Shirt', category: 'Custom T-Shirts', price: '₹150 - ₹250', status: 'active', date: '1 week ago' },
    ];

    const getStatusBadge = (status) => {
        const styles = {
            new: 'bg-blue-100 text-blue-800',
            contacted: 'bg-yellow-100 text-yellow-800',
            quotation_sent: 'bg-purple-100 text-purple-800',
            confirmed: 'bg-green-100 text-green-800',
            completed: 'bg-gray-100 text-gray-800',
            cancelled: 'bg-red-100 text-red-800',
            active: 'bg-green-100 text-green-800',
            inactive: 'bg-gray-100 text-gray-800',
        };
        return (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status] || styles.new}`}>
                {status.replace('_', ' ').toUpperCase()}
            </span>
        );
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <AdminSidebar currentPage="dashboard" />
            <div className="ml-64">
                <AdminHeader />
                <main className="pt-20 p-6">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-2xl`}>
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-white rounded-xl shadow-sm">
                            <div className="p-6 border-b">
                                <h2 className="text-lg font-semibold text-gray-900">Recent Enquiries</h2>
                            </div>
                            <div className="p-6">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="text-left text-sm text-gray-500">
                                                <th className="pb-3 font-medium">Customer</th>
                                                <th className="pb-3 font-medium">Product</th>
                                                <th className="pb-3 font-medium">Qty</th>
                                                <th className="pb-3 font-medium">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y">
                                            {recentEnquiries.map((enquiry) => (
                                                <tr key={enquiry.id} className="text-sm">
                                                    <td className="py-3">
                                                        <div className="font-medium text-gray-900">{enquiry.customer}</div>
                                                        <div className="text-gray-500 text-xs">{enquiry.organization}</div>
                                                    </td>
                                                    <td className="py-3 text-gray-600">{enquiry.product}</td>
                                                    <td className="py-3 text-gray-600">{enquiry.quantity}</td>
                                                    <td className="py-3">{getStatusBadge(enquiry.status)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-4 text-center">
                                    <a href="/admin/enquiries" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                        View All Enquiries →
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm">
                            <div className="p-6 border-b">
                                <h2 className="text-lg font-semibold text-gray-900">Recent Products</h2>
                            </div>
                            <div className="p-6">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="text-left text-sm text-gray-500">
                                                <th className="pb-3 font-medium">Product</th>
                                                <th className="pb-3 font-medium">Category</th>
                                                <th className="pb-3 font-medium">Price</th>
                                                <th className="pb-3 font-medium">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y">
                                            {recentProducts.map((product) => (
                                                <tr key={product.id} className="text-sm">
                                                    <td className="py-3 font-medium text-gray-900">{product.name}</td>
                                                    <td className="py-3 text-gray-600">{product.category}</td>
                                                    <td className="py-3 text-gray-600">{product.price}</td>
                                                    <td className="py-3">{getStatusBadge(product.status)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-4 text-center">
                                    <a href="/admin/products" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                        View All Products →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <a
                                href="/admin/products/create"
                                className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                            >
                                <span className="text-2xl">➕</span>
                                <span className="font-medium text-gray-900">Add Product</span>
                            </a>
                            <a
                                href="/admin/enquiries/new"
                                className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                            >
                                <span className="text-2xl">📨</span>
                                <span className="font-medium text-gray-900">View Enquiries</span>
                            </a>
                            <a
                                href="/admin/blogs/create"
                                className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                            >
                                <span className="text-2xl">📝</span>
                                <span className="font-medium text-gray-900">Write Blog</span>
                            </a>
                            <a
                                href="/admin/settings"
                                className="flex items-center gap-3 p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
                            >
                                <span className="text-2xl">⚙️</span>
                                <span className="font-medium text-gray-900">Settings</span>
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
