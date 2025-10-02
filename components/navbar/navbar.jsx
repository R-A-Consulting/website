"use client"
import { useState, useEffect } from 'react';
import { Steeplogic } from '@/assets/steeplogic-svg';
import { ArrowUpRight } from 'lucide-react';
import ContactDialog from '@/components/contact-dialog';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const scrollThreshold = 50;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) setShowNavbar(false);
      else setShowNavbar(true);

      setScrollY(currentScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out max-w-[90%] mx-auto px-0 lg:px-0 rounded-full
          outline-0 outline-offset-0 outline-gray-100 py-1
          ${showNavbar ? 'translate-y-0 mt-5' : '-translate-y-[103%]'}
          ${scrollY > scrollThreshold ? 'bg-white/85 backdrop-blur-[12px] outline-2 md:max-w-3xl shadow-[0_0_10px_-6px_rgba(100,116,139,0.4),0_0_16px_-8px_rgba(255,7,8,0.18)]' : 'md:max-w-7xl bg-transparent outline-none shadow-none'}
        `}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center  px-4">
            <a href="/" className="flex items-center space-x-2">
              <Steeplogic expanded={true} width={150} />
            </a>
          </div>

          {/* Right side - Login/Start button */}
          <div className="flex items-center md:space-x-2 z-[51] px-1">
            <button
              onClick={() => setIsContactDialogOpen(true)}
              className="py-3 px-3 bg-primary text-white text-sm rounded-full font-medium transition-all flex items-center gap-2 hover:scale-105"
            >
              Contact Us
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </nav>

      <ContactDialog
        isOpen={isContactDialogOpen}
        onClose={() => setIsContactDialogOpen(false)}
      />
    </>
  );
};

export default Navbar;