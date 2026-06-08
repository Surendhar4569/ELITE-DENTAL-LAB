import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaTimes, FaSearchPlus, FaPlay } from 'react-icons/fa';

// Dynamically import all images and videos from Elite_Dental_Images folder
const imageModules = import.meta.glob('../assets/Elite_Dental_Images/*.JPG', { eager: true });
const videoModules = import.meta.glob('../assets/Elite_Dental_Images/*.MP4', { eager: true });

// Combine and deduplicate all media files
const allMedia = { ...imageModules, ...videoModules };
const uniqueMedia = Object.entries(allMedia).reduce((acc, [path, module]) => {
  const fileName = path.split('/').pop(); // Get filename from path
  const baseName = fileName.replace(/\(\d+\)\.(JPG|MP4)$/, '.$1'); // Remove (1), (2), etc.
  
  // Keep only if we haven't seen this base name before
  if (!acc.some(item => item.baseName === baseName)) {
    const isVideo = path.endsWith('.MP4');
    acc.push({ path, module, baseName, isVideo });
  }
  return acc;
}, []);

const images = uniqueMedia.map(({ module, isVideo }, index) => {
  return {
    id: index + 1,
    src: module.default,
    isVideo,
    title: `${isVideo ? 'Video' : 'Image'} #${index + 1}`
  };
});


export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Images', 'Videos'];
  const filteredMedia = filter === 'All'
    ? images
    : images.filter((item) => filter === 'Images' ? !item.isVideo : item.isVideo);

  return (
    <div className="pt-32 pb-20 bg-accent dark:bg-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary dark:text-white mb-4">Our Gallery</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Premium dental restorations and procedures</p>
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === f ? 'bg-primary text-white shadow-lg scale-105' : 'glass dark:text-white hover:bg-white dark:hover:bg-gray-800'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="columns-1 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {filteredMedia.map((img) => (
            <motion.div 
              layout
              key={img.id} 
              className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImg(img)}
            >
              {img.isVideo ? (
                <video 
                  src={img.src} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 bg-black"
                  muted
                  loop
                  playsInline
                />
              ) : (
                <motion.img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center text-white">
                  {img.isVideo ? (
                    <>
                      <FaPlay className="mx-auto mb-3 text-3xl" />
                      <h3 className="text-sm font-semibold">Play Video</h3>
                    </>
                  ) : (
                    <>
                      <FaSearchPlus className="mx-auto mb-3 text-3xl" />
                      <h3 className="text-sm font-semibold">View Image</h3>
                    </>
                  )}
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
          className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-6 right-6 text-white text-4xl hover:text-gray-300 transition-colors z-51"><FaTimes /></button>
          {selectedImg.isVideo ? (
            <video 
              src={selectedImg.src}
              controls
              autoPlay
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
            />
          ) : (
            <motion.img 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImg.src} 
              alt={selectedImg.title} 
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
            />
          )}
        </motion.div>
      )}
    </div>
  );
}
