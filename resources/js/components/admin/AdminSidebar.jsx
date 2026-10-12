import React from 'react';

const AdminSidebar = ({ currentPage, setCurrentPage }) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: '📊' },
        { id: 'products', label: 'Products', icon: '👕' },
        { id: 'categories', label: 'Categories', icon: '📁' },
        { id: 'enquiries', label: 'Enquiries', icon: '📨' },
        { id: 'customers', label: 'Customers', icon: '👥' },
        { id: 'blogs', label: 'Blogs', icon: '📝' },
        { id: 'settings', label: 'Settings', icon: '⚙️' },
        { id: 'users', label: 'Users', icon: '👤' },
    ];

    return (
        <aside className="w-64 bg-gray-900 text-white min-h-screen fixed left-0 top-0">
            <div className="p-6 border-b border-gray-700">
                <h1 className="text-xl font-bold">Yangal Garment</h1>
                <p className="text-sm text-gray-400">Admin Panel</p>
            </div>
            <nav className="p-4">
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => setCurrentPage(item.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                    currentPage === item.id
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-300 hover:bg-gray-800'
                                }`}
                            >
                                <span>{item.icon}</span>
                                <span>{item.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
                <a
                    href="/"
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
                >
                    <span>🏠</span>
                    <span>View Website</span>
                </a>
            </div>
        </aside>
    );
};

export default AdminSidebar;
