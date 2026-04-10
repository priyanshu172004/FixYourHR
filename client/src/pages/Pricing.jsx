import React from 'react';
import SectionTitle from "../components/section-title";
import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Pricing() {
    const cardData = [
        {
            title: "Keka",
            logoSrc: "Assests/icons/keka-logo-36px.svg",
            rating: "4.9+",
            reviews: "1200+",
            costing: "₹ 60",
            costingSub: "/Employee/Month",
            suitableFor: "5 to 5000+ Employees",
            description: "KekaHR is currently the leading HR Software company in India. They've been available in the market around 8 years. They provide you with complete HR-related solutions. In Short, it is a one-stop solution for all your HR-related needs. Keka HR is an all-in-one human resource and payroll management platform built for modern organizations. It helps businesses automate tedious HR tasks such as payroll, attendance, leave tracking, and compliance, while also enhancing employee engagement through features like performance management, OKRs, surveys, and seamless communication tools. Keka focuses on simplifying HR processes while delivering a smooth and transparent employee experience.",
            features: [
                "Payroll software",
                "Professional Services Automation",
                "Performance Management",
                "Talent Management",
                "Leave and attendance tracking",
                "Real-Time Insights",
                "Employee Onboarding",
                "Mobile Application and GPS tracking"
            ]
        },
        {
            title: "Zimyo",
            logoSrc: "Assests/icons/zimyo_logo.png",
            rating: "4.1+",
            reviews: "900+",
            costing: "₹ 80",
            costingSub: "/Employee/Month",
            suitableFor: "50 to 5000+ Employees",
            description: "Founded in 2018 in Gurugram, Zimyo is an HR and payroll management platform tailored for modern businesses. It serves over 2,500 organizations and 750,000+ employees across 40+ countries. Backed by investors like BEENEXT, Zimyo has shown rapid growth, crossing $18M in annual revenue in 2023. Its feature set covers payroll, attendance, performance management, recruitment, and employee engagement, supported by a bilingual mobile app. Recognized as a G2 High Performer, it has won multiple SaaS awards for innovation. The platform is known for automating workflows and providing embedded finance and wellness benefits. Clients include Bajaj Capital, Apollo Tyres, and Hillson Shoes, demonstrating strong trust in its service quality.",
            features: [
                "Payroll Automation",
                "Employee Self-Service (ESS) Portal",
                "Performance Management (OKRs & 360° Feedback)",
                "Attendance & Leave Management",
                "Recruitment & Onboarding Module",
                "Engagement Tools (Surveys, Polls, Recognition)",
                "Expense & Travel Management",
                "Analytics & HR Dashboards"
            ]
        },
        {
            title: "Zoho People",
            logoSrc: "Assests/icons/ZohoPeople.svg",
            rating: "4.3+",
            reviews: "1100+",
            costing: "₹ 40",
            costingSub: "/Employee/Month",
            suitableFor: "20 to 4000+ Employees",
            description: "Zoho Corporation, founded in 1996 in Chennai, is one of the world’s largest privately held SaaS companies, with over 100 million users globally. Zoho People is its HRMS solution, offering payroll, attendance, leave management, and performance tracking. The parent company generates over $1 billion in annual revenue, all without external funding, making it a rare bootstrapped giant. Zoho People is widely adopted by SMEs and enterprises for its integration with the broader Zoho suite. Its service quality is praised for ease of use, scalability, and affordability. Trusted by 700,000+ businesses in 150+ countries, Zoho People continues to expand globally. Its strong focus on privacy and sustainable growth gives it an edge in the HR software market.",
            features: [
                "Recruitment and Onboarding",
                "Employee Database Management",
                "Time off Tracking and Calculations",
                "Employee Onboarding",
                "Expense Management",
                "HR analytics"
            ]
        },
        {
            title: "Craze",
            logoSrc: "Assests/icons/CrazeLogo.png",
            rating: "4.2+",
            reviews: "600+",
            costing: "₹ 40",
            costingSub: "/Employee/Month",
            suitableFor: "50 to 2000+ Employees",
            description: "Craze is a new-age HR software platform that integrates HR, payroll, IT, and finance operations into a single solution for startups and SMEs. The software is praised for its modern UI, unlimited storage, and fast onboarding, making it attractive for small businesses seeking simplicity. Pricing starts from as low as ₹40 per user per month, keeping it accessible for growing startups. While customer numbers and revenue aren’t widely disclosed, it is positioned as a challenger to traditional HRMS tools. Craze emphasizes automation and real-time sync, helping companies streamline employee lifecycle management. Its service quality is well-received among emerging businesses looking for flexible HR solutions. With continuous product innovation, it is gaining traction in the Indian HR software ecosystem.",
            features: [
                "End-to-end Automation",
                "Employee Self-Service Dashboard",
                "Real-time Syncing",
                "Employee Onboarding",
                "Payroll Processing",
                "comprehensive Complaince & Reporting",
                "Document & Template Management"
            ]
        },
        {
            title: "Greyt HR",
            logoSrc: "Assests/icons/GreyTHR.svg",
            rating: "4.8+",
            reviews: "1450+",
            costing: "₹ 30",
            costingSub: "/Employee/Month",
            suitableFor: "1 to 5000+ Employees",
            description: "GreytHR, developed by Greytip Software (founded in 1994 in Bengaluru), is one of India’s oldest HR automation pioneers. Launched as a cloud platform in 2011, greytHR today serves 30,000+ businesses and handles payroll for over 3M employees monthly across 25+ countries. In 2022, it generated over $20M in annual revenue and is valued at around $140M after raising multiple rounds of funding. Its services include payroll, leave, attendance, statutory compliance, and employee self-service. The platform is trusted for its reliability and scalability, especially among SMEs. With over 966 employees driving operations, greytHR has become a staple HR solution across India and the Middle East. Its customer loyalty is backed by consistent service quality and compliance readiness.",
            features: [
                "HR Software",
                "Payroll Software",
                "Leave Management",
                "Attendance Management",
                "Employee Self Service",
                "Performance Management System",
                "Mobile App"
            ]
        },
        {
            title: "Pocket HRMS",
            logoSrc: "Assests/icons/WocoLogo.png",
            rating: "4.3+",
            reviews: "1000+",
            costing: "₹ 40",
            costingSub: "/Employee/Month",
            suitableFor: "20 to 2000+ Employees",
            description: "Pocket HRMS, based in India, is a cloud-based HR and payroll management system designed for SMEs. It provides payroll automation, compliance management, leave and attendance, and employee self-service features. The platform positions itself as a modular HRMS, allowing businesses to scale features as they grow. While exact revenue and valuation figures are not public, it has steadily gained a user base in the SME segment. Service quality is considered reliable, particularly for organizations prioritizing compliance with Indian labor laws. Pocket HRMS also supports integrations with biometric devices and accounting tools. With its affordable pricing and modularity, it remains a popular choice for mid-sized companies.",
            features: [
                "Attendance Management",
                "Recruitment Management",
                "Employee Productivity",
                "Mobile Payroll App",
                "Performance Management",
                "Talent Management",
                "Real-Time Insights",
                "HR MIS Reports"
            ]
        },
        {
            title: "Darwin Box",
            logoSrc: "Assests/icons/Darwinbox_2.png",
            rating: "4.5+",
            reviews: "1100+",
            costing: "₹ 100",
            costingSub: "/Employee/Month",
            suitableFor: "30 to 6000+ Employees",
            description: "Founded in Hyderabad in 2015, Darwinbox is a leading enterprise-focused HR platform powered by AI. It raised over $140M in funding from global investors like KKR, Microsoft, Salesforce Ventures, and Lightspeed. In 2022, it became a unicorn with a $1B+ valuation, and continues to expand aggressively in global markets. Darwinbox serves over 750 enterprises including giants like Nivea, Dominos, Adani, and Tokopedia. Its suite covers core HR, payroll, performance, recruitment, and advanced AI-driven analytics. Known for rapid product innovation, Darwinbox tripled its business in North America in recent years. Its service quality is considered enterprise-grade, catering to large organizations with complex HR needs. Positioned as a challenger to SAP SuccessFactors and Workday, it is redefining enterprise HCM in Asia.",
            features: [
                "Employee Engagement",
                "Recruitment",
                "Rewards & Recognition",
                "Travel & Expense",
                "Employee Onboarding",
                "Payroll Software",
                "Compensation Planning",
                "Employee Helpdesk",
                "People Analytics"
            ]
        },
        {
            title: "Qandle",
            logoSrc: "Assests/icons/qandle.svg",
            rating: "4.7+",
            reviews: "1350+",
            costing: "₹ 50",
            costingSub: "/Employee/Month",
            suitableFor: "10 to 4000+ Employees",
            description: "Qandle, founded in 2017, is a flexible HRMS solution designed for growing businesses in India. The platform provides payroll, attendance, leave management, performance reviews, and recruitment tools under one roof. It has steadily gained SME adoption due to its customizable workflows and affordability. While customer numbers and market cap are not widely disclosed, Qandle is estimated to serve hundreds of mid-sized companies. Its mobile-first approach ensures HR teams and employees can access services on the go. Service quality is appreciated for ease of configuration and adaptability to business-specific needs. Positioned as an SME-friendly solution, Qandle continues to build its brand in the competitive HR tech landscape.",
            features: [
                "Hire & Onboard",
                "Track Time and Holidays",
                "Employee Records, Profiles, Assets",
                "Employee Exits and Clearance Process",
                "Regular Feedback and Training"
            ]
        },
        {
            title: "Akrivia HCM",
            logoSrc: "Assests/icons/akrivia-logo.svg",
            rating: "4.1+",
            reviews: "980+",
            costing: "₹ 0",
            costingSub: "/Employee/Month",
            suitableFor: "50 to 5000+ Employees",
            description: "Akrivia HCM, headquartered in India, is an end-to-end Human Capital Management platform serving enterprises. Its services include recruitment, onboarding, payroll, performance, learning, and employee engagement, with a focus on cloud scalability and data-driven analytics. The company positions itself as a global-ready HR solution built to compete with larger enterprise systems. While detailed revenue and valuation data are not public, Akrivia has been steadily expanding its enterprise client base. Its service quality is highlighted by modern user interfaces and AI-driven HR insights. Akrivia HCM is gaining recognition as a trusted HR solution among fast-scaling enterprises. With India’s HR tech sector booming, Akrivia is positioned to be a significant player in the coming years.",
            features: [
                "Employee Management",
                "Leave, Time Attendance",
                "Performance management",
                "Expense management",
                "Rewards Recognition",
                "Payroll Management",
                "Attract, Assess, Interview, and Onboard",
                "Measure, Drive Employee",
                "Learning Development"
            ]
        },
        {
            title: "Razorpay",
            logoSrc: "Assests/icons/Razorpay.svg",
            rating: "4.8+",
            reviews: "1200+",
            costing: "₹ 100",
            costingSub: "/Employee/Month",
            suitableFor: "5 to 10000+ Employees",
            description: "RazorpayX Payroll is Razorpay’s HR and payroll management solution designed to simplify employee lifecycle management from onboarding to exit. It offers automated payroll processing, leave and attendance tracking, reimbursements, and compliance with PF, TDS, ESIC, and PT. The software includes employee self-service, payslip access via WhatsApp, and Slack integration for smoother communication. It integrates with 25+ HRMS tools like Keka and Darwinbox through its Universal HRMS feature. Currently, RazorpayX Payroll serves over 13,000 businesses ranging from startups to enterprises with 20,000+ employees. The platform helps companies reduce payroll management costs by up to 60% while ensuring 100% compliance accuracy.",
            features: [
                "Automated Payroll Processing",
                "Compliance Management",
                "Attendance & Leave Tracking",
                "Integration with HRMS Tools",
                "Employee Self-Service Portal",
                "Onboarding & Exit Management",
                "Payout Automation",
                "Reporting & Analytics"
            ]
        },
        {
            title: "HRone",
            logoSrc: "Assests/icons/hrone_logo2025.svg",
            rating: "4.9+",
            reviews: "1450+",
            costing: "₹ 99",
            costingSub: "/Employee/Month",
            suitableFor: "20 to 10000+ Employees",
            description: "HROne HRMS is a comprehensive human resource management solution designed to streamline and automate the entire employee lifecycle—from recruitment to retirement. It offers end-to-end HR functionalities including payroll management, attendance and leave tracking, performance management, and employee engagement tools. The platform ensures full compliance with statutory regulations such as PF, ESI, TDS, and labor laws. HR One also provides a robust employee self-service portal, mobile app access, and real-time analytics dashboards to improve HR decision-making. With its user-friendly interface and customizable modules, HR One HRMS caters to businesses of all sizes, helping them enhance productivity, reduce manual effort, and maintain operational efficiency.",
            features: [
                "Automated Payroll Management",
                "Statutory Compliance Handling",
                "Attendance & Leave Management",
                "Recruitment & Onboarding",
                "Performance Management System",
                "Employee Self-Service Portal",
                "Mobile App Accessibility",
                "Reports & Real-Time Analytics"
            ]
        }
    ];

    const logos = [
        'Assests/icons/ZohoPeople.svg',
        'Assests/icons/zimyo_logo.png',
        'Assests/icons/keka-logo-36px.svg',
        'Assests/icons/GreyTHR.svg',
        'Assests/icons/Razorpay.svg',
        'Assests/icons/CrazeLogo.png',
        'Assests/icons/akrivia-logo.svg',
        'Assests/icons/qandle.svg',
        'Assests/icons/BayZat.svg',
        'Assests/icons/WocoLogo.png',
        'Assests/icons/Darwinbox_2.png',
    ];

    return (
        <>
            {/* Background gradients - same as main page */}
            <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
            </div>

            <main className="px-4 py-32">
                <SectionTitle
                    title="HR Softwares In India"
                />
                
                <motion.p 
                    className="max-w-4xl mx-auto mt-8 text-center text-sm/7 text-white/80 leading-relaxed"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    India's HR software landscape is rich with solutions aimed at simplifying and automating key human resource tasks. From managing employee data and processing payroll to tracking performance, these platforms offer comprehensive tools that enhance efficiency and streamline HR operations. As more businesses focus on optimizing workforce management, the demand for smart, innovative HR software continues to grow across the country.
                </motion.p>

                <motion.section className="mt-20"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
                >
                    <p className="py-6 text-center text-2xl font-semibold">Explore the best in HR tech</p>
        
                    <div className="flex flex-col items-center gap-[50px] max-w-5xl w-full mx-auto py-4">
                        <div className="flex flex-wrap justify-center gap-[50px] w-full">
                            {logos.slice(0, 6).map((logo, index) => (
                                <motion.img 
                                    key={index} 
                                    src={logo} 
                                    alt="hr tech logo" 
                                    className="h-[35px] w-auto object-contain"
                                    animate={{ y: [0, -10, 0, 10, 0] }}
                                    transition={{
                                        duration: 3 + (index % 3),
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.3
                                    }}
                                />
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-center gap-[50px] w-full">
                            {logos.slice(6).map((logo, index) => (
                                <motion.img 
                                    key={index + 6} 
                                    src={logo} 
                                    alt="hr tech logo" 
                                    className="h-[35px] w-auto object-contain"
                                    animate={{ y: [0, 10, 0, -10, 0] }}
                                    transition={{
                                        duration: 3 + (index % 2),
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: (index + 6) * 0.4
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.section>

            <div className="mt-20 w-[80%] max-w-none mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cardData.map((item, index) => (
                    <motion.div 
                        key={index} 
                        className="glass rounded-[2rem] p-6 lg:p-8 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 relative"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index % 3) * 0.1, type: "spring", stiffness: 300, damping: 30 }}
                    >
                        {/* Top Profile Section */}
                        <div className="flex flex-wrap sm:flex-nowrap justify-between gap-6 mb-8 border-b border-white/10 pb-6">
                            <div className="flex flex-col items-start gap-2">
                                <div className="w-[120px] h-[60px] flex items-start justify-start flex-shrink-0">
                                    <img src={item.logoSrc} alt={`${item.title} logo`} className="w-full h-full object-contain object-left" />
                                </div>
                                <div className="mt-1">
                                    <div className="flex items-center text-yellow-400 text-sm gap-0.5">
                                        <StarIcon className="size-4 fill-current" />
                                        <StarIcon className="size-4 fill-current" />
                                        <StarIcon className="size-4 fill-current" />
                                        <StarIcon className="size-4 fill-current" />
                                        <StarIcon className="size-4 fill-current" />
                                        <span className="text-white/80 ml-1 font-medium">| {item.rating}</span>
                                    </div>
                                    <div className="text-xs text-white/60 mt-1">
                                        Based On {item.reviews} Ratings
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row sm:flex-col gap-4 sm:gap-2 sm:text-right text-left w-full sm:w-auto mt-2">
                                <div>
                                    <div className="font-semibold text-lg leading-tight">Costing:</div>
                                    <div className="font-extrabold text-xl text-yellow-400">{item.costing} <span className="text-xs font-medium text-white/70">{item.costingSub}</span></div>
                                </div>
                                <div>
                                    <div className="font-semibold text-base leading-tight">Suitable for:</div>
                                    <div className="text-sm text-white/80">{item.suitableFor}</div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-6 flex-grow">
                            <h3 className="text-xl font-semibold mb-3">Description</h3>
                            <p className="text-sm text-white/70 leading-relaxed font-light text-justify">
                                {item.description}
                            </p>
                        </div>

                        {/* Features */}
                        <div className="mb-10">
                            <h3 className="text-xl font-semibold mb-4">Features:</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm text-white/80 list-disc list-inside">
                                {item.features.map((feature, i) => (
                                    <li key={i} className="whitespace-nowrap overflow-hidden text-ellipsis" title={feature}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap items-center justify-center mt-auto px-2">
                            <button 
                                onClick={() => window.dispatchEvent(new Event('openUserForm'))}
                                className="w-full bg-orange-500 hover:bg-orange-600 active:scale-95 text-white px-8 py-3.5 rounded-xl transition text-sm font-bold shadow-lg border-none shadow-orange-500/20"
                            >
                                Request Demo
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
            </main>
        </>
    );
}
