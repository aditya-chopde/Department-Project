import { images as importedImages } from "@/assets/exports";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface GalleryImage {
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { src: importedImages.sample, alt: "Example 1" },
  { src: importedImages.sample, alt: "Example 2" },
  { src: importedImages.sample, alt: "Example 3" },
  { src: importedImages.sample, alt: "Example 4" },
  { src: importedImages.sample, alt: "Example 5" },
  { src: importedImages.sample, alt: "Example 6" }
];

const Gallery = () => {
  const titleRef = useRef(null);
  const galleryRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="mt-20">
      <div className="w-[80%] mx-auto my-5">
        <motion.h1 
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl"
        >
          Past Events & Gallery
        </motion.h1>
        
        <motion.div 
          ref={galleryRef}
          className="columns-1 sm:columns-1 md:columns-2 lg:columns-3 p-4 gap-4 my-10"
          variants={containerVariants}
          initial="hidden"
          animate={galleryInView ? "visible" : "hidden"}
        >
          {galleryImages.map((image: GalleryImage, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="break-inside-avoid mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="relative overflow-hidden rounded-lg"
                whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
