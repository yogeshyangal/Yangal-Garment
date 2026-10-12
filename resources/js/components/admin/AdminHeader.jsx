import React, { useState } from 'react';

const AdminHeader = ({ onLogout }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm border-b fixed top-0 left-64 right-0 z-10">
            <div className="flex items-center justify-between px-6 py-4">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>
                </div>
                <div className="flex items-center gap-4">
                    <button className="relative p-2 text-gray-500 hover:text-gray-700">
                        <span className="text-2xl">🔔</span>
                        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
                        >
                            <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold">
                                A
                            </div>
                            <span className="text-gray-700 font-medium">Admin</span>
                            <svg
                                className={`w-4 h-4 text-gray-500 transition-transform ${
                                    isDropdownOpen ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2">
                                <a
                                    href="/admin/profile"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Profile
                                </a>
                                <a
                                    href="/admin/settings"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Settings
                                </a>
                                <hr className="my-2" />
                                <button
                                    onClick={onLogout}
                                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
