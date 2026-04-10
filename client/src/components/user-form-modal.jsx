import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon, CheckCircle2 } from 'lucide-react';

const icons = [
    'Assests/icons/Razorpay.svg',
    'Assests/icons/GreyTHR.svg',
    'Assests/icons/BayZat.svg',
    'Assests/icons/keka-logo-36px.svg',
    'Assests/icons/zimyo_logo.png',
    'Assests/icons/CrazeLogo.png',
    'Assests/icons/ZohoPeople.svg',
    'Assests/icons/akrivia-logo.svg', 
];

const features = [
    "Payroll Management",
    "Employee Attendance System",
    "Leave & Time-Off Tracking",
    "Performance Management",
    "Recruitment & Onboarding",
    "Statutory Compliance",
    "Expense & Reimbursement",
    "Employee Self-Service Portal",
    "Shift & Roster Management",
    "Helpdesk & Ticketing"
];

export default function UserFormModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        companySize: '',
        description: ''
    });
    const [loading, setLoading] = useState(false);
    const [statusData, setStatusData] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusData(null);
        
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
            const response = await fetch(`${API_URL}/form/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const data = await response.json();
            
            if (data.success) {
                setStatusData({ type: 'success', message: 'Request sent successfully!' });
                setFormData({ name: '', email: '', phone: '', companySize: '', description: '' });
                setTimeout(() => {
                    onClose();
                    setTimeout(() => setStatusData(null), 300); // clear status after modal closes
                }, 3000);
            } else {
                setStatusData({ type: 'error', message: data.message || 'Failed to submit form' });
            }
        } catch (error) {
            setStatusData({ type: 'error', message: 'Network error. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div 
                        className="relative w-full md:w-[85%] max-h-[90vh] h-auto bg-slate-200 border border-gray-400 rounded-3xl shadow-2xl overflow-hidden glass flex flex-col lg:flex-row text-slate-800"
                        initial={{ scale: 0.95, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.95, y: 20, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button 
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-2 bg-gray-200/80 hover:bg-orange-500 rounded-full transition-colors backdrop-blur-sm text-gray-700 hover:text-white"
                        >
                            <XIcon className="w-5 h-5" />
                        </button>

                        {/* LEFT SECTION: Features & Static Icons */}
                        <div className="relative hidden w-1/2 p-10 bg-gradient-to-br from-slate-300 to-slate-200 border-r border-gray-400 overflow-hidden lg:flex flex-col justify-between">
                            
                            {/* Features Content */}
                            <div className="relative z-10 flex flex-col mb-8">
                                <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-slate-800">
                                    Transform Your HR Today
                                </h2>
                                <p className="text-slate-600 mb-6 max-w-sm">
                                    Get the perfect FixYourHR match with all the professional features your business needs to scale effectively.
                                </p>
                                
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
                                    {features.map((feature, i) => (
                                        <li key={i} className="flex items-start space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                            <span className="text-sm font-medium text-slate-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Static Icons Grid */}
                            <div className="relative z-10 grid grid-cols-4 gap-y-10 gap-x-8 items-center justify-items-center opacity-100 bg-transparent py-4">
                                {icons.map((src, idx) => (
                                    <img
                                        key={idx}
                                        src={src}
                                        alt="Company Icon"
                                        className="w-20 h-14 md:w-28 md:h-16 object-contain hover:scale-110 transition-transform duration-300 drop-shadow-sm"
                                    />
                                ))}
                            </div>

                            {/* FXR Logo Bottom Left */}
                            <div className="mt-8 text-4xl md:text-5xl font-bold tracking-tight text-slate-800">
                                FXR
                            </div>
                        </div>

                        {/* RIGHT SECTION: The Form */}
                        <div className="flex-1 p-8 lg:p-12 overflow-y-auto custom-scrollbar flex flex-col justify-center bg-slate-200">
                            <AnimatePresence mode="wait">
                                {statusData?.type === 'success' ? (
                                    <motion.div 
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="h-full flex flex-col items-center justify-center text-center px-4"
                                    >
                                        <CheckCircle2 className="w-24 h-24 text-green-500 mb-6 drop-shadow-md" />
                                        <h3 className="text-3xl font-extrabold text-slate-800 mb-4">Thank you for your submission!</h3>
                                        <p className="text-lg text-slate-600">Our team will get in touch with you shortly.</p>
                                    </motion.div>
                                ) : (
                                    <motion.div 
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="h-full flex flex-col justify-center"
                                    >
                                        <h3 className="text-2xl font-bold mb-2 text-slate-800">Let's Get Started</h3>
                                        <p className="text-slate-500 text-sm mb-6">
                                            Provide your requirements below and our experts will guide you to the best HR software.
                                        </p>

                                        {statusData && statusData.type === 'error' && (
                                            <div className="p-3 mb-4 rounded-lg text-sm font-medium bg-red-100 text-red-700 border border-red-200">
                                                {statusData.message}
                                            </div>
                                        )}

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                                                    <input 
                                                        type="text" 
                                                        name="name" 
                                                        value={formData.name} 
                                                        onChange={handleChange} 
                                                        placeholder="John Doe"
                                                        required
                                                        className="w-full bg-white border border-slate-400 rounded-lg px-4 py-2.5 text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors backdrop-blur-sm"
                                                    />
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                                                        <input 
                                                            type="email" 
                                                            name="email" 
                                                            value={formData.email} 
                                                            onChange={handleChange} 
                                                            placeholder="john@company.com"
                                                            required
                                                            className="w-full bg-white border border-slate-400 rounded-lg px-4 py-2.5 text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors backdrop-blur-sm"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                                                        <input 
                                                            type="tel" 
                                                            name="phone" 
                                                            value={formData.phone} 
                                                            onChange={handleChange} 
                                                            placeholder="+91 9876543210"
                                                            required
                                                            className="w-full bg-white border border-slate-400 rounded-lg px-4 py-2.5 text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors backdrop-blur-sm"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-slate-700 mb-1">Company Size (Employees)</label>
                                        <select 
                                            name="companySize" 
                                            value={formData.companySize} 
                                            onChange={handleChange} 
                                            required
                                            className="w-full bg-white border border-slate-400 rounded-lg px-4 py-2.5 text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors backdrop-blur-sm [&>option]:bg-white"
                                        >
                                            <option value="" disabled>Select employee count...</option>
                                            <option value="1-50">1 - 50 Employees</option>
                                            <option value="51-200">51 - 200 Employees</option>
                                            <option value="201-500">201 - 500 Employees</option>
                                            <option value="500+">500+ Employees</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-1">Requirements Description</label>
                                        <textarea 
                                            name="description" 
                                            value={formData.description} 
                                            onChange={handleChange} 
                                            placeholder="Tell us a bit about what features you're looking for, or any specific hurdles your HR team faces right now..."
                                            rows={4}
                                            className="w-full bg-white border border-slate-400 rounded-lg px-4 py-2.5 text-slate-800 resize-none focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors backdrop-blur-sm custom-scrollbar"
                                        ></textarea>
                                    </div>
                                </div>

                                        <motion.button
                                            disabled={loading}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            className="w-full py-3.5 mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:shadow-orange-500/30 transition-all border-none disabled:bg-orange-400 disabled:cursor-not-allowed"
                                        >
                                            {loading ? 'Submitting...' : 'Submit Request'}
                                        </motion.button>
                                    </form>
                                </motion.div>
                            )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
