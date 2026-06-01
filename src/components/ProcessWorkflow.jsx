import { motion } from 'framer-motion';
import { FaTruck, FaTooth, FaFlask } from 'react-icons/fa';

export default function ProcessWorkflow() {
  const steps = [
    { icon: <FaTruck size={28} />, title: '1. Send Case', desc: 'Free pick-up in Abu Dhabi & Dubai. Use Aramex for international shipping.' },
    { icon: <FaFlask size={28} />, title: '2. Expert Fabrication', desc: 'Certified technicians craft your case using the latest microscopes and CAD/CAM tech.' },
    { icon: <FaTooth size={28} />, title: '3. Deliver & Fit', desc: 'Predictable, profitable, and zero-defect restorations delivered right to your clinic.' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-secondary mb-3">How it works</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary dark:text-white mb-4">Simple, reliable delivery in three steps</h2>
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">From lab intake to final delivery, our workflow is transparent, fast, and built for repeatable success.</p>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="hidden md:block absolute inset-x-16 top-1/2 h-px bg-slate-200 dark:bg-slate-700"></div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative z-10 rounded-[2rem] border border-slate-200/80 bg-slate-50 p-10 text-center shadow-2xl transition hover:-translate-y-2 hover:border-primary dark:border-slate-700 dark:bg-slate-950"
            >
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">{step.title}</h3>
              <p className="mx-auto max-w-md text-gray-600 dark:text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
