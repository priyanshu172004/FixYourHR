import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {

    const ref = useRef([]);
    const data = [
        {
            review: 'Honestly, I wasn’t sure where to start when it came to finding the right HR software, but FixYourHR really made it easy. They listened to what we needed and helped us find a solution that was just right. They even got us a nice discount, which was a huge plus! And whenever we had any questions or ran into issues, they were always there to help, no matter how small the problem was.',
            name: 'Sonam',
            about: 'Head HR, Ketto',
            image: 'Assests/Testimonials of Our Clients/Sonam (Ketto).jpeg',
            rating: '★★★★★',
        },
        {
            review: 'Big shoutout to FixYourHr for making the whole process of choosing HR software so much smoother. They didn’t just recommend a bunch of options—they really took the time to understand our needs and pointed us in the right direction. Plus, they got us a solid discount! They’ve been super helpful with support, always quick to jump in when we have any questions.',
            name: 'Sheel',
            about: 'Director HR, Tech Mahindra',
            image: 'Assests/Testimonials of Our Clients/Sheel (Tech Mahindra).jpeg',
            rating: '★★★★★',
        },
        {
            review: 'FixYourHR really knows their stuff. They helped us narrow down our options to the best ones for our business, and the discount they got us made it way more affordable. Whenever we’ve needed help, they’ve been super responsive, even with the smallest things. I’m definitely glad we reached out to them.',
            name: 'Seema',
            about: 'VP HR, SFC',
            image: 'Assests/Testimonials of Our Clients/Seema (SFC).jpeg',
            rating: '★★★★★',
        },
        {
            review: 'Choosing the right HR software felt like a huge task, but StartupHRSoftware made it pretty straightforward. They matched us with the right software based on what we were looking for, and the discount was a nice bonus. What really stands out is how hands-on they are with support—they’re always there when we need them, no matter what. It feels like we’ve got a solid partner in them.',
            name: 'Maryaan',
            about: 'Director HR, Enrich',
            image: 'Assests/Testimonials of Our Clients/Maryann (Enrich).jpeg',
            rating: '★★★★★',
        },
        {
            review: 'FixYourHR really came through for us. They helped us pick the perfect HR software based on what we actually needed, and the discount they got us was awesome. Their support is always there when we need it—they’re super responsive, whether it’s a small question or something more complicated.',
            name: 'Samreen',
            about: 'Director HR, CJS',
            image: 'Assests/Testimonials of Our Clients/Samreen (CJS Speciality).jpeg',
            rating: '★★★★★',
        },
        {
            review: 'I was really impressed with how easy FixYourHR made the whole process. They listened to our needs and recommended software that actually worked for us, not just something off the shelf. They also secured us a great discount. And whenever we’ve run into issues, they’ve been super quick to respond. It’s a relief knowing we can always count on them.',
            name: 'Aayush',
            about: 'Director HR, Ford Hospital',
            image: 'Assests/Testimonials of Our Clients/Aayush (Ford Hospital).jpeg',
            rating: '★★★★★',
        },
        {
            review: 'Choosing the right HR software can be overwhelming, but FixYourHR made it a lot less stressful. They didn’t just send us a list of options—they really took the time to match us with something that fit our business. And they even helped us save money with a discount! They’ve been incredibly helpful whenever we’ve needed support, big or small.',
            name: 'Vivek Sharma',
            about: 'Director HR, Orient Electric',
            image: 'Assests/Testimonials of Our Clients/Vivek Sharma (Orient Electric).jpeg',
            rating: '★★★★★',
        },
        {
            review: 'FixYourHR took a lot of the guesswork out of finding HR software for our company. They really listened to our needs, helped us figure out what would work best for us, and even found us a great deal. Whenever we have an issue or question, they’re just a call or email away. It’s really refreshing to work with a team that’s so responsive and helpful.',
            name: 'Pritam Thakran',
            about: 'Director HR, Shiprocket',
            image: 'Assests/Testimonials of Our Clients/Pritam Thakran (Shiprocket).jpeg',
            rating: '★★★★★',
        },
        {
            review: 'We had no idea what HR software to go with, but FixYourHR helped us figure it all out. They got us matched up with the right solution for our needs and even managed to get us a discount. What I really appreciate is how accessible they are—whenever we have a problem, they’re always quick to help. Definitely made the whole process easier.',
            name: 'Jitesh Mane',
            about: 'Head HR, Kisankonnect',
            image: 'Assests/Testimonials of Our Clients/Jitesh Mane.jpeg',
            rating: '★★★★★',
        },
    ];
    return (
        <section className="mt-32 flex flex-col items-center">
            <SectionTitle
                title="See What Our Clients Say"
                description="Discover How FixYourHR Has Transformed HR Software Selection for Businesses Like Yours."
            />
            <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {data.map((item, index) => (
                    <motion.div key={index} className='w-full max-w-96 space-y-5 rounded-lg glass p-6 hover:-translate-y-1'
                        initial={{ y: 150, opacity: 0 }}
                        ref={(el) => (ref.current[index] = el)}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        onAnimationComplete={() => {
                            const card = ref.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <div className='flex items-center justify-between'>
                            <p className="font-medium">{item.about}</p>
                            <img className='size-10 rounded-full' src={item.image} alt={item.name} />
                        </div>
                        <p className='leading-relaxed'>"{item.review}"</p>
                        <p className='text-gray-300'>
                            {item.name}
                        </p>
                        <p className='text-gray-300 -mt-[20px]'>
                            {item.rating}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}