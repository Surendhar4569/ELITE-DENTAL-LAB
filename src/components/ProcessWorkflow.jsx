import { motion } from 'framer-motion';
import { FaTruck, FaTooth, FaFlask } from 'react-icons/fa';

export default function ProcessWorkflow() {
  const steps = [
    { icon: <FaTruck size={32} />, title: "1. Send Case", desc: "Free pick-up in Abu Dhabi & Dubai. Use Aramex for international shipping." },
    { icon: <FaFlask size={32} />, title: "2. Expert Fabrication", desc: "Certified technicians craft your case using the latest microscopes and CAD/CAM tech." },
    { icon: <FaTooth size={32} />, title: "3. Deliver & Fit", desc: "Predictable, profitable, and zero-defect restorations delivered right to your clinic." },
  ];

  return (
    <section className="py-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-primary dark:text-white mb-4">Simple 3-Step Process</h2>
          <p className="text-gray-600 dark:text-gray-400">From impression to perfect fit.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gray-200 dark:bg-gray-700 z-0"></div>
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-accent dark:bg-primary/20 rounded-full flex items-center justify-center text-primary dark:text-secondary mb-6 border-4 border-white dark:border-dark shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold dark:text-white mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}