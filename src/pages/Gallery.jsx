import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaTimes, FaSearchPlus } from 'react-icons/fa';

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg', category: 'Crowns', title: 'Zirconia Crown' },
  { id: 2, src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg', category: 'Veneers', title: 'Laminate Veneers' },
  { id: 3, src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg', category: 'Lab', title: 'Digital Workflow' },
  { id: 4, src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?crop=entropy&cs=tinysrgb&fit=max&fm=jpg', category: 'Crowns', title: 'PFM Bridge' },
  { id: 5, src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg', category: 'Lab', title: 'Microscope Check' },
  { id: 6, src: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg', category: 'Veneers', title: 'Smile Design' },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Crowns', 'Veneers', 'Lab'];
  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <div className="pt-32 pb-20 bg-accent dark:bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary dark:text-white mb-4">Our Gallery</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Every single tooth is a piece of art.</p>
          
          <div className="flex justify-center gap-4">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${filter === cat ? 'bg-primary text-white' : 'glass dark:text-white hover:bg-white dark:hover:bg-gray-800'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="columns-1 md:columns-3 gap-6 space-y-6">
          {filteredImages.map((img) => (
            <motion.div 
              layout
              key={img.id} 
              className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid"
              onClick={() => setSelectedImg(img)}
            >
              <motion.img 
                src={img.src} 
                alt={img.title} 
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center text-white">
                  <FaSearchPlus className="mx-auto mb-2 text-3xl" />
                  <h3 className="text-xl font-bold">{img.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedImg && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-6 right-6 text-white text-3xl"><FaTimes /></button>
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImg.src} 
            alt={selectedImg.title} 
            className="max-w-full max-h-[80vh] rounded-xl shadow-2xl"
          />
        </motion.div>
      )}
    </div>
  );
}