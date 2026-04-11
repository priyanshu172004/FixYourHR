import { motion } from "framer-motion";

export default function TrustedCompanies() {
    const logos = [
        '/Assests/icons/ZohoPeople.svg',
        '/Assests/icons/zimyo_logo.png',
        '/Assests/icons/keka-logo-36px.svg',
        '/Assests/icons/GreyTHR.svg',
        '/Assests/icons/Razorpay.svg',
        '/Assests/icons/CrazeLogo.png',
        '/Assests/icons/akrivia-logo.svg',
        '/Assests/icons/qandle.svg',
        '/Assests/icons/BayZat.svg',
        '/Assests/icons/WocoLogo.png',
        '/Assests/icons/Darwinbox_2.png',
    ]

    return (
        <motion.section className="mt-14"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
        >
            <p className="py-6 mt-14 text-center text-2xl font-high">Connecting You To The Best In HR Tech With Leading Brands</p>

            <div className="flex flex-col items-center gap-[50px] max-w-4xl w-full mx-auto py-4" id="logo-container">
                <div className="flex flex-wrap justify-center gap-[50px] w-full">
                    {logos.slice(0, 6).map((logo, index) => (
                        <motion.img 
                            key={index} 
                            src={logo} 
                            alt="logo" 
                            className="h-[35px] w-auto max-w-xs"
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
                            alt="logo" 
                            className="h-[35px] w-auto max-w-xs"
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
    )
}