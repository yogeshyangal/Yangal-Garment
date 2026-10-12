import React, { useState } from 'react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';

const BlogManagement = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: 'How to Choose the Right T-Shirt Fabric', slug: 'choose-right-tshirt-fabric', category: 'Fabric Guide', author: 'Admin', is_published: true, published_at: '2024-10-15', views: 245 },
        { id: 2, title: 'Cotton vs Polyester T-Shirts', slug: 'cotton-vs-polyester', category: 'Fabric Guide', author: 'Admin', is_published: true, published_at: '2024-10-10', views: 189 },
        { id: 3, title: 'Custom T-Shirt Printing Cost Guide', slug: 'tshirt-printing-cost', category: 'Pricing', author: 'Admin', is_published: false, published_at: null, views: 0 },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);

    const handleEdit = (blog) => {
        setEditingBlog(blog);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this blog post?')) {
            setBlogs(blogs.filter(b => b.id !== id));
        }
    };

    const handleTogglePublish = (id) => {
        setBlogs(blogs.map(b => 
            b.id === id 
                ? { ...b, is_published: !b.is_published, published_at: !b.is_published ? new Date().toISOString().split('T')[0] : null }
                : b
        ));
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <AdminSidebar currentPage="blogs" />
            <div className="ml-64">
                <AdminHeader />
                <main className="pt-20 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Blogs</h1>
                            <p className="text-gray-600">Manage your blog content</p>
                        </div>
                        <button
                            onClick={() => {
                                setEditingBlog(null);
                                setShowModal(true);
                            }}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                        >
                            <span>➕</span>
                            Add Blog Post
                        </button>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr className="text-left text-sm text-gray-500">
                                        <th className="px-6 py-3 font-medium">Title</th>
                                        <th className="px-6 py-3 font-medium">Category</th>
                                        <th className="px-6 py-3 font-medium">Author</th>
                                        <th className="px-6 py-3 font-medium">Status</th>
                                        <th className="px-6 py-3 font-medium">Published</th>
                                        <th className="px-6 py-3 font-medium">Views</th>
                                        <th className="px-6 py-3 font-medium">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {blogs.map((blog) => (
                                        <tr key={blog.id} className="text-sm">
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-gray-900">{blog.title}</div>
                                                <div className="text-gray-500 text-xs">{blog.slug}</div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">{blog.category}</td>
                                            <td className="px-6 py-4 text-gray-600">{blog.author}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                    blog.is_published 
                                                        ? 'bg-green-100 text-green-800' 
                                                        : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                    {blog.is_published ? 'Published' : 'Draft'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">{blog.published_at || '-'}</td>
                                            <td className="px-6 py-4 text-gray-600">{blog.views}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => handleEdit(blog)}
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        ✏️
                                                    </button>
                                                    <button
                                                        onClick={() => handleTogglePublish(blog.id)}
                                                        className="text-green-600 hover:text-green-800"
                                                        title={blog.is_published ? 'Unpublish' : 'Publish'}
                                                    >
                                                        {blog.is_published ? '📤' : '📥'}
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(blog.id)}
                                                        className="text-red-600 hover:text-red-800"
                                                    >
                                                        🗑️
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {showModal && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto m-4">
                                <div className="p-6 border-b">
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        {editingBlog ? 'Edit Blog Post' : 'Add New Blog Post'}
                                    </h2>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Title *
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue={editingBlog?.title}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Enter blog title"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Slug *
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue={editingBlog?.slug}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="blog-post-slug"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Category
                                        </label>
                                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                            <option value="">Select category</option>
                                            <option value="Fabric Guide">Fabric Guide</option>
                                            <option value="Pricing">Pricing</option>
                                            <option value="Ordering Guide">Ordering Guide</option>
                                            <option value="Design Tips">Design Tips</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Content *
                                        </label>
                                        <textarea
                                            rows={10}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="Write your blog content here..."
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Author
                                            </label>
                                            <input
                                                type="text"
                                                defaultValue={editingBlog?.author}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Author name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Featured Image
                                            </label>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                SEO Title
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="SEO title"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Meta Description
                                            </label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Meta description"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <label className="flex items-center gap-2">
                                            <input type="checkbox" defaultChecked={editingBlog?.is_published} />
                                            <span className="text-sm text-gray-700">Publish immediately</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="p-6 border-t flex justify-end gap-3">
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        {editingBlog ? 'Update' : 'Create'}
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

export default BlogManagement;
