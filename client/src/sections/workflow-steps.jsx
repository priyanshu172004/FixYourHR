import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";
import { ExternalLinkIcon } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Tell Us Your Needs",
        description: "Fill out a short form about your requirements. We'll gather essential information about your business size, industry, budget, and specific HR functionality needs that suits your business.",
        image: "/Assests/feature-icons/workforce (1).png",
    },
    {
        id: 2,
        title: "Get Personalized Recommendations",
        description: "We match you with the best HR software as per your needs. Our expert team analyzes your requirements and connects you with solutions that perfectly align with your business objectives.",
        image: "/Assests/feature-icons/customer-care.png",
    },
    {
        id: 3,
        title: "Compare, Choose And Implement",
        description: "Select the right software for your business and start using it. We support you through the decision-making process and provide resources to ensure a smooth implementation.",
        image: "/Assests/feature-icons/tracking.png",
    },
];

export default function WorkflowSteps() {
    return (
        <section className="mt-32 relative">
            <SectionTitle
                title="Connecting You with the Perfect HR Software Solution"
                description="Our seamless three-step process makes finding the right HR software for your business simple, fast, and efficient."
            />

            <motion.div className="relative space-y-20 md:space-y-30 mt-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                    <div className="flex-col items-center hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                    <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
                        01
                    </p>
                    <div className="h-100 w-0.5 bg-linear-to-b from-transparent via-white to-transparent" />
                    <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
                        02
                    </p>
                    <div className="h-100 w-0.5 bg-linear-to-b from-transparent via-white to-transparent" />
                    <p className="flex items-center justify-center font-medium my-10 aspect-square bg-black/15 p-2 rounded-full">
                        03
                    </p>
                </div>
                {steps.map((step, index) => (
                    <motion.div key={index} className={`flex items-center justify-center gap-6 md:gap-60 ${index % 2 !== 0 ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <img src={step.image} alt="step" className="flex-1 h-80 w-full max-w-xs rounded-2xl" />
                        <div key={index} className="flex-1 flex flex-col gap-5 md:px-10 max-w-lg">
                            <h3 className="text-2xl font-medium text-white">
                                {step.title}
                            </h3>
                            <p className="text-gray-100 text-base leading-relaxed pb-2">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
