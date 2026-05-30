import { motion } from 'framer-motion';
import { useState } from 'react';

const timeData = [
  { category: "General", item: "Custom Tray", days: "2" },
  { category: "General", item: "Bleaching trays", days: "3" },
  { category: "General", item: "Bite Rims", days: "2" },
  { category: "Removable", item: "Removable Partial denture (Straight to finished)", days: "6" },
  { category: "Removable", item: "Teeth set-up", days: "3" },
  { category: "Removable", item: "Acrylic Process", days: "3" },
  { category: "Removable", item: "Chrome cobalt", days: "7" },
  { category: "Crowns", item: "Temporary Crown (1-6 units)", days: "3" },
  { category: "Crowns", item: "Temporary Crown (7-12 units)", days: "5" },
  { category: "Crowns", item: "Post and Core", days: "3" },
  { category: "Crowns", item: "PFM Crown (1-2 units)", days: "4" },
  { category: "Crowns", item: "PFM Crown (3-7 units)", days: "5" },
  { category: "Crowns", item: "Empress Crown (1-6 units)", days: "5" },
  { category: "Crowns", item: "Zircon Crown (1-2 units)", days: "4" },
  { category: "Crowns", item: "Zircon Crown (3-7 units)", days: "5" },
  { category: "Implants", item: "Implant 1-5 units", days: "5" },
  { category: "Implants", item: "Implant 6-9 units (try in)", days: "5" },
  { category: "Veneers", item: "Veneers (1-4 units)", days: "5" },
  { category: "Veneers", item: "Veneers (5-10 units)", days: "6" },
  { category: "Ortho", item: "All Ortho Appliance", days: "4" },
];

export default function TurnaroundTime() {
  const [search, setSearch] = useState("");

  const filteredData = timeData.filter(d => d.item.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="pt-32 pb-20 bg-accent dark:bg-dark min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary dark:text-white mb-4">Lab Estimated Time</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">6 Days is our working days per week. Impression day and delivery date are not considered working days.</p>
          
          <input 
            type="text" 
            placeholder="Search procedures (e.g. Zircon, Veneer)..." 
            className="w-full md:w-1/2 p-4 rounded-xl glass border-0 focus:ring-2 focus:ring-primary outline-none dark:text-white"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800"
        >
          <div className="grid grid-cols-3 bg-primary text-white p-6 font-bold">
            <div>Category</div>
            <div>Procedure</div>
            <div className="text-right">Working Days</div>
          </div>
          
          {filteredData.length === 0 ? (
            <div className="p-10 text-center text-gray-500">No matching procedures found.</div>
          ) : (
            filteredData.map((d, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03 }}
                className="grid grid-cols-3 p-6 border-b border-gray-100 dark:border-gray-800 hover:bg-accent/50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="text-secondary font-semibold text-sm">{d.category}</div>
                <div className="text-gray-800 dark:text-gray-200">{d.item}</div>
                <div className="text-right font-bold text-primary dark:text-secondary">{d.days} Days</div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
}