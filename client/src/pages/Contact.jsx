import { motion } from "framer-motion";
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon, Users2Icon, ShieldCheckIcon } from "lucide-react";

export default function Contact() {
    return (
        <>
            {/* Background gradients - same as main page */}
            <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
            </div>
            
            <main className='px-4 py-10 md:py-16'>
                <section className="max-w-6xl mx-auto">
                    <motion.div 
                        className="text-center mb-10"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
                            Get In Touch
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto font-light">
                            Have questions about our HR software solutions? We're here to help you find the perfect fit for your business.
                        </p>
                    </motion.div>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
                        
                        {/* Google Map */}
                        <motion.div
                            className="lg:col-span-2 lg:row-span-2 glass p-6 md:p-8 rounded-[2rem] flex flex-col group border border-white/5 hover:border-white/20 transition-colors"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h3 className="text-2xl font-bold text-white mb-6">Our Location</h3>
                            <div className="rounded-2xl overflow-hidden flex-grow h-full min-h-[350px] shadow-lg">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.121092246105!2d72.8327285!3d19.146176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63edb54a969%3A0xb3ca574acfe566a2!2sMumbai%20Coworking%20-%20Best%20Coworking%20Space%20in%20Andheri%20West!5e0!3m2!1sen!2sin!4v1772719913110!5m2!1sen!2sin" 
                                    width="100%" 
                                    height="100%" 
                                    style={{border: 0, minHeight: "350px"}} 
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-2xl h-full w-full opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                        </motion.div>

                        {/* Contact Info - Email */}
                        <motion.div
                            className="glass p-8 rounded-[2rem] flex flex-col justify-center items-center text-center space-y-4 hover:bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all group"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="p-5 rounded-full bg-white/5 group-hover:bg-orange-500/20 group-hover:scale-110 transition-all duration-300 ease-out">
                                <MailIcon className="w-8 h-8 text-orange-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl mb-2">Email Us</h3>
                                <p className="text-gray-300 font-light tracking-wide">buzz@fixyourhr.com</p>
                            </div>
                        </motion.div>

                        {/* Contact Info - Phone */}
                        <motion.div
                            className="glass p-8 rounded-[2rem] flex flex-col justify-center items-center text-center space-y-4 hover:bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all group"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="p-5 rounded-full bg-white/5 group-hover:bg-orange-500/20 group-hover:scale-110 transition-all duration-300 ease-out">
                                <PhoneIcon className="w-8 h-8 text-orange-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-xl mb-2">Call Us</h3>
                                <p className="text-gray-300 font-light tracking-wide">+91 9519466034</p>
                            </div>
                        </motion.div>

                        {/* Office Address */}
                        <motion.div
                            className="glass p-8 rounded-[2rem] flex flex-col group hover:bg-white/5 border border-white/5 hover:border-white/20 transition-colors"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-orange-500/20 transition-colors">
                                    <MapPinIcon className="w-6 h-6 text-orange-400" />
                                </div>
                                <h3 className="text-white font-bold text-xl">Visit Our Office</h3>
                            </div>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                                Mumbai Coworking - Best Coworking Space in Andheri West<br /><br />
                                Andheri West, Mumbai<br />
                                Maharashtra, India
                            </p>
                        </motion.div>

                        {/* Business Hours */}
                        <motion.div
                            className="glass p-8 rounded-[2rem] flex flex-col group hover:bg-white/5 border border-white/5 hover:border-white/20 transition-colors"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-orange-500/20 transition-colors">
                                    <ClockIcon className="w-6 h-6 text-orange-400" />
                                </div>
                                <h3 className="text-white font-bold text-xl">Business Hours</h3>
                            </div>
                            <div className="space-y-4 text-sm md:text-base flex-grow font-light">
                                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                    <span className="text-gray-400">Mon - Fri</span>
                                    <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                    <span className="text-gray-400">Saturday</span>
                                    <span className="text-white font-medium">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400">Sunday</span>
                                    <span className="text-orange-400 font-medium tracking-wider">CLOSED</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Why Choose Us */}
                        <motion.div
                            className="glass p-8 rounded-[2rem] flex flex-col group hover:bg-white/5 border border-white/5 hover:border-white/20 transition-colors lg:col-span-1"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-orange-500/20 transition-colors">
                                    <ShieldCheckIcon className="w-6 h-6 text-orange-400" />
                                </div>
                                <h3 className="text-white font-bold text-xl">Why FixYourHR?</h3>
                            </div>
                            <ul className="space-y-4 text-sm md:text-base text-gray-300 font-light flex-grow">
                                <li className="flex items-center space-x-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                                    <span>Expert recommendations</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                                    <span>Exclusive discounts & deals</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                                    <span>Direct industry connections</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                                    <span>Fast-track response times</span>
                                </li>
                            </ul>
                        </motion.div>

                    </div>
                </section>
            </main>
        </>
    );
}