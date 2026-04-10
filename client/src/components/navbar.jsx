import { MenuIcon, XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function Navbar({ onOpenForm }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const links = [
        { name: 'Home', href: '/', isExternal: false },
        { name: 'About Us', href: '/about', isExternal: false },
        { name: 'Pricing', href: '/pricing', isExternal: false },
        { name: 'Top Features', href: '/top-features', isExternal: false },
        { name: 'Docs', href: '#docs', isExternal: true },
        { name: 'Contacts', href: '/contact', isExternal: false }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <motion.nav className={`sticky top-0 z-50 flex w-full items-center justify-between px-4 py-3.5 md:px-16 lg:px-24 transition-colors ${isScrolled ? 'bg-white/15 backdrop-blur-lg' : ''}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <div className='text-3xl font-medium text-white'>
                    FXR
                </div>

                <div className='hidden items-center space-x-10 md:flex'>
                    {links.map((link) => (
                        link.isExternal ? (
                            <a key={link.name} href={link.href} className='transition hover:text-gray-300'>
                                {link.name}
                            </a>
                        ) : (
                            <Link key={link.name} to={link.href} className='transition hover:text-gray-300'>
                                {link.name}
                            </Link>
                        )
                    ))}
                    <button 
                        onClick={onOpenForm} 
                        className='btn bg-orange-500 hover:bg-orange-600 text-white border-none cursor-pointer'>
                        Request Demo
                    </button>
                </div>

                <button onClick={() => setIsOpen(true)} className='transition active:scale-90 md:hidden'>
                    <MenuIcon className='size-6.5' />
                </button>
            </motion.nav>

            <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/20 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {links.map((link) => (
                    link.isExternal ? (
                        <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                            {link.name}
                        </a>
                    ) : (
                        <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)}>
                            {link.name}
                        </Link>
                    )
                ))}

                <button 
                    onClick={() => {
                        setIsOpen(false);
                        onOpenForm && onOpenForm();
                    }}
                    className='btn bg-orange-500 hover:bg-orange-600 text-white border-none cursor-pointer'
                >
                    Request Demo
                </button>

                <button onClick={() => setIsOpen(false)} className='rounded-md p-2 glass'>
                    <XIcon />
                </button>
            </div >
        </>
    );
}
