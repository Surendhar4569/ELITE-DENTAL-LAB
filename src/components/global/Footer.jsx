import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFax, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-gray-300 pt-20 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-display font-bold text-white mb-4">Elite <span className="text-secondary">Dental Lab</span></h2>
          <p className="text-sm leading-relaxed mb-6">Made for the Elite. Exceeding patients' expectations by providing the best quality services since 2002.</p>
          <p className="text-sm text-gray-400">Visit our clinic or request a consultation to learn how we can support your practice with premium restorations.</p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {['Home', 'About', 'Services', 'Contact'].map((link) => (
              <li key={link}>
                <Link to={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`} className="hover:text-secondary transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3"><FaMapMarkerAlt className="text-secondary mt-1" /> <span>P.O BOX: 46000, Abu Dhabi - UAE</span></li>
            <li className="flex items-center gap-3"><FaPhoneAlt className="text-secondary" /> <a href="tel:+97126765576" className="hover:text-secondary">+971 2 6765576</a></li>
            <li className="flex items-center gap-3"><FaFax className="text-secondary" /> +971 2 6769967</li>
            <li className="flex items-center gap-3"><FaEnvelope className="text-secondary" /> <a href="mailto:saadalzarif81@gmail.com" className="hover:text-secondary">saadalzarif81@gmail.com</a></li>
            <li className="flex items-center gap-3"><FaWhatsapp className="text-secondary" /> <a href="https://wa.me/97126765576" className="hover:text-secondary">+971 2 6765576</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {currentYear} Elite Dental Lab. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Designed with precision for dental professionals.</p>
      </div>
    </footer>
  );
}