import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CallToAction() {
    const navigate = useNavigate();
    return (
        <motion.div className="flex flex-col max-w-5xl mt-40 px-4 mx-auto items-center justify-center text-center py-16 rounded-xl glass"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        >
            <motion.h2 className="text-2xl md:text-4xl font-medium mt-2"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                Ready to Transform Your HR?
            </motion.h2>
            <motion.p className="mt-4 text-sm/7 max-w-md"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
            >
                FixYourHR bridges the gap between businesses and powerful HR solutions. Discover who we are, what drives us, and how we help companies transform their workforce management.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 mt-8"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <button onClick={() => navigate('/top-features')} className="btn glass transition-none flex items-center gap-2">
                    Know More
                    <ArrowRightIcon className="size-4" />
                </button>
                <button 
                    onClick={() => window.dispatchEvent(new Event('openUserForm'))}
                    className="btn bg-orange-500 hover:bg-orange-600 text-white border-none transition-none flex items-center gap-2"
                >
                    Request Demo
                    <ArrowRightIcon className="size-4" />
                </button>
            </motion.div>
        </motion.div>
    );
};