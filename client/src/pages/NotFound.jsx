import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <>
            {/* Background gradients - same as main page */}
            <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px] opacity-40" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px] opacity-40" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px] opacity-40" />
            </div>

            <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 relative z-10">
                <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    className="text-center max-w-lg"
                >
                    <h1 className="text-6xl font-bold mb-4 tracking-tight">404</h1>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
                        OOPs Page Not FOund
                    </h2>
                    
                    <Link 
                        to="/"
                        className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors"
                    >
                        <Home className="w-5 h-5" />
                        <span>Back to Home</span>
                    </Link>
                </motion.div>
            </div>
        </>
    );
}
