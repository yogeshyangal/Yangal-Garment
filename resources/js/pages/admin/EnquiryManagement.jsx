import React, { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';

const EnquiryManagement = () => {
    const [enquiries, setEnquiries] = useState([
        { id: 1, customer: 'Rajesh Kumar', organization: 'Delhi Public School', email: 'rajesh@dps.edu', phone: '9876543210', product: 'School Polo T-Shirt', quantity: 500, status: 'new', date: '2024-10-02' },
        { id: 2, customer: 'Priya Sharma', organization: 'Sports Academy', email: 'priya@sportsacademy.com', phone: '9876543211', product: 'Track Pants', quantity: 200, status: 'contacted', date: '2024-10-01' },
        { id: 3, customer: 'Amit Patel', organization: 'Coaching Institute', email: 'amit@coaching.com', phone: '9876543212', product: 'Custom T-Shirt', quantity: 150, status: 'quotation_sent', date: '2024-09-30' },
        { id: 4, customer: 'Suresh Reddy', organization: 'Corporate Event', email: 'suresh@corporate.com', phone: '9876543213', product: 'Custom T-Shirt', quantity: 300, status: 'new', date: '2024-09-29' },
        { id: 5, customer: 'Neha Gupta', organization: 'Sports Club', email: 'neha@sportsclub.com', phone: '9876543214', product: 'Track Pants', quantity: 100, status: 'confirmed', date: '2024-09-28' },
    ]);

    const [filterStatus, setFilterStatus] = useState('all');
    const [selectedEnquiry, setSelectedEnquiry] = useState(null);
    const [showDetailModal, setShowDetailModal] = useState(false);

    const statusOptions = [
        { value: 'all', label: 'All' },
        { value: 'new', label: 'New' },
        { value: 'contacted', label: 'Contacted' },
        { value: 'quotation_sent', label: 'Quotation Sent' },
        { value: 'sample_approval', label: 'Sample Approval' },
        { value: 'confirmed', label: 'Confirmed' },
        { value: 'completed', label: 'Completed' },
        { value: 'cancelled', label: 'Cancelled' },
    ];

    const getStatusBadge = (status) => {
        const styles = {
            new: 'bg-blue-100 text-blue-800',
            contacted: 'bg-yellow-100 text-yellow-800',
            quotation_sent: 'bg-purple-100 text-purple-800',
            sample_approval: 'bg-indigo-100 text-indigo-800',
            confirmed: 'bg-green-100 text-green-800',
            completed: 'bg-gray-100 text-gray-800',
            cancelled: 'bg-red-100 text-red-800',
        };
        return (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status] || styles.new}`}>
                {status.replace('_', ' ').toUpperCase()}
            </span>
        );
    };

    const filteredEnquiries = filterStatus === 'all' 
        ? enquiries 
        : enquiries.filter(e => e.status === filterStatus);

    const handleStatusChange = (id, newStatus) => {
        setEnquiries(enquiries.map(e => 
            e.id === id ? { ...e, status: newStatus } : e
        ));
    };

    const handleViewDetail = (enquiry) => {
        setSelectedEnquiry(enquiry);
        setShowDetailModal(true);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <AdminSidebar currentPage="enquiries" />
            <div className="ml-64">
                <AdminHeader />
                <main className="pt-20 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Enquiries</h1>
                            <p className="text-gray-600">Manage customer enquiries and quotations</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm mb-6">
                        <div className="p-4 border-b flex items-center gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Filter by Status
                                </label>
                                <select
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                >
                                    {statusOptions.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="ml-auto text-sm text-gray-600">
                                Showing {filteredEnquiries.length} of {enquiries.length} enquiries
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr className="text-left text-sm text-gray-500">
                                        <th className="px-6 py-3 font-medium">Customer</th>
                                        <th className="px-6 py-3 font-medium">Organization</th>
                                        <th className="px-6 py-3 font-medium">Product</th>
                                        <th className="px-6 py-3 font-medium">Quantity</th>
                                        <th className="px-6 py-3 font-medium">Status</th>
                                        <th className="px-6 py-3 font-medium">Date</th>
                                        <th className="px-6 py-3 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {filteredEnquiries.map((enquiry) => (
                                        <tr key={enquiry.id} className="text-sm">
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-gray-900">{enquiry.customer}</div>
                                                <div className="text-gray-500 text-xs">{enquiry.email}</div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">{enquiry.organization}</td>
                                            <td className="px-6 py-4 text-gray-600">{enquiry.product}</td>
                                            <td className="px-6 py-4 text-gray-600">{enquiry.quantity}</td>
                                            <td className="px-6 py-4">
                                                <select
                                                    value={enquiry.status}
                                                    onChange={(e) => handleStatusChange(enquiry.id, e.target.value)}
                                                    className="px-2 py-1 border border-gray-300 rounded text-xs"
                                                >
                                                    {statusOptions.filter(o => o.value !== 'all').map(option => (
                                                        <option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">{enquiry.date}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => handleViewDetail(enquiry)}
                                                        className="text-blue-600 hover:text-blue-800"
                                                        title="View Details"
                                                    >
                                                        👁️
                                                    </button>
                                                    <a
                                                        href={`tel:${enquiry.phone}`}
                                                        className="text-green-600 hover:text-green-800"
                                                        title="Call"
                                                    >
                                                        📞
                                                    </a>
                                                    <a
                                                        href={`mailto:${enquiry.email}`}
                                                        className="text-purple-600 hover:text-purple-800"
                                                        title="Email"
                                                    >
                                                        📧
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {showDetailModal && selectedEnquiry && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto m-4">
                                <div className="p-6 border-b flex items-center justify-between">
                                    <h2 className="text-xl font-semibold text-gray-900">Enquiry Details</h2>
                                    <button
                                        onClick={() => setShowDetailModal(false)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        ✕
                                    </button>
                                </div>
                                <div className="p-6 space-y-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">Customer Name</label>
                                            <p className="text-gray-900">{selectedEnquiry.customer}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">Organization</label>
                                            <p className="text-gray-900">{selectedEnquiry.organization}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">Email</label>
                                            <p className="text-gray-900">{selectedEnquiry.email}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">Phone</label>
                                            <p className="text-gray-900">{selectedEnquiry.phone}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">Product</label>
                                            <p className="text-gray-900">{selectedEnquiry.product}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">Quantity</label>
                                            <p className="text-gray-900">{selectedEnquiry.quantity} pieces</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">Status</label>
                                            <p>{getStatusBadge(selectedEnquiry.status)}</p>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-500 mb-1">Date</label>
                                            <p className="text-gray-900">{selectedEnquiry.date}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 mb-2">Update Status</label>
                                        <select
                                            value={selectedEnquiry.status}
                                            onChange={(e) => {
                                                handleStatusChange(selectedEnquiry.id, e.target.value);
                                                setSelectedEnquiry({ ...selectedEnquiry, status: e.target.value });
                                            }}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            {statusOptions.filter(o => o.value !== 'all').map(option => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 mb-2">Admin Notes</label>
                                        <textarea
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Add notes about this enquiry..."
                                        />
                                    </div>
                                </div>
                                <div className="p-6 border-t flex justify-end gap-3">
                                    <button
                                        onClick={() => setShowDetailModal(false)}
                                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        Close
                                    </button>
                                    <button
                                        onClick={() => setShowDetailModal(false)}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default EnquiryManagement;
