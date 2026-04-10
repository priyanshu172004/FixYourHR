import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleIcon, UsersIcon, TrendingUpIcon, AwardIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { blogsData } from "../data/blogsData";

export default function About() {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [blogContent, setBlogContent] = useState("");

    const handleBlogClick = async (blog) => {
        setSelectedBlog(blog);
        if (blog.contentFile) {
            setBlogContent("Loading content...");
            try {
                const response = await fetch(blog.contentFile);
                if (response.ok) {
                    const text = await response.text();
                    setBlogContent(text);
                } else {
                    setBlogContent("Error loading blog content.");
                }
            } catch (err) {
                setBlogContent("Error loading blog content.");
            }
        } else {
            setBlogContent(blog.content || "");
        }
    };

    return (
        <>
            {/* Background gradients - same as main page */}
            <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
            </div>
            
            <main className='px-4 py-20'>
                <section className="max-w-6xl mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            About FixYourHR
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
                            We're dedicated to helping businesses find the perfect HR software solution that transforms their workforce management and drives growth.
                        </p>
                    </motion.div>

                    {/* Mission Section */}
                    <motion.div
                        className="glass p-8 md:p-12 rounded-2xl mb-12"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h2>
                        <p className="text-gray-300 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                            At FixYourHR, we believe that every business deserves access to the best HR software solutions without the complexity of endless research and comparison. Our mission is to simplify the HR software selection process, negotiate the best deals for our clients, and provide ongoing support that ensures your success.
                        </p>
                    </motion.div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {[
                            { icon: UsersIcon, number: "500+", label: "Happy Clients" },
                            { icon: AwardIcon, number: "50+", label: "Software Partners" },
                            { icon: TrendingUpIcon, number: "95%", label: "Success Rate" },
                            { icon: CheckCircleIcon, number: "$35k-$60k+", label: "Savings Generated" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="glass p-6 rounded-xl text-center"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                            >
                                <stat.icon className="w-12 h-12 text-white mx-auto mb-4" />
                                <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
                                <p className="text-gray-300">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Values Section */}
                    <motion.div
                        className="mb-16"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Client Success",
                                    description: "Your success is our priority. We're committed to finding solutions that drive real business results."
                                },
                                {
                                    title: "Transparency",
                                    description: "We believe in honest, transparent communication and clear pricing with no hidden fees."
                                },
                                {
                                    title: "Expertise",
                                    description: "Our team brings years of HR technology experience to help you make informed decisions."
                                },
                                {
                                    title: "Innovation",
                                    description: "We stay ahead of industry trends to recommend the most cutting-edge solutions."
                                },
                                {
                                    title: "Partnership",
                                    description: "We build long-term relationships, supporting you beyond the initial software selection."
                                },
                                {
                                    title: "Results-Driven",
                                    description: "Everything we do is focused on delivering measurable outcomes for your business."
                                }
                            ].map((value, index) => (
                                <div key={index} className="glass p-6 rounded-xl">
                                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                                    <p className="text-gray-300">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Team Section */}
                    <motion.div
                        className="glass p-8 md:p-12 rounded-2xl"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose Us</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4">Expert Guidance</h3>
                                <p className="text-gray-300 mb-6">
                                    Our team of HR technology specialists brings years of experience in workforce management software. We understand the unique challenges different industries face and can recommend solutions that address your specific needs.
                                </p>
                                <h3 className="text-xl font-semibold text-white mb-4">Proven Process</h3>
                                <p className="text-gray-300">
                                    We've developed a systematic approach to HR software selection that considers your budget, company size, industry requirements, and growth plans to ensure you get the perfect fit.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-4">Cost Savings</h3>
                                <p className="text-gray-300 mb-6">
                                    Through our extensive network of software partners, we can negotiate exclusive discounts and pricing that you won't find anywhere else, often saving companies 20-40% on their HR software investments.
                                </p>
                                <h3 className="text-xl font-semibold text-white mb-4">Ongoing Support</h3>
                                <p className="text-gray-300">
                                    Our relationship doesn't end when you select software. We provide ongoing support, direct access to vendor executives, and priority issue resolution to ensure your continued success.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Our Team Section */}
                    <motion.div
                        className="mt-16"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
                            <p className="text-gray-300 text-lg">"The Minds behind this mission"</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {/* Shashank Limbachiya */}
                            <motion.div
                                className="glass p-8 rounded-2xl text-center"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                            >
                                <div className="mb-6">
                                    <img 
                                        src="Assests/Team/shashank (1).png"
                                        alt="Shashank Limbachiya"
                                        className="w-48 h-48 rounded-full mx-auto object-cover border-2 border-white/20"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Shashank Limbachiya</h3>
                                <p className="text-white font-bold mb-4">Founder & HR System Analyst</p>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    I'm here to streamline your software selection process, ensuring you find the best fit for your business needs. With my extensive experience and industry knowledge, I guide you through the options, saving you valuable time. Let's find the perfect software solution together.
                                </p>
                            </motion.div>

                            {/* Matrika Singh */}
                            <motion.div
                                className="glass p-8 rounded-2xl text-center"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 1.3 }}
                            >
                                <div className="mb-6">
                                    <img 
                                        src="Assests/Team/Matrika 5.png"
                                        alt="Matrika Singh"
                                        className="w-48 h-48 rounded-full mx-auto object-cover border-2 border-white/20"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Matrika Singh</h3>
                                <p className="text-white font-bold mb-4">Co-Founder & HRMS Specialist</p>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Finding the right software shouldn't be a hassle. I'm here to simplify your search, providing expert advice and personalized recommendations. With a focus on your specific needs, I'll help you navigate the options and make a confident software choice.
                                </p>
                            </motion.div>

                            {/* Jai Yadav */}
                            <motion.div
                                className="glass p-8 rounded-2xl text-center"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 1.4 }}
                            >
                                <div className="mb-6">
                                    <img 
                                        src="Assests/Team/jaipngfinal.png"
                                        alt="Jai Yadav"
                                        className="w-48 h-48 rounded-full mx-auto object-cover border-2 border-white/20 grayscale"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Jai Yadav</h3>
                                <p className="text-white font-bold mb-4">Co-Founder & HRIS Specialist</p>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    As your advisor, I'm dedicated to understanding your needs. We'll find the right software for your business goals, ensuring a seamless selection process. Simplify your software search with expert advice and recommendations. I'll help you confidently find the right solution for your specific needs.
                                </p>
                            </motion.div>

                            {/* Priyanshu Srivastava */}
                            <motion.div
                                className="glass p-8 rounded-2xl text-center"
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 1.5 }}
                            >
                                <div className="mb-6">
                                    <img 
                                        src="Assests/Team/Priyanshu-removebg-preview.png"
                                        alt="Priyanshu Srivastava"
                                        className="w-48 h-48 rounded-full mx-auto object-cover border-2 border-white/20"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Priyanshu Srivastava</h3>
                                <p className="text-white font-bold mb-4">Developer</p>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    As a strategic partner at FixYourHR, I work closely with organizations to streamline their HR processes through modern, scalable HRMS solutions. My focus is on understanding business challenges, aligning the right technology partners, and ensuring seamless implementation that drives efficiency, compliance, and long-term growth.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Discover Our Blogs Section */}
                    <motion.div
                        className="mt-16"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-white mb-4">Discover Our Blogs</h2>
                            <p className="text-gray-300 text-lg">Compare, analyze, and pick the right HR software with confidence.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {blogsData.map((blog, index) => (
                                <motion.div
                                    key={blog.id}
                                    className="glass rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 1.7 + (index * 0.1) }}
                                    onClick={() => handleBlogClick(blog)}
                                >
                                    <img 
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                                    />
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-white mb-3">{blog.title}</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed flex-1">
                                            {blog.brief}
                                        </p>
                                        <div className="mt-4 pt-4 border-t border-white/10 text-orange-500 font-medium text-sm">
                                            Read Article →
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>
            </main>

            {/* Modal for Blog Content */}
            <AnimatePresence>
                {selectedBlog && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedBlog(null)}
                    >
                        <motion.div
                            className="glass border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col text-white"
                            initial={{ y: 50, scale: 0.95, opacity: 0 }}
                            animate={{ y: 0, scale: 1, opacity: 1 }}
                            exit={{ y: 50, scale: 0.95, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                        >
                            {/* Modal Header with Image */}
                            <div className="relative h-64 shrink-0">
                                <img 
                                    src={selectedBlog.image} 
                                    alt={selectedBlog.title} 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <button 
                                    onClick={() => setSelectedBlog(null)}
                                    className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-orange-500 rounded-full transition-colors backdrop-blur-md"
                                >
                                    <XIcon className="w-5 h-5" />
                                </button>
                                <h2 className="absolute bottom-4 left-6 right-6 text-2xl md:text-3xl font-bold">
                                    {selectedBlog.title}
                                </h2>
                            </div>

                            {/* Modal Body */}
                            <div className="flex-1 p-6 md:p-10 scroll-y-auto overflow-y-auto overflow-x-hidden custom-scrollbar">
                                <div className="prose prose-invert max-w-none text-gray-300">
                                    {blogContent.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className="mb-4 leading-relaxed whitespace-pre-wrap">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}