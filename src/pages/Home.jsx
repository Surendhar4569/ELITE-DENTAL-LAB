import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as CountUpModule from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import { FaTooth, FaMicroscope, FaShieldAlt, FaClock, FaArrowRight, FaCheckCircle, FaTruck, FaCreditCard, FaUserSecret, FaHeadset } from 'react-icons/fa';
import ProcessWorkflow from '../components/ProcessWorkflow';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true });
  const CountUp = CountUpModule.default?.default ?? CountUpModule.default ?? CountUpModule;
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div className="bg-white dark:bg-dark">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Lighter gradient overlay - reduced darkness */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark/70 via-dark/50 to-dark/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Dental Lab"
            className="w-full h-full object-cover"
          />
        </div>
        
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-20 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-secondary/30 text-secondary rounded-full backdrop-blur-sm">
              Since 2002
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight"
          >
            Precision Crafted <br/> 
            <span className="text-secondary">Dental Solutions</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
          >
            Exceeding patients' expectations by providing the best quality services to dental practice since 2002.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="group bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center justify-center gap-2">
              Request Consultation
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="border border-white/40 hover:border-white/80 text-white px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center justify-center backdrop-blur-sm">
              View Services
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/80 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="text-center mb-16"
          >
            <span className="inline-block text-secondary text-sm font-semibold tracking-[4px] uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-4">
              Why Elite Dental Lab?
            </h2>
            <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Our door is always open. Come and experience the Elite difference!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaShieldAlt size={28} />,
                title: "100% Satisfaction Guarantee",
                desc: "The latest dental technology, quality assurance, and exceptional value and customer service."
              },
              {
                icon: <FaMicroscope size={28} />,
                title: "Chair Time Saver",
                desc: "Microscope / 'Check and communicate' points help track and adhere to doctor specifications while producing quality prostheses."
              },
              {
                icon: <FaClock size={28} />,
                title: "Consistent Quality",
                desc: "The ethic of quality is deeply rooted and readily evident in our workforce, driving toward zero defects in every part we produce."
              },
              {
                icon: <FaTooth size={28} />,
                title: "Dependability",
                desc: "Our certified technicians provide time-tested quality — you know your cases will be done right the first time, every time."
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeUp} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 dark:bg-dark/30 rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-secondary/10 text-secondary rounded-xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-primary dark:bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 22, suffix: "+", label: "Years of Experience", prefix: "" },
              { value: 100, suffix: "%", label: "Satisfaction Guarantee", prefix: "" },
              { value: 50000, suffix: "+", label: "Cases Delivered", prefix: "" },
              { value: 1400, suffix: "Mpa", label: "Zirconia Flex Strength", prefix: "" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {statsInView && <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />}
                </div>
                <p className="text-white/80 text-sm uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Workflow */}
      <ProcessWorkflow />

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-dark/50 dark:to-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-secondary/10 rounded-full blur-2xl" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">
              Every Single Tooth is <br/> 
              <span className="text-secondary">a Piece of Art</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg max-w-2xl mx-auto">
              Only at Elite Dental Lab. Let us exceed your expectations.
            </p>
            <Link to="/contact" className="group inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-10 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl">
              Start a Case
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Policy Section */}
      <section className="py-24 bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-secondary text-sm font-semibold tracking-[4px] uppercase mb-4">
              Our Policy
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-4">
              Committed to Quality, Service, and Trust
            </h2>
            <div className="w-16 h-0.5 bg-secondary mx-auto" />
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 mb-6">
            {/* Superior Quality */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-dark/30 rounded-2xl p-6 border-l-4 border-secondary hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="text-secondary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary dark:text-secondary mb-2">Superior quality</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Today we have clients from all parts of the world including Europe and Asia. We are committed to providing consistently world class quality of restorations at reasonable price.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Shipping - Combined text, no bullet points */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-dark/30 rounded-2xl p-6 border-l-4 border-secondary hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <FaTruck className="text-secondary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary dark:text-secondary mb-2">Shipping</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    For Abu Dhabi and Dubai, we assure free pick-up and delivery. For Outside U.A.E, the clinic pays for shipping to our lab while Elite Dental Lab pays for shipping back to your clinic. We request Aramex for inbound shipments. If you prefer another carrier, please notify us with the tracking number.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Billing & Payment */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-dark/30 rounded-2xl p-6 border-l-4 border-secondary hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <FaCreditCard className="text-secondary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary dark:text-secondary mb-2">Billing & Payment</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    A statement will be sent at the end of each month detailing every case and payment. Payment is required within the first five days of receiving your bill. You may also send a check in advance for the total work you expect during the month.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Remake */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-dark/30 rounded-2xl p-6 border-l-4 border-secondary hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="text-secondary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary dark:text-secondary mb-2">Remake</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Remakes are handled case by case. We require the original case plus a new impression and a description of the malfunction. If the fault originated in our lab, we will remake the case at no charge.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Confidentiality */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-dark/30 rounded-2xl p-6 border-l-4 border-secondary/70 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <FaUserSecret className="text-secondary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary dark:text-secondary mb-2">Confidentiality</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Elite Dental Lab maintains a strict confidentiality policy with all of our customers. At no time will we ever divulge your name or information to any third party for any reason.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Exceptional Customer Service */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-dark/30 rounded-2xl p-6 border-l-4 border-secondary/70 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <FaHeadset className="text-secondary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary dark:text-secondary mb-2">Exceptional customer service</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    We always serve our customers with personal attention.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}