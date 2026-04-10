import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import TopFeatures from "./pages/TopFeatures";
import UserFormModal from "./components/user-form-modal";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

function Layout() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const location = useLocation();

    // Check if we are on an admin route
    const isAdminRoute = location.pathname.startsWith('/admin-secret-Shashank-FixYourHR');

    useEffect(() => {
        const handleOpenPopup = () => setIsFormOpen(true);
        window.addEventListener('openUserForm', handleOpenPopup);
        return () => window.removeEventListener('openUserForm', handleOpenPopup);
    }, []);

    return (
        <>
            <LenisScroll />
            {!isAdminRoute && <Navbar onOpenForm={() => setIsFormOpen(true)} />}
            {!isAdminRoute && <UserFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />}
            
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/top-features" element={<TopFeatures />} />

                {/* Admin Routes */}
                <Route path="/admin-secret-Shashank-FixYourHR" element={<AdminLogin />} />
                <Route path="/admin-secret-Shashank-FixYourHR/dashboard" element={<AdminDashboard />} />

                {/* 404 Catch-All Route */}
                <Route path="*" element={<NotFound />} />
            </Routes>

            {!isAdminRoute && <Footer />}
        </>
    );
}

export default function App() {
    return (
        <Router>
            <Layout />
        </Router>
    );
}