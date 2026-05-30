import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [darkMode]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Turnaround', path: '/turnaround' },
    { name: 'Contact', path: '/contact' },
  ];

  const navClass = scrolled
    ? 'glass py-3'
    : 'bg-white/80 dark:bg-transparent backdrop-blur-sm py-5';

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${navClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold text-primary dark:text-white">
          Elite <span className="text-secondary">Dental Lab</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-gray-800 dark:text-white hover:text-primary dark:hover:text-secondary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button onClick={() => setDarkMode(!darkMode)} className="text-primary dark:text-secondary">
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <Link to="/contact" className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-secondary transition-colors">
            Request Consultation
          </Link>
        </div>

          <div className="flex items-center gap-4 md:hidden">
          <button onClick={() => setDarkMode(!darkMode)} className="text-primary dark:text-secondary">
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary dark:text-white">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass md:hidden mt-2 mx-4 rounded-xl p-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-gray-800 dark:text-white hover:bg-accent rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}