import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
import { useRef } from "react";

// Import vector icons
import expertAdviceIcon from "../../Assests/vector-icons/expert-advice.png";
import saveMoneyIcon from "../../Assests/vector-icons/save-money.png";
import sendIcon from "../../Assests/vector-icons/send.png";
import rushIcon from "../../Assests/vector-icons/rush.png";
import selectIcon from "../../Assests/vector-icons/select.png";
import publicRelationIcon from "../../Assests/vector-icons/public-relation.png";

export default function Features() {

    const refs = useRef([]);

    const featuresData = [
        {
            icon: expertAdviceIcon,
            title: "Expert Guidance for the Right HR Software",
            description: "We help businesses make informed decisions by recommending HR software that perfectly aligns with their unique needs, ensuring efficiency and productivity.",
        },
        {
            icon: saveMoneyIcon,
            title: "Exclusive Cost Savings",
            description: "Our insider connections allow us to negotiate unbeatable discounts, ensuring you get premium HR software at the lowest possible price.",
        },
        {
            icon: sendIcon,
            title: "Direct Support from Industry Leaders",
            description: "We bypass customer service delays by reaching out directly to CEOs and founders, ensuring priority issue resolution for you.",
        },
        {
            icon: rushIcon,
            title: "Fast-Track Support & Escalation",
            description: "Facing an issue? No worries. We ensure your concerns are resolved within the same day by leveraging our direct connections with top executives.",
        },
        {
            icon: selectIcon,
            title: "Simplifying HR Software Selection",
            description: "We eliminate confusion by analyzing your needs and recommending the best solutions, so you don't have to waste time exploring countless options.",
        },
        {
            icon: publicRelationIcon,
            title: "Customer-Centric Approach",
            description: "Your satisfaction is our priority. We stay with you throughout the entire process, from software selection to implementation and beyond, ensuring a smooth and hassle-free experience.",
        }
    ];

    return (
        <section className="mt-32">
            <SectionTitle
                title="Join The Leading Brands"
                description="Discover Why
                FixYourHR is the Best HR Software Partner for Your Business."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10 px-6 max-w-[80%] mx-auto">
                {featuresData.map((feature, index) => (
                    <motion.div
                        key={index}
                        ref={(el) => (refs.current[index] = el)}
                        className="hover:-translate-y-0.5 p-6 rounded-xl space-y-3 glass w-full"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.15,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1
                        }}
                        onAnimationComplete={() => {
                            const card = refs.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <img src={feature.icon} className="w-10 h-10 filter brightness-0 invert" alt="feature icon" />
                        <h3 className="text-base font-medium text-white">
                            {feature.title}
                        </h3>
                        <p className="text-gray-100 pb-1">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
