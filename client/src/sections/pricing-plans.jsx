import SectionTitle from "../components/section-title";
import { CheckIcon, CrownIcon, RocketIcon, ZapIcon, StarIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function PricingPlans() {
    const navigate = useNavigate();
    const ref = useRef([]);
    const data = [
        {
            icon: RocketIcon,
            title: 'Automation',
            description: 'Complete HR management solution',
            price: '₹40',
            logo: 'Assests/icons/ZohoPeople.svg',
            buttonText: 'Request Demo',
            features: [
                'Employee database management',
                'Time & attendance tracking',
                'Leave management system',
                'Performance appraisals',
                'Document management',
                'Mobile app access'
            ],
        },
        {
            icon: ZapIcon,
            title: 'Payroll',
            description: 'Modern HR platform for growing teams',
            price: '₹60',
            logo: 'Assests/icons/keka-logo-36px.svg',
            mostPopular: true,
            topRated: true,
            buttonText: 'Request Demo',
            features: [
                'Payroll automation',
                'Advanced analytics',
                'Employee self-service',
                'Recruitment management',
                'Goal tracking & OKRs',
                'Custom workflows'
            ],
        },
        {
            icon: CrownIcon,
            title: 'Engagement',
            description: 'All-in-one HRMS solution',
            price: '₹80',
            logo: 'Assests/icons/zimyo_logo.png',
            buttonText: 'Request Demo',
            features: [
                'Core HR operations',
                'Payroll & compliance',
                'Performance management',
                'Learning & development',
                'Employee engagement',
                'Multi-location support'
            ],
        },
    ];

    return (
        <section className="mt-32">
            <SectionTitle
                title="HR Software In India"
                description="Explore our latest HR solutions — built to connect businesses with the right HR technology effortlessly."
            />

            <div className='mt-12 flex flex-wrap items-start justify-center gap-6'>
                {data.map((item, index) => (
                    <motion.div key={index} className={`group w-full max-w-80 min-h-[500px] h-auto glass rounded-xl hover:-translate-y-0.5 transition-transform duration-300 relative ${
                        item.title === 'Keka HR' ? 'pt-8 px-6 pb-6' : 'pt-6 px-6 pb-6'
                    }`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ 
                            y: item.title === 'Keka HR' ? 0 : 25, 
                            opacity: 1 
                        }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        ref={(el) => (ref.current[index] = el)}
                        onAnimationComplete={() => {
                            const card = ref.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        {/* Company Logo - Top Left */}
                        <div className="absolute top-4 left-4">
                            <img 
                                src={item.logo} 
                                alt={`${item.title} logo`}
                                className="h-8 w-auto object-contain"
                            />
                        </div>
                        
                        {/* Top Rated Badge for Keka */}
                        {item.topRated && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-200 to-gray-400 text-black text-xs font-semibold px-3 py-2 rounded-full flex flex-col items-center gap-1 shadow-lg z-50">
                                <span>Top Rated</span>
                                <div className="flex gap-0.5">
                                    <StarIcon className="size-3 fill-current" />
                                    <StarIcon className="size-3 fill-current" />
                                    <StarIcon className="size-3 fill-current" />
                                </div>
                            </div>
                        )}
                        
                        <div className="flex items-center w-max ml-auto text-xs gap-2 glass rounded-full px-3 py-1">
                            <item.icon className='size-3.5' />
                            <span className="font-medium">{item.title}</span>
                        </div>
                        <h3 className='mt-4 text-2xl font-semibold'>
                            {item.price} <span className='text-sm font-normal'>/Employee/month</span>
                        </h3>
                        <p className='text-gray-200 mt-3'>{item.description}</p>
                        <button 
                            onClick={() => window.dispatchEvent(new Event('openUserForm'))}
                            className={`mt-7 rounded-md w-full btn bg-orange-500 hover:bg-orange-600 text-white border-none`}
                        >
                            {item.buttonText}
                        </button>
                        <div className='mt-6 flex flex-col'>
                            {item.features.map((feature, index) => (
                                <div key={index} className='flex items-center gap-2 py-2'>
                                    <div className='rounded-full glass border-0 p-1'>
                                        <CheckIcon className='size-3 text-white' strokeWidth={3} />
                                    </div>
                                    <p>{feature}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
            
            {/* Explore All Plans CTA Button */}
            <div className="mt-12 flex justify-center">
                <button 
                    className="bg-white text-gray-800 font-bold px-20 py-5 rounded-lg hover:bg-gray-300 transition-colors duration-300 shadow-lg cursor-pointer mt-8"
                    onClick={() => navigate('/pricing')}
                >
                    Explore All Our Plans
                </button>
            </div>
        </section>
    );
}