import SectionTitle from '../components/section-title';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function FaqSection() {
    const [isOpen, setIsOpen] = useState(false);
    const data = [
        {
            question: 'What is FixYourHR?',
            answer: 'FixYourHR Software is a service-based company that helps businesses find the right HR software to fit their needs and budget. We partner with leading HR software providers to offer personalized demo experiences, ensuring you get the best HR tools to streamline your processes and drive success.'
        },
        {
            question: 'How does FixYourHR Software help me choose the right HR software?',
            answer: 'We work closely with you to understand your unique HR needs and business requirements. Based on this, we provide tailored demo setups, showcasing the best HR software options that align with your goals, all while keeping your budget in mind.'
        },
        {
            question: 'Is the demo service really free?',
            answer: 'Yes! Our demo service is completely free. We believe in giving you the opportunity to explore the best options available without any financial commitment. Our goal is to help you make an informed decision without any pressure.'
        },
        {
            question: 'Do you offer support after I choose an HR software?',
            answer: 'Absolutely! We offer ongoing support to ensure your HR software is implemented smoothly and continues to meet your needs. Whether you need assistance with setup, training, or troubleshooting, we’re here to help every step of the way.',
        },
        {
            question: 'How long does it take to find the right HR software for my business?',
            answer: 'The time it takes depends on your specific needs and the complexity of your requirements. Typically, the process can take anywhere from a few days to a couple of weeks. We work efficiently to match you with the best solution as quickly as possible.'
        },
        {
            question: 'Are the HR software solutions within my budget?',
            answer: 'Yes! We understand that cost is a key factor for most businesses. That’s why we ensure the HR software solutions we recommend are not only the best fit for your company’s needs but also come within your specified budget. We help you get the most value for your investment.'
        },
    ];

    const floatingIcons = [
        // Left Side
        { src: 'Assests/icons/GreyTHR.svg', top: '10%', left: '13%', delay: 0, width: 'w-32' },
        { src: 'Assests/icons/ZohoPeople.svg', top: '35%', right: '20%', delay: 2, width: 'w-40' },
        { src: 'Assests/icons/hrone_logo2025.svg', top: '52%', left: '8%', delay: 0.8, width: 'w-40' },
        { src: 'Assests/icons/BayZat.svg', top: '70%', left: '15%', delay: 1.1, width: 'w-40' },
        { src: 'Assests/icons/CrazeLogo.png', top: '87%', left: '10%', delay: 0.4, width: 'w-36' },

        // Right Side
        { src: 'Assests/icons/zimyo_logo.png', top: '15%', right: '13%', delay: 0.5, width: 'w-36' },
        { src: 'Assests/icons/keka-logo-36px.svg', top: '35%', left: '20%', delay: 1.5, width: 'w-36' },
        { src: 'Assests/icons/Darwinbox_2.png', top: '52%', right: '8%', delay: 1.2, width: 'w-40' },
        { src: 'Assests/icons/qandle.svg', top: '70%', right: '15%', delay: 0.3, width: 'w-36' },
        { src: 'Assests/icons/Razorpay.svg', top: '87%', right: '10%', delay: 0.7, width: 'w-20' },
    ];

    return (
        <section className='mt-32 relative text-white'>
            {/* Floating Company Logos for Negative Space */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
                {floatingIcons.map((icon, index) => (
                    <motion.img
                        key={index}
                        src={icon.src}
                        alt="partner logo"
                        className={`absolute object-contain drop-shadow-2xl transition-all duration-300 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] ${icon.width}`}
                        style={{
                            top: icon.top,
                            left: icon.left,
                            right: icon.right,
                        }}
                        initial={{ y: 0, opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        animate={{ y: [0, -35, 0], scale: [1, 1.15, 1] }}
                        transition={{
                            opacity: { duration: 0.8 },
                            y: {
                                duration: 2.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: icon.delay
                            },
                            scale: {
                                duration: 2.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: icon.delay
                            }
                        }}
                        viewport={{ once: true }}
                    />
                ))}
            </div>

            <SectionTitle title="Frequently Asked Questions" description="Looking for answers to your frequently asked questions? Check out our FAQ's section below to find." />
            <div className='relative z-10 mx-auto mt-12 space-y-4 w-full max-w-xl'>
                {data.map((item, index) => (
                    <motion.div key={index} className='flex flex-col glass rounded-md'
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <h3 className='flex cursor-pointer hover:bg-white/10 transition items-start justify-between gap-4 p-4 font-medium' onClick={() => setIsOpen(isOpen === index ? null : index)}>
                            {item.question}
                            <ChevronDownIcon className={`size-5 transition-all shrink-0 duration-400 ${isOpen === index ? 'rotate-180' : ''}`} />
                        </h3>
                        <p className={`px-4 text-sm/6 transition-all duration-400 overflow-hidden ${isOpen === index ? 'pt-2 pb-4 max-h-80' : 'max-h-0'}`}>{item.answer}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}