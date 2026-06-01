import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as CountUpModule from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaTooth, FaMicroscope, FaShieldAlt, FaClock } from 'react-icons/fa';
import ProcessWorkflow from '../components/ProcessWorkflow';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true });
  const CountUp = CountUpModule.default?.default ?? CountUpModule.default ?? CountUpModule;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
          >
            Precision Crafted <br/> <span className="text-secondary">Dental Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10"
          >
            Made for the Elite. Exceeding patients' expectations since 2002.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-semibold transition-colors">
              Request Consultation
            </Link>
            <Link to="/services" className="border border-white/50 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-colors">
              View Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-primary dark:text-white mb-4">Why Elite Dental Lab?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Our door is always open.. Come and experience the Elite difference!</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <FaShieldAlt size={32} />,
                title: "100% Satisfaction Guarantee",
                desc: "The latest dental technology, quality assurance, and exceptional value and customer service."
              },
              {
                icon: <FaMicroscope size={32} />,
                title: "Chair Time Saver",
                desc: "Microscope / ‘Check and communicate’ points help our laboratory track and adhere to doctor specifications while producing quality prostheses."
              },
              {
                icon: <FaClock size={32} />,
                title: "Consistent Quality",
                desc: "The ethic of quality is deeply rooted and readily evident in our workforce, driving toward zero defects in every part we produce."
              },
              {
                icon: <FaTooth size={32} />,
                title: "Dependability",
                desc: "Our certified technicians provide time-tested quality — you know your cases will be done right the first time, every time."
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-2xl text-center hover:shadow-xl transition-all group cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-accent dark:bg-primary/20 text-primary dark:text-secondary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-primary dark:bg-secondary">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {[
            { value: 22, suffix: "+", label: "Years of Experience" },
            { value: 100, suffix: "%", label: "Satisfaction Guarantee" },
            { value: 50000, suffix: "+", label: "Cases Delivered" },
            { value: 1400, suffix: "Mpa", label: "Zirconia Flex Strength" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {statsInView && <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />}
              </div>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Workflow */}
      <ProcessWorkflow />

      {/* CTA Banner */}
      <section className="py-20 bg-accent dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white mb-6">Every Single Tooth is a Piece of Art</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">Only at Elite Dental Lab. Let us exceed your expectations.</p>
          <Link to="/contact" className="bg-primary hover:bg-secondary text-white px-10 py-4 rounded-full font-semibold transition-all inline-block">
            Start a Case
          </Link>
        </div>
      </section>

      {/* Our Policy */}
      <section className="py-20 bg-white dark:bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary mb-4">OUR POLICY</p>
            <h2 className="text-4xl font-display font-bold text-primary dark:text-white">Committed to quality, service, and trust</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-10">
            <div className="glass p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-primary dark:text-secondary mb-4">Superior quality</h3>
              <p className="text-gray-700 dark:text-gray-300">Today we have clients from all parts of the world including Europe and Asia. We are committed to providing consistently world class quality of restorations at reasonable price.</p>
            </div>

            <div className="glass p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-primary dark:text-secondary mb-4">Shipping</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
                <li><span className="font-semibold">Abu Dhabi and Dubai:</span> We assure free pick-up and delivery.</li>
                <li><span className="font-semibold">Outside U.A.E:</span> The clinic pays for shipping to our lab while Elite Dental Lab pays for shipping back to your clinic.</li>
                <li>We request Aramex for inbound shipments. If you prefer another carrier, please notify us with the tracking number.</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-primary dark:text-secondary mb-4">Billing & Payment</h3>
              <p className="text-gray-700 dark:text-gray-300">A statement will be sent at the end of each month detailing every case and payment. Payment is required within the first five days of receiving your bill. You may also send a check in advance for the total work you expect during the month.</p>
            </div>

            <div className="glass p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-primary dark:text-secondary mb-4">Remake</h3>
              <p className="text-gray-700 dark:text-gray-300">Remakes are handled case by case. We require the original case plus a new impression and a description of the malfunction. If the fault originated in our lab, we will remake the case at no charge.</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="glass p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-primary dark:text-secondary mb-4">Confidentiality</h3>
              <p className="text-gray-700 dark:text-gray-300">Elite Dental Lab maintains a strict confidentiality policy with all of our customers. At no time will we ever divulge your name or information to any third party for any reason.</p>
            </div>
            <div className="glass p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-primary dark:text-secondary mb-4">Exceptional customer service</h3>
              <p className="text-gray-700 dark:text-gray-300">We always serve our customers with personal attention.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
