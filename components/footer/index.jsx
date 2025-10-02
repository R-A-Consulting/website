"use client"
import { Steeplogic } from '@/assets/steeplogic-svg';
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/company/steep.logic", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/steep.logic", label: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/steep.logic", label: "Instagram" }
  ];

  return (
    <footer className="bg-white">
      <div className="max-w-5xl mx-auto px-5 md:px-2 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <Steeplogic expanded={true} width={150} />
            </a>
          </div>

          {/* Copyright Text */}
          <div className="text-sm text-gray-600 text-center md:text-right">
            © {currentYear} SteepLogic. All rights reserved.
          </div>
         
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-[#ff0708] hover:bg-red-50 rounded-full transition-all duration-200 hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
