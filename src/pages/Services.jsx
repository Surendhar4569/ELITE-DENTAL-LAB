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

// Detailed service data with images
const servicesDetail = [
  {
    id: 'crowns',
    title: 'Crown and Bridges Work',
    description: 'Porcelain fused to metal restorations that exhibit true opalescence and natural fluorescence. These restorations are designed to deliver exceptional strength, beautiful shading, and lasting fit.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subSections: [
      { title: 'Metal High Precious', items: ['DeguDent G (yellow gold)', 'DeguDent U (white gold)'] },
      { title: 'Metal Semi Precious', items: ['DeguDent DEVA4® (white gold)'] },
      { title: 'Metal Non Precious', items: ['Heranium® (Heraeus Kulzer)'] }
    ]
  },
  {
    id: 'galvano',
    title: 'Galvano Crown',
    description: 'Electroforming technology from Heraeus Kulzer using the Preciano IQ machine for highly accurate, biocompatible copings with outstanding fit and longevity.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subSections: []
  },
  {
    id: 'veneers',
    title: 'Laminate Veneers',
    description: 'Pure porcelain restorations delivering natural-looking esthetics. Our laminate veneers are crafted for thin, durable coverage that enhances smiles with lifelike translucency.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subSections: []
  },
  {
    id: 'inlays',
    title: 'Inlays & Onlays',
    description: 'Indirect inlays and onlays fabricated with porcelain or composite resin provide patients with natural-looking esthetic results and reinforce tooth structure. The durable materials used in these restorations can last up to 30 years, much longer than conventional fillings.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subSections: []
  },
  {
    id: 'zirconia',
    title: 'Zirconia Crown & Bridges',
    description: 'Free metal work to exceed your expectations with Zirconia.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Superior esthetics', 'Highest flexural strength (1400 Mpa)', 'Highest translucency', 'Suitable for implant abutments and bridges up to 14 units', 'Suitable for all kinds of preparation']
  },
  {
    id: 'implants',
    title: 'Implants and Attachments',
    description: 'Our ability to integrate clinical work and lab aspects of implant dentistry ensures confident, predictable results. Our experienced implant staff will work with you at every step, from case planning through construction of the prosthetic appliance.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    suppliers: ['Bredent', 'Bego', 'Nobel Biocare', 'Straumann', 'SEMADOS', 'BIOHORIZONS', 'Lifecore Dental', 'THOMMEN', '3I']
  },
  {
    id: 'removable',
    title: 'Removable Prosthetics',
    description: 'We support case planning, design, and estimation so there are no surprises for you or your patient. Predictable and profitable treatment begins with careful planning.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    items: ['Titanium Frame', 'Chrome Cobalt Frame & Acrylic', 'Galvano Plate', 'Flexible Acrylic', 'Telescopic bars', 'Telescopic crowns']
  },
  {
    id: 'splints',
    title: 'Splints',
    description: 'Custom splints built for patient comfort, stabilization, and long-term durability.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    items: ['Horseshoe Splint', 'Impact Splint', 'Hard/Soft Splint', 'Pankey Splint']
  },
  {
    id: 'snoring',
    title: 'Snoring Device',
    description: 'A comfortable and effective oral appliance solution for snoring and sleep-disordered breathing.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Comfortable', 'Healthy sleep', 'Natural breathing', 'Soft and flexible material', 'Non-toxic material']
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Services() {
  const getIcon = (index) => {
    const icons = [FaCrown, FaTooth, FaTeethOpen, FaShieldAlt];
    return icons[index % icons.length];
  };

  return (
    <div className="pt-32 pb-28 bg-white dark:bg-dark relative min-h-screen">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
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
            What We Offer
          </motion.span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary dark:text-white mb-6">
            Our Services
          </h1>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A complete range of restorations and appliances designed for accurate function, lasting durability, and refined esthetics.
          </p>
        </motion.div>

        {/* Services Grid - Quick Overview */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid gap-3 md:grid-cols-3 lg:grid-cols-4 mb-20"
        >
          {serviceItems.map((item, index) => {
            const Icon = getIcon(index);
            return (
              <div
                key={index}
                className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <Icon className="text-secondary text-sm" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Detailed Services - Alternating Layout */}
        <div className="space-y-16">
          {servicesDetail.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-8 items-center rounded-2xl overflow-hidden"
            >
              {/* On mobile: Text first, then image */}
              {/* On desktop: Alternating layout */}
              <div className="w-full flex flex-col lg:flex-row lg:items-center gap-8">
                {/* Content - Always first on mobile, alternates on desktop */}
                <div className={`lg:w-1/2 order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        {getIcon(index)}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-primary dark:text-white">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Sub sections if any */}
                    {service.subSections && service.subSections.length > 0 && (
                      <div className="grid md:grid-cols-3 gap-4 pt-2">
                        {service.subSections.map((sub, idx) => (
                          <div key={idx}>
                            <h3 className="font-semibold text-secondary text-sm mb-2">{sub.title}</h3>
                            <ul className="space-y-1">
                              {sub.items.map((item, i) => (
                                <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                  <span className="w-1 h-1 rounded-full bg-secondary" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Features list */}
                    {service.features && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.features.map((feature, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Items list */}
                    {service.items && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.items.map((item, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300">
                            {item}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Suppliers list */}
                    {service.suppliers && (
                      <div>
                        <p className="font-semibold text-secondary mb-2 text-sm">Our Suppliers:</p>
                        <div className="flex flex-wrap gap-2">
                          {service.suppliers.map((supplier, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300">
                              {supplier}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Image - Second on mobile, alternates on desktop */}
                <div className={`lg:w-1/2 order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}