import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function TurnaroundTime() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "General", "Removable", "Crowns", "Implants", "Veneers", "Ortho"];
  
  const filteredData = timeData.filter((d) => {
    const matchesSearch = d.item.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || d.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Group data by category
  const groupedData = {};
  filteredData.forEach((item) => {
    if (!groupedData[item.category]) {
      groupedData[item.category] = [];
    }
    groupedData[item.category].push(item);
  });

  const getDayBadgeClass = (days) => {
    const num = parseInt(days);
    if (num <= 3) return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300";
    if (num <= 5) return "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300";
    return "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300";
  };

  return (
    <div className="pt-32 pb-28 bg-white dark:bg-dark relative min-h-screen">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "8px" }}
            animate={{ opacity: 1, letterSpacing: "4px" }}
            className="inline-block text-secondary text-sm font-semibold tracking-[4px] uppercase mb-4"
          >
            Turnaround Times
          </motion.span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary dark:text-white mb-6">
            Lab Estimated Time
          </h1>
          <div className="w-16 h-0.5 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400">
            6 Days working week · Impression day & delivery day not counted
          </p>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search any procedure..." 
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-dark/30 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="relative">
              <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select 
                className="pl-12 pr-8 py-3 rounded-xl bg-gray-50 dark:bg-dark/30 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-secondary outline-none appearance-none cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Card Grid - No Icons */}
        {Object.keys(groupedData).length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No procedures found matching "{search}"</p>
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(groupedData).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Category Header - Clean typography, no icons */}
                <div className="flex items-center gap-3 mb-5">
                  <h2 className="text-2xl font-bold text-primary dark:text-white">{category}</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-700" />
                  <span className="text-sm text-gray-400">{items.length} procedures</span>
                </div>
                
                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.03 }}
                      whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      className="bg-white dark:bg-dark/40 rounded-xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="flex justify-between items-center gap-3">
                        <div className="flex-1">
                          <p className="text-gray-800 dark:text-gray-200 font-medium text-sm leading-relaxed">
                            {item.item}
                          </p>
                        </div>
                        <div className={`px-3 py-1.5 rounded-lg text-center min-w-[70px] ${getDayBadgeClass(item.days)}`}>
                          <div className="text-lg font-bold leading-none">{item.days}</div>
                          <div className="text-xs opacity-70">Days</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Quick Stats Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span>1-3 days (Express)</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span>4-5 days (Standard)</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-3 h-3 rounded-full bg-orange-500" />
                <span>6-7 days (Complex)</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              * Estimates may vary based on case complexity
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}