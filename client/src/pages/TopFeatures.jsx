import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
import { 
    SearchIcon, PhoneCallIcon, ArrowRightIcon, BarChartIcon, 
    UsersIcon, MessageSquareIcon, BanknoteIcon, CheckCircleIcon, 
    ShieldCheckIcon, FileTextIcon, HeartHandshakeIcon, DatabaseIcon, 
    MonitorIcon, CalendarIcon, NetworkIcon, UserPlusIcon, 
    CreditCardIcon, TrendingUpIcon, BriefcaseIcon, CoinsIcon, 
    MaximizeIcon, UserMinusIcon, ScaleIcon, ClockIcon, CalendarCheckIcon 
} from "lucide-react";

export default function TopFeatures() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const featuresData = [
        {
            title: "Analytics and Reporting",
            icon: BarChartIcon,
            description: "HRMS software offers analytics tools that generate reports on HR metrics such as employee performance, payroll, and turnover. HR professionals can leverage these insights to make data-driven decisions and optimize HR strategies."
        },
        {
            title: "Applicant Tracking System",
            icon: UsersIcon,
            description: "The main HR software features include a tracking system referred to as ATS, which can simplify the recruitment process, manage job applications, track candidate progress, and the organizing of resumes used in recruiting. This feature within this human resource management software allows for easy identification of qualified candidates and can save time in hiring. The ATS is important for meeting HR system requirements by ensuring a non-disruptive yet efficient recruitment workflow."
        },
        {
            title: "Communication and Basic Employee Services",
            icon: MessageSquareIcon,
            description: "One of the functions of an HR Department is to enable and ensure a regular channel of communication between the organization and the employees. Employees need to be made aware of various policies like the Leave Policy, Attendance Policy, Travel Policy, Dress Code, etc. Then there could be various rules and regulations which an employee would need to follow in the organization. All of this will be usually available in the company's HRMS software. Any changes to these policies or significant events and other information that would affect the employees would also need to be communicated. The HR Department needs to ensure that all these happen."
        },
        {
            title: "Compensation Management",
            icon: BanknoteIcon,
            description: "Stay on top of changing labor laws and industry regulations with automated compliance management. HR software generates reports and sends alerts for regulatory updates, helping the HR department avoid compliance risks."
        },
        {
            title: "Confirmation",
            icon: CheckCircleIcon,
            description: "After an employee joins, normally, he goes through what is referred to as a Probation Period of 1-6 months. In this period, the organization and the employee review each other and decide on whether each of them would like to continue the association with the other. At the end of the Probation period, the employee would normally go through a confirmation process."
        },
        {
            title: "Data Encryption and Security",
            icon: ShieldCheckIcon,
            description: "Ensure the security of sensitive HR data with encryption and security protocols. HRMS software should comply with data protection regulations such as the GDPR, safeguarding employee privacy and preventing data breaches."
        },
        {
            title: "Document Management",
            icon: FileTextIcon,
            description: "Store and organize HR documents securely within the HRMS platform. This feature allows HR departments to manage important documents such as contracts, policies, and compliance forms, ensuring easy access and data protection."
        },
        {
            title: "Employee Engagement",
            icon: HeartHandshakeIcon,
            description: "HR Departments are steadily undergoing a change from being a very transaction-oriented function to a more strategic one. One of the keys to the success of an organization is to have employees whose requirements and goals are aligned to those of the organization. HR Departments play a vital role in building this alignment."
        },
        {
            title: "Employee Information Management",
            icon: DatabaseIcon,
            description: "One of the important activities done by the HR department is maintaining accurate information about the employees. Some of the critical pieces of data that need to be maintained include: - Name, Gender, Date of Birth, Joining Date, Contact Information, Telephone numbers, email-ids, etc - Previous employment information - Information regarding Department, Location, Grade, Reporting Manager, etc., of the current company - Payment & Statutory information like PF number, ESI number, Income Tax PAN, etc."
        },
        {
            title: "Employee Portal",
            icon: MonitorIcon,
            description: "An intuitive employee self-service portal allows staff to view pay slips, update personal information, and access company policies. This improves employee engagement and reduces administrative workload for HR professionals."
        },
        {
            title: "Leave Policy and Transaction Management",
            icon: CalendarIcon,
            description: "One of the jobs of the HR Department is to formulate or manage the Leave Policy of the organization. Apart from creating the HR policy, the HR Department is also responsible for maintaining all transactions that happen. An HRMS can simplify this Herculean task. It is a statutory (legal) requirement to give Leave to employees in an organization."
        },
        {
            title: "Manpower Planning",
            icon: NetworkIcon,
            description: "Human Resource planning mainly emphasizes the estimation of resource required in order to achieve the desired business results. HR plans can be either short term/immediate or long term/strategic. A good HRMS can certainly enable the HR team to execute these plans swiftly and effectively."
        },
        {
            title: "Onboarding",
            icon: UserPlusIcon,
            description: "Onboarding is also another one of the key HR software features, helping new hires to smoothly transition into the company. It automates the collection of onboarding documents and training, providing an easy way for recruits to settle down and get to know the people and policies of the company better. An effective onboarding process is one of the powerful features of a human resource information system, where increased retention and satisfaction among the workforce are guaranteed as it formally indoctrinates them into the company culture and expectations of the company."
        },
        {
            title: "Payroll Management",
            icon: CreditCardIcon,
            description: "Payroll management is one of the key HR software features. It helps in automating salary calculations and performing automatic tax deductions. This feature will reduce errors and save time, which is an indispensable part of HR management. The payroll feature fulfills the requirements of an HR system in maintaining employee satisfaction, and ensuring compliance with payroll regulations."
        },
        {
            title: "Performance Management",
            icon: TrendingUpIcon,
            description: "Performance management systems in HR software allow for goal setting, evaluations, and feedback. It comes in handy in tracking the performance of your workforce and finding out how to improve. HR tools that have integrated this feature into their HR management software, will be able to foster a growth culture that aligns individual performance with the goals of the company."
        },
        {
            title: "Recruitment",
            icon: BriefcaseIcon,
            description: "Recruiting employees with the right mix of skills and competencies at the right time is a critical task. It includes filling positions through initiatives like promotions, internal job posting and employee referrals."
        },
        {
            title: "Salary Changes and Increment Calculations",
            icon: CoinsIcon,
            description: "HR Departments are involved in fixing or revising the salary of employees in consultation with the Business Heads. A typical salary revision is accompanied by a Salary Revision letter. This information is also passed on to the Payroll team who will include it in the next payroll. Also, employees can view the changes in the company's HRMS software."
        },
        {
            title: "Scalability",
            icon: MaximizeIcon,
            description: "HRMS software should be scalable to accommodate your organization’s growth. As the number of employees increases and HR functions evolve, the platform will need to adapt, offering additional features and supporting more complex HR processes."
        },
        {
            title: "Separation Process",
            icon: UserMinusIcon,
            description: "When an employee submits his/her resignation or simply quits the job, it's usually called a resignation. The HR Department is responsible for ensuring that all the work involved in this process happens. The work involved would be to do an exit interview, ensure that all clearance certificates are issued, handover is done and complete information is passed on to Payroll."
        },
        {
            title: "Statutory Compliance",
            icon: ScaleIcon,
            description: "Another critical function of the HR Department is to ensure that the organization is compliant (adheres) with all the relevant laws of the region (State/Country). They need to ensure that they are aware of these laws and take up all activities that are needed to ensure that this is fulfilled."
        },
        {
            title: "Tracking Time and Attendance",
            icon: ClockIcon,
            description: "On a daily basis, tracking the amount of time worked by an employee, the time when he comes in, the time when he exits, etc., is now drawing a lot of attention of organizations and consequently of HR departments. Apart from using this information for Payroll processing, organizations would also need to generate a number of statutory reports based on the attendance data."
        },
        {
            title: "Attendance & Leave Management",
            icon: CalendarCheckIcon,
            description: "The attendance and leave management feature allows organizations to track employee working hours, shift schedules, and leave requests in a seamless manner. Employees can easily clock in and out using web or biometric systems, while managers gain real-time visibility into team availability."
        }
    ];

    const filteredFeatures = featuresData.filter(feature =>
        feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feature.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            {/* Background gradients aligned with Home theme */}
            <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
            </div>

            <main className="px-4 py-32">
                <SectionTitle title="Top HR Software Features offered in India" />

                <motion.p 
                    className="max-w-4xl mx-auto mt-8 text-center text-sm/7 md:text-base/8 text-white/80 font-light"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    India's HR software landscape is rich with solutions aimed at simplifying and automating key human resource tasks. From managing employee data and processing payroll to tracking performance, these platforms offer comprehensive tools that enhance efficiency and streamline HR operations. As more businesses focus on optimizing workforce management, the demand for smart, innovative HR software continues to grow across the country.
                </motion.p>

                {/* Enhanced Search Header */}
                <motion.div 
                    className="max-w-3xl mx-auto mt-16 text-center relative z-10"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">Which HRMS Feature are you Looking for?</h3>
                    <div className="relative max-w-xl mx-auto group">
                        <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full scale-105 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <input 
                            type="text" 
                            placeholder="Search features..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full relative bg-black/40 border border-white/20 rounded-full py-5 pl-14 pr-6 text-white placeholder:text-white/40 focus:outline-none focus:border-yellow-500/50 backdrop-blur-xl transition-all shadow-2xl"
                        />
                        <SearchIcon className="absolute left-5 top-1/2 transform -translate-y-1/2 text-yellow-400 w-6 h-6" />
                    </div>
                </motion.div>

                {/* Bento Features Grid */}
                <div className="mt-20 max-w-[1400px] w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
                    {filteredFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        // Bento layout pattern: Every 4th item spans 2 columns
                        const spanClass = (index % 4 === 0 || index % 4 === 3) ? 'md:col-span-2 lg:col-span-2' : 'md:col-span-1 lg:col-span-1';
                        
                        return (
                            <React.Fragment key={`feature-block-${feature.title}`}>
                                {/* The "Confused" Banner is injected covering the full row after the first grid block */}
                                {index === 4 && (!searchQuery || filteredFeatures.length > 4) && (
                                    <motion.div 
                                        className="col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-r from-yellow-500/20 via-orange-500/10 to-yellow-500/20 glass rounded-[2.5rem] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 my-4 border border-yellow-500/30 overflow-hidden relative"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="absolute -right-20 -top-20 opacity-10 pointer-events-none">
                                            <PhoneCallIcon className="w-96 h-96" />
                                        </div>
                                        <div className="max-w-2xl relative z-10 text-center md:text-left">
                                            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Confused about your requirements?</h3>
                                            <p className="text-white/80 text-lg">Let our experts help you identify the exact features you need to scale your HR operations smoothly.</p>
                                        </div>
                                        <button 
                                            onClick={() => window.dispatchEvent(new Event('openUserForm'))}
                                            className="relative z-10 flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 active:scale-95 text-black px-10 py-5 rounded-2xl transition-all text-lg font-bold shadow-[0_0_40px_rgba(234,179,8,0.3)] whitespace-nowrap"
                                        >
                                            <PhoneCallIcon className="w-5 h-5 fill-black/10" /> Get Free Consultation
                                        </button>
                                    </motion.div>
                                )}

                                <motion.div 
                                    className={`glass rounded-[2rem] p-8 md:p-10 flex flex-col h-full hover:bg-white/10 transition-all duration-500 relative overflow-hidden group border border-white/5 hover:border-white/20 ${spanClass}`}
                                    initial={{ y: 40, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: (index % 3) * 0.1, duration: 0.5, ease: "easeOut" }}
                                >
                                    {/* Large decorative background vector icon */}
                                    <div className="absolute -bottom-10 -right-10 text-white opacity-[0.03] group-hover:opacity-[0.08] transform transition-all group-hover:scale-125 group-hover:-rotate-12 duration-700 pointer-events-none">
                                        <Icon className="w-56 h-56 md:w-64 md:h-64" />
                                    </div>

                                    <div className="flex items-center gap-5 mb-6 relative z-10">
                                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1.25rem] bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 shrink-0 shadow-lg group-hover:border-yellow-500/30 transition-colors">
                                            <Icon className="w-7 h-7 md:w-8 md:h-8 text-yellow-400" />
                                        </div>
                                        <h4 className="text-xl md:text-2xl font-bold text-white leading-tight tracking-wide">{feature.title}</h4>
                                    </div>
                                    <p className="text-base md:text-[17px] text-white/60 group-hover:text-white/80 leading-relaxed text-left relative z-10 font-light transition-colors break-words">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            </React.Fragment>
                        );
                    })}
                </div>

                {/* Bottom Call to Action block */}
                <motion.div 
                    className="max-w-5xl mx-auto mt-24 glass border border-white/10 hover:border-yellow-500/30 transition-colors rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden group"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#2E08CF]/10 to-transparent pointer-events-none" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-yellow-500/20 blur-[100px] pointer-events-none"></div>

                    <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight relative z-10">Top HR Softwares for these features</h3>
                    <p className="text-white/70 mb-12 text-lg md:text-xl font-light relative z-10">Let us help you identify the best HR Softwares tailored exactly for your enterprise.</p>
                    
                    <button onClick={() => window.dispatchEvent(new Event('openUserForm'))} className="relative z-10 inline-flex items-center justify-center gap-3 bg-white text-black hover:bg-gray-100 active:scale-95 px-12 py-5 rounded-2xl transition-all text-lg font-bold shadow-xl hover:shadow-2xl hover:shadow-white/20">
                        Explore Now <ArrowRightIcon className="w-6 h-6" />
                    </button>
                </motion.div>
            </main>
        </>
    );
}
