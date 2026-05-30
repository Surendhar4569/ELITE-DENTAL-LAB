import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary dark:text-white mb-4">Get In Touch</h1>
          <p className="text-gray-600 dark:text-gray-400">We always serve our customers with personal attention.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="glass p-8 rounded-2xl flex items-start gap-6 hover:shadow-xl transition-shadow">
              <div className="bg-accent dark:bg-primary/20 text-primary dark:text-secondary p-4 rounded-xl">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold dark:text-white mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">P.O BOX: 46000, Abu Dhabi - UAE</p>
              </div>
            </div>
            
            <div className="glass p-8 rounded-2xl flex items-start gap-6 hover:shadow-xl transition-shadow">
              <div className="bg-accent dark:bg-primary/20 text-primary dark:text-secondary p-4 rounded-xl">
                <FaPhoneAlt size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold dark:text-white mb-2">Phone & Fax</h3>
                <p className="text-gray-600 dark:text-gray-400">Tel: +971 2 6765576</p>
                <p className="text-gray-600 dark:text-gray-400">Fax: +971 2 6769967</p>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl flex items-start gap-6 hover:shadow-xl transition-shadow">
              <div className="bg-accent dark:bg-primary/20 text-primary dark:text-secondary p-4 rounded-xl">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold dark:text-white mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-400">saadalzarif81@gmail.com</p>
              </div>
            </div>
          </div>

          <motion.form 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.2 }}
            className="glass p-8 rounded-2xl"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Doctor Name</label>
                <input type="text" className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Clinic Name</label>
                <input type="text" className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Email Address</label>
              <input type="email" className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Case Details / Message</label>
              <textarea rows="4" className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-primary resize-none"></textarea>
            </div>
            <button type="button" className="w-full bg-primary hover:bg-secondary text-white py-4 rounded-xl font-semibold transition-colors">
              Request Consultation
            </button>
          </motion.form>
        </div>

        <div className="mt-16 rounded-2xl overflow-hidden shadow-xl h-96">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d54.30066073347948!3d24.452718253411206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440a26be17b3%3A0x8cd6a0e7c3f4d5e5!2sAbu%20Dhabi!5e0!3m2!1sen!2sae!4v1698765432100!5m2!1sen!2sae" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Elite Dental Lab Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}