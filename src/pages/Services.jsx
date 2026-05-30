import { motion } from 'framer-motion';
import { FaTooth, FaCrown, FaTeethOpen, FaShieldAlt } from 'react-icons/fa';

const serviceItems = [
  'Crown and Bridges Work',
  'Galvano Crown',
  'Laminate Veneers',
  'Inlays & Onlays',
  'Zirconia Crown & Bridges',
  'Implants and attachments',
  'Removable Prosthetics',
  'Splints',
  'Diagnostic Waxing',
  'Night Guards',
  'Bleaching Trays',
  'Orthodontic Appliances / Bite Opener',
  'Post & Core',
  'All Kind of Provisional',
  'Full Gold Crowns and Restorations',
  'Athletic Mouth Guards',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Services() {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary dark:text-white mb-4">Our Services</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">A complete range of restorations and appliances designed for accurate function, lasting durability, and refined esthetics.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {serviceItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="glass p-6 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-3 mb-4 text-secondary text-2xl">
                {index % 4 === 0 && <FaCrown />}
                {index % 4 === 1 && <FaTooth />}
                {index % 4 === 2 && <FaTeethOpen />}
                {index % 4 === 3 && <FaShieldAlt />}
                <span className="text-lg font-semibold text-primary dark:text-white">{item}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-16 text-gray-700 dark:text-gray-300">
          <section className="glass p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-6">Crown and Bridges Work</h2>
            <p className="mb-4">Porcelain fused to metal restorations that exhibit true opalescence and natural fluorescence. These restorations are designed to deliver exceptional strength, beautiful shading, and lasting fit.</p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Metal High Precious</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>DeguDent G (yellow gold)</li>
                  <li>DeguDent U (white gold)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Metal Semi Precious</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>DeguDent DEVA4® (white gold)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Metal Non Precious</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Heranium® (Heraeus Kulzer)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="glass p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-6">Galvano Crown</h2>
            <p className="mb-4">Electroforming technology from Heraeus Kulzer using the Preciano IQ machine for highly accurate, biocompatible copings with outstanding fit and longevity.</p>
          </section>

          <section className="glass p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-6">Laminate Veneers</h2>
            <p className="mb-4">Pure porcelain restorations delivering natural-looking esthetics. Our laminate veneers are crafted for thin, durable coverage that enhances smiles with lifelike translucency.</p>
          </section>

          <section className="glass p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-6">Inlays & Onlays</h2>
            <p className="mb-4">Indirect inlays and onlays fabricated with porcelain or composite resin provide patients with natural-looking esthetic results and reinforce tooth structure.</p>
            <p className="mb-4">The durable materials used in these restorations can last up to 30 years, much longer than conventional fillings. Unlike metal fillings, they do not expand or contract with temperature changes caused by hot or cold foods.</p>
          </section>

          <section className="glass p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-6">Zirconia Crown & Bridges</h2>
            <p className="mb-4">Free metal work to exceed your expectations with Zirconia.</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Superior esthetics</li>
              <li>Highest flexural strength (1400 Mpa)</li>
              <li>Highest translucency</li>
              <li>Suitable for implant abutments and bridges up to 14 units</li>
              <li>Suitable for all kinds of preparation</li>
            </ul>
          </section>

          <section className="glass p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-6">Implants and Attachments</h2>
            <p className="mb-4">Our ability to integrate clinical work and lab aspects of implant dentistry ensures confident, predictable results.</p>
            <p className="mb-4">Our experienced implant staff will work with you at every step, from case planning through construction of the prosthetic appliance.</p>
            <p className="mb-4 font-semibold text-secondary">Our Suppliers:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>Bredent (attachments)</li>
              <li>Bego (attachments)</li>
              <li>Nobel Biocare</li>
              <li>Straumann</li>
              <li>SEMADOS</li>
              <li>BIOHORIZONS</li>
              <li>Lifecore Dental</li>
              <li>THOMMEN</li>
              <li>3I</li>
            </ul>
          </section>

          <section className="glass p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-6">Removable Prosthetics</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>Titanium Frame</li>
              <li>Chrome Cobalt Frame & Acrylic</li>
              <li>Galvano Plate</li>
              <li>Flexible Acrylic</li>
              <li>Telescopic bars</li>
              <li>Telescopic crowns</li>
            </ul>
            <p>We support case planning, design, and estimation so there are no surprises for you or your patient. Predictable and profitable treatment begins with careful planning.</p>
          </section>

          <section className="glass p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-6">Splints</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
              <li>Horseshoe Splint</li>
              <li>Impact Splint</li>
              <li>Hard/Soft Splint</li>
              <li>Pankey Splint</li>
            </ul>
            <p>Custom splints built for patient comfort, stabilization, and long-term durability.</p>
          </section>

          <section className="glass p-8 rounded-3xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl font-display font-bold text-primary dark:text-white mb-6">Snoring Device</h2>
            <p className="mb-4">A comfortable and effective oral appliance solution for snoring and sleep-disordered breathing.</p>
            <p className="font-semibold text-secondary mb-3">Indications</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Comfortable</li>
              <li>Healthy sleep</li>
              <li>Natural breathing</li>
              <li>Soft and flexible material</li>
              <li>Non-toxic material</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
