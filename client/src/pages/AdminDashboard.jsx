import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, Trash2, Mail, Phone, Users, ShieldAlert, Loader2, UserPlus } from "lucide-react";

export default function AdminDashboard() {
    const [forms, setForms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // New Admin State
    const [showCreateAdmin, setShowCreateAdmin] = useState(false);
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [adminMsg, setAdminMsg] = useState({ type: "", text: "" });

    useEffect(() => {
        const token = localStorage.getItem("adminToken");
        if (!token) {
            navigate("/admin-secret-Shashank-FixYourHR");
            return;
        }
        fetchForms(token);

        // Auto logout session timeout for 30 minutes (30 * 60 * 1000 ms)
        const timeoutId = setTimeout(() => {
            alert("Session expired due to inactivity. Please log in again.");
            localStorage.removeItem("adminToken");
            navigate("/admin-secret-Shashank-FixYourHR");
        }, 1800000);

        return () => clearTimeout(timeoutId);
    }, [navigate]);

    // When deploying separately, VITE_API_URL must point to your absolute backend URL.
    // e.g., VITE_API_URL=https://fixyourhr-backend.vercel.app/api
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

    const fetchForms = async (token) => {
        try {
            const res = await fetch(`${API_URL}/admin/forms`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await res.json();
            if (data.success) {
                setForms(data.data);
            } else {
                localStorage.removeItem("adminToken");
                navigate("/admin-secret-Shashank-FixYourHR");
            }
        } catch (err) {
            setError("Failed to fetch data.");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this submission?")) return;
        
        const token = localStorage.getItem("adminToken");
        try {
            const res = await fetch(`${API_URL}/admin/forms/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await res.json();
            if (data.success) {
                setForms(forms.filter(f => f.id !== id));
            } else {
                alert("Failed to delete");
            }
        } catch (err) {
            alert("Network error deleting submission");
        }
    };

    const handleCreateAdmin = async (e) => {
        e.preventDefault();
        setAdminMsg({ type: "", text: "" });
        try {
            const token = localStorage.getItem("adminToken");
            const res = await fetch(`${API_URL}/admin/create-admin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ username: newUsername, password: newPassword })
            });
            const data = await res.json();
            if (data.success) {
                setAdminMsg({ type: "success", text: "New admin created successfully!" });
                setNewUsername("");
                setNewPassword("");
                setTimeout(() => setShowCreateAdmin(false), 2000);
            } else {
                setAdminMsg({ type: "error", text: data.message || "Failed to create admin" });
            }
        } catch (err) {
            setAdminMsg({ type: "error", text: "Network error" });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        navigate("/admin-secret-Shashank-FixYourHR");
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <Loader2 className="w-10 h-10 animate-spin text-orange-500" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Navbar */}
            <nav className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center space-x-2">
                    <ShieldAlert className="text-orange-500 w-8 h-8" />
                    <h1 className="text-2xl font-bold text-slate-800">Welcome Admin Shashank !!!</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <button 
                        onClick={() => setShowCreateAdmin(!showCreateAdmin)}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium border border-blue-200"
                    >
                        <UserPlus className="w-5 h-5" />
                        <span className="hidden sm:inline">Add Admin</span>
                    </button>
                    <button 
                        onClick={handleLogout}
                        className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium"
                    >
                        <LogOut className="w-5 h-5" />
                        <span>Logout</span>
                    </button>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Create Admin Dropdown Panel */}
                <AnimatePresence>
                    {showCreateAdmin && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-white border text-left border-slate-200 shadow-sm rounded-2xl p-6 mb-8 overflow-hidden"
                        >
                            <h3 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-3 mb-4">Create New Admin</h3>
                            
                            {adminMsg.text && (
                                <div className={`p-3 mb-4 rounded-lg text-sm font-medium ${adminMsg.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                                    {adminMsg.text}
                                </div>
                            )}

                            <form onSubmit={handleCreateAdmin} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">New Username</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={newUsername}
                                        onChange={(e) => setNewUsername(e.target.value)}
                                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                        placeholder="newAdmin@FXR"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
                                    <div className="flex space-x-3">
                                        <input 
                                            type="password" 
                                            required
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                                            placeholder="••••••••"
                                        />
                                        <button 
                                            type="submit"
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg whitespace-nowrap transition-colors"
                                        >
                                            Create User
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-800">Lead Submissions</h2>
                    <p className="text-slate-500 mt-1">Review and manage demo requests from users.</p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6">
                        {error}
                    </div>
                )}

                {/* Dashboard Cards Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence>
                        {forms.map(form => (
                            <motion.div 
                                key={form.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow relative group"
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-xl font-bold text-slate-800">{form.name}</h3>
                                        <button 
                                            onClick={() => handleDelete(form.id)}
                                            className="text-slate-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                            title="Delete Lead"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                    
                                    <div className="space-y-3 mt-4">
                                        <div className="flex items-center text-slate-600">
                                            <Mail className="w-4 h-4 mr-3 text-orange-500" />
                                            <a href={`mailto:${form.email}`} className="text-sm hover:underline">{form.email}</a>
                                        </div>
                                        <div className="flex items-center text-slate-600">
                                            <Phone className="w-4 h-4 mr-3 text-orange-500" />
                                            <a href={`tel:${form.phone}`} className="text-sm hover:underline">{form.phone}</a>
                                        </div>
                                        <div className="flex items-center text-slate-600">
                                            <Users className="w-4 h-4 mr-3 text-orange-500" />
                                            <span className="text-sm border border-slate-200 bg-slate-50 px-2 py-0.5 rounded-full">{form.companySize} employees</span>
                                        </div>
                                    </div>

                                    {form.description && (
                                        <div className="mt-5 pt-4 border-t border-slate-100">
                                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Requirements</p>
                                            <p className="text-sm text-slate-700 italic">"{form.description}"</p>
                                        </div>
                                    )}
                                </div>
                                <div className="bg-slate-50 px-6 py-3 border-t border-slate-100">
                                    <p className="text-xs text-slate-400">
                                        Submitted: {new Date(form.createdAt).toLocaleString()}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {forms.length === 0 && !loading && !error && (
                    <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 border-dashed">
                        <ShieldAlert className="mx-auto h-12 w-12 text-slate-300" />
                        <h3 className="mt-2 text-sm font-semibold text-slate-900">No submissions</h3>
                        <p className="mt-1 text-sm text-slate-500">You haven't received any demo requests yet.</p>
                    </div>
                )}
            </main>
        </div>
    );
}