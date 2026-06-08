import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import EliteLogo from '../../assets/Elite_logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true');
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Turnaround', path: '/turnaround' },
    { name: 'Contact', path: '/contact' },
  ];

  const navClass = scrolled
    ? 'bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-sm py-0'
    : 'bg-white/80 dark:bg-dark/50 backdrop-blur-sm py-2';

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${navClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Placeholder */}
        <Link 
          to="/" 
          className="flex items-center"
        >
          <img
            src={EliteLogo}
            alt="Elite Dental Lab logo"
            className="h-20 md:h-24 w-auto object-contain block"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg
                  ${isActive 
                    ? 'text-secondary dark:text-secondary' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary'
                  }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-secondary rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => setDarkMode(!darkMode)} 
            className="relative w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <motion.div
              initial={false}
              animate={{ rotate: darkMode ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {darkMode ? <FaSun size={16} className="text-amber-500" /> : <FaMoon size={16} className="text-primary" />}
            </motion.div>
          </motion.button>

          {/* CTA Button */}
          <Link 
            to="/contact" 
            className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Request Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => setDarkMode(!darkMode)} 
            className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
          >
            {darkMode ? <FaSun size={14} className="text-amber-500" /> : <FaMoon size={14} className="text-primary" />}
          </motion.button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-primary dark:text-white p-1"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-lg mx-4 rounded-2xl overflow-hidden mt-2"
          >
            <div className="p-4 space-y-1">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 px-4 rounded-xl transition-all duration-300
                        ${isActive 
                          ? 'bg-secondary/10 text-secondary font-semibold' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4 mt-2 border-t border-gray-200 dark:border-gray-800"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300"
                >
                  Request Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}