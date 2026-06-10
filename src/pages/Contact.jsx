import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaCheckCircle, FaUserMd, FaClipboardList } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Contact() {
  const ref = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    contactPerson: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    setFormData({
      contactPerson: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div ref={ref} className="pt-32 pb-28 bg-white dark:bg-dark relative min-h-screen">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "8px" }}
            animate={{ opacity: 1, letterSpacing: "4px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block text-secondary text-sm font-semibold tracking-[4px] uppercase mb-4"
          >
            Contact Us
          </motion.span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary dark:text-white mb-6">
            Get In Touch
          </h1>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We always serve our customers with personal attention. Reach out to us for any inquiries or consultation requests.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div
              variants={fadeUp}
              className="bg-gray-50 dark:bg-dark/30 rounded-2xl p-6 border-l-4 border-secondary hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-secondary text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary dark:text-white mb-2">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    P.O BOX: 46000, Abu Dhabi - UAE
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-gray-50 dark:bg-dark/30 rounded-2xl p-6 border-l-4 border-secondary/80 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-secondary text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary dark:text-white mb-2">Phone & Fax</h3>
                  <p className="text-gray-600 dark:text-gray-400">Tel: <span className="font-medium">+971 586887793, +971 26765576</span></p>
                  <p className="text-gray-600 dark:text-gray-400">Fax: <span className="font-medium">+971 26769967</span></p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-gray-50 dark:bg-dark/30 rounded-2xl p-6 border-l-4 border-secondary/60 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-secondary text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary dark:text-white mb-2">Email</h3>
                  <a href="mailto:account@elitedentaluae.com" className="text-gray-600 dark:text-gray-400 hover:text-secondary transition-colors block mt-1">
                    account@elitedentaluae.com
                  </a>
                  <a href="mailto:saadalzarif81@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-secondary transition-colors block">
                    saadalzarif81@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Simplified */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white dark:bg-dark/40 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-lg overflow-hidden"
          >
            <div className="bg-primary/5 dark:bg-primary/10 px-6 py-4 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold text-primary dark:text-white">Request Consultation</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Submit your details and we'll respond within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Contact Person */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Your Name <span className="text-secondary">*</span>
                </label>
                <div className="relative">
                  <FaUserMd className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark/50 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              {/* Phone & Email - Two columns */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number <span className="text-secondary">*</span>
                  </label>
                  <div className="relative">
                    <FaPhoneAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark/50 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address <span className="text-secondary">*</span>
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark/50 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Your Message / Inquiry <span className="text-secondary">*</span>
                </label>
                <div className="relative">
                  <FaClipboardList className="absolute left-3 top-4 text-gray-400 text-sm" />
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark/50 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none resize-none transition-all"
                    placeholder="Please describe your inquiry or case requirements..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-white py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                {formSubmitted ? (
                  <>
                    <FaCheckCircle className="text-lg" />
                    <span>Request Sent!</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p className="text-xs text-center text-gray-400 dark:text-gray-500 mt-4">
                We'll contact you within 24 hours to discuss your inquiry.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800"
        >
          <div className="relative h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d54.30066073347948!3d24.452718253411206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440a26be17b3%3A0x8cd6a0e7c3f4d5e5!2sAbu%20Dhabi!5e0!3m2!1sen!2sae!4v1698765432100!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Elite Dental Lab Location"
              className="w-full h-full"
            ></iframe>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-dark to-transparent pointer-events-none" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Located in Abu Dhabi, serving dental practices across the UAE and Middle East
          </p>
        </motion.div>
      </div>
    </div>
  );
}