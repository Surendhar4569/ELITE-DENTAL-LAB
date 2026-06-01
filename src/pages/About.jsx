import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBullseye, FaEye, FaCheckCircle, FaAward, FaUsers, FaClock } from 'react-icons/fa';
import { useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <div ref={ref} className="pt-32 pb-28 bg-white dark:bg-dark relative">
      {/* Minimal decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "8px" }}
            animate={{ opacity: 1, letterSpacing: "4px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block text-secondary text-sm font-semibold tracking-[4px] uppercase mb-4"
          >
            Since 2002
          </motion.span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary dark:text-white mb-6">
            Elite Dental Lab
          </h1>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-8" />
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            On Sept. 2002, Elite Dental laboratory opened its doors guided by one principle:
          </p>
          <p className="text-xl md:text-2xl text-primary dark:text-white font-medium max-w-2xl mx-auto mt-2">
            "Exceed patients' expectations by providing the best quality services."
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-28">
          {/* About Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-4">Our Philosophy</h2>
              <div className="w-12 h-0.5 bg-secondary mb-6" />
            </div>
            
            <div className="space-y-5">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We are constantly striving to exceed your expectation and looking forward for the best quality and the latest technology to provide to our valued customers.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We're keenly aware of the considerable clinical skills you must employ to meet the constantly evolving challenges of dentistry. That's why our technical support team is comprised of individuals who have a vast reserve of dental laboratory experience and clinical experience.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                The result is the most dynamic and successful approach to solving your casework requirements everyday.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                  <FaCheckCircle className="text-secondary text-sm" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Quality Assurance</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                  <FaCheckCircle className="text-secondary text-sm" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Latest Technology</span>
              </div>
            </div>
          </motion.div>

          {/* Mission & Vision Cards - Stacked Design */}
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-gray-50 dark:bg-dark/30 rounded-2xl p-8 border-l-4 border-secondary"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <FaBullseye className="text-secondary text-xl" />
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-white">Mission</h3>
              </div>
              <ul className="space-y-3 pl-2">
                {[
                  "To serve customers through the defined service portfolio",
                  "To ensure quality and responsiveness of our dental technicians",
                  "To provide an enjoyable work environment for employees",
                  "To ensure financial strength and sustainable growth of the company"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                    <span className="text-secondary text-sm mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 dark:bg-dark/30 rounded-2xl p-8 border-l-4 border-secondary/60"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <FaEye className="text-secondary text-xl" />
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-white">Vision</h3>
              </div>
              <ul className="space-y-3 pl-2">
                {[
                  "To become the leading dental laboratory in the Middle East",
                  "To develop a great new product or service for patients"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                    <span className="text-secondary text-sm mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Stats Grid - Minimal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden"
        >
          {[
            { value: "20+", label: "Years Experience", icon: FaAward },
            { value: "500+", label: "Happy Clinics", icon: FaUsers },
            { value: "100%", label: "Quality Focus", icon: FaBullseye },
            { value: "24/7", label: "Expert Support", icon: FaClock },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="bg-white dark:bg-dark/60 p-6 text-center"
            >
              <stat.icon className="text-secondary text-2xl mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}