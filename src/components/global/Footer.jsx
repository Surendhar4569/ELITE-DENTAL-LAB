import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFax, FaWhatsapp, FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Turnaround', path: '/turnaround' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-dark text-gray-300 relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-4">
              Elite <span className="text-secondary">Dental Lab</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Made for the Elite. Exceeding patients' expectations by providing the best quality services since 2002.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Visit our clinic or request a consultation to learn how we can support your practice with premium restorations.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-secondary flex items-center justify-center transition-all duration-300 group"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-gray-400 group-hover:text-white text-sm transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-secondary flex items-center justify-center transition-all duration-300 group"
                aria-label="Instagram"
              >
                <FaInstagram className="text-gray-400 group-hover:text-white text-sm transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-secondary flex items-center justify-center transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-gray-400 group-hover:text-white text-sm transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2"
          >
            <h3 className="text-lg font-bold text-white mb-5 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-gray-400 hover:text-secondary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-secondary text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-6"
          >
            <h3 className="text-lg font-bold text-white mb-5 relative inline-block">
              Contact Information
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full" />
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 group-hover:bg-secondary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <FaMapMarkerAlt className="text-secondary text-sm" />
                  </div>
                  <span className="text-sm text-gray-400 leading-relaxed">P.O BOX: 46000, Abu Dhabi - UAE</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 group-hover:bg-secondary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <FaPhoneAlt className="text-secondary text-sm" />
                  </div>
                  <a href="tel:+97126765576" className="text-sm text-gray-400 hover:text-secondary transition-colors">
                    +971 2 6765576
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 group-hover:bg-secondary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <FaFax className="text-secondary text-sm" />
                  </div>
                  <span className="text-sm text-gray-400">+971 2 6769967</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 group-hover:bg-secondary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <FaEnvelope className="text-secondary text-sm" />
                  </div>
                  <a href="mailto:saadalzarif81@gmail.com" className="text-sm text-gray-400 hover:text-secondary transition-colors break-all">
                    saadalzarif81@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 group-hover:bg-secondary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                    <FaWhatsapp className="text-secondary text-sm" />
                  </div>
                  <a href="https://wa.me/97126765576" className="text-sm text-gray-400 hover:text-secondary transition-colors">
                    +971 2 6765576 (WhatsApp)
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500"
        >
          <p>© {currentYear} Elite Dental Lab. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <span>Privacy Policy</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>Terms of Service</span>
          </p>
          <p>Designed with precision for dental professionals.</p>
        </motion.div>
      </div>
    </footer>
  );
}