import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.a 
        href="https://wa.me/97126765576" target="_blank" 
        className="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-colors"
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp size={24} />
      </motion.a>

      <AnimatePresence>
        {showTop && (
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-xl hover:bg-secondary transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <FaArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}