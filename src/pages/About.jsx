import { motion } from 'framer-motion';
import { FaBullseye, FaEye } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary dark:text-white mb-4">About Elite Dental Lab</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto italic">On Sept. 2002, Elite Dental laboratory opened its doors for business guided by one principle: Exceed patients’ expectations by providing the best quality services to dental practice.</p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 items-start mb-24">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="prose max-w-none text-left">
            <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-6">About Us</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              We are constantly striving to exceed your expectation and looking forward for the best quality and the latest technology to provide to our valued customers.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              We’re keenly aware of the considerable clinical skills you must employ to meet the constantly evolving challenges of dentistry. That’s why our technical support team is comprised of individuals who have a vast reserve of dental laboratory experience and clinical experience.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              The result is the most dynamic and successful approach to solving your casework requirements everyday.
            </p>
          </motion.div>

          <div className="space-y-6 md:pl-8">
            <div className="sticky top-28 space-y-6">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass p-6 rounded-2xl border border-gray-200 dark:border-gray-700 text-left">
                <div className="flex items-start gap-4 mb-3">
                  <FaBullseye className="text-3xl text-secondary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">Mission</h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mt-2">
                      <li>To serve customers through the defined service portfolio</li>
                      <li>To ensure quality and responsiveness of our dental technicians</li>
                      <li>To provide an enjoyable work environment for employees</li>
                      <li>To ensure financial strength and sustainable growth of the company</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass p-6 rounded-2xl border border-gray-200 dark:border-gray-700 text-left">
                <div className="flex items-start gap-4 mb-3">
                  <FaEye className="text-3xl text-secondary mt-1" />
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">Vision</h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mt-2">
                      <li>To become the leading dental laboratory in the Middle East</li>
                      <li>To develop a great new product or service for patients</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}