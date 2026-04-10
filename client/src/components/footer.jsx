import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    const certificationImages = [
        { src: 'Assests/certifications/gdpr.png', alt: 'GDPR Compliant' },
        { src: 'Assests/certifications/iso logo registered trademark.gif', alt: 'ISO Certified' }
    ];

    return (
        <motion.footer className="w-full pt-16 mt-40 glass border-0 px-4 md:px-16 lg:px-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
                {/* Left Section - Logo */}
                <div className="flex justify-center md:justify-start items-center overflow-hidden">
                    <div className="font-bold text-white" style={{ fontSize: '8rem', lineHeight: '1' }}>
                        FXR
                    </div>
                </div>
                
                {/* Middle Section - Contact Info */}
                <div className="flex flex-col items-center space-y-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
                    <div className="flex items-center gap-2 text-gray-300">
                        <MailIcon className="size-4" />
                        <span>buzz@fixyourhr.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                        <PhoneIcon className="size-4" />
                        <span>+91 9519466034</span>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex items-center gap-4 mt-4">
                        <a href="#" className="hover:-translate-y-0.5 text-gray-300 transition-all duration-300">
                            <InstagramIcon className="size-5" />
                        </a>
                        <a href="#" className="hover:-translate-y-0.5 text-gray-300 transition-all duration-300">
                            <FacebookIcon className="size-5" />
                        </a>
                        <a href="#" className="hover:-translate-y-0.5 text-gray-300 transition-all duration-300">
                            <TwitterIcon className="size-5" />
                        </a>
                        <a href="#" className="hover:-translate-y-0.5 text-gray-300 transition-all duration-300">
                            <LinkedinIcon className="size-5" />
                        </a>
                    </div>
                </div>
                
                {/* Right Section - Certifications */}
                <div className="flex justify-center md:justify-end">
                    <div className="flex flex-col items-center md:items-end">
                        <h3 className="text-lg font-semibold text-white mb-4">Certifications</h3>
                        <div className="flex gap-4">
                            {certificationImages.map((cert, index) => (
                                <img 
                                    key={index}
                                    src={cert.src} 
                                    alt={cert.alt}
                                    className="h-20 w-20 object-contain"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom Section - Copyright and Legal */}
            <hr className="w-full border-white/20" />
            <div className="py-6 text-center">
                <div className="flex flex-wrap justify-center items-center gap-2 text-sm text-gray-300">
                    <span>Copyright © 2025</span>
                    <span className="text-gray-500">|</span>
                    <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
                    <span className="text-gray-500">|</span>
                    <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                    <span className="text-gray-500">|</span>
                    <a href="#cookies" className="hover:text-white transition-colors">Cookies Policy</a>
                </div>
            </div>
        </motion.footer>
    );
};