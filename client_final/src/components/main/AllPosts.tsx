import API from "@/lib/baseUrl";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface BasePost {
  _id: string;
  title: string;
  description: string;
  name: string;
  department: string;
  status: string;
}

interface TextPost extends BasePost {
  type: "text";
}

interface ImagePost extends BasePost {
  type: "image";
  path: string;
}

type Post = TextPost | ImagePost;

const AllPosts = () => {
  const [textData, setTextData] = useState<TextPost[]>([]);
  const [imageData, setImageData] = useState<ImagePost[]>([]);
  const [final, setFinal] = useState<Post[]>([]);

  // Refs for scroll detection
  const containerRef = useRef(null);
  const containerInView = useInView(containerRef, { once: true, margin: "-100px" });

  const getTextPosts = async () => {
    API.get("/admin/get-text-data").then((res) => {
      const fetchedTextData = res.data.data;
      const filteredTextPosts = fetchedTextData.filter(
        (item: BasePost) => item.status === "Approved"
      );
      setTextData(filteredTextPosts.reverse());
    });
  };

  const getImagePosts = async () => {
    API.get("/admin/get-image-data").then((res) => {
      const fetchedImageData = res.data.data;
      const filteredImagePosts = fetchedImageData.filter(
        (item: BasePost) => item.status === "Approved"
      );
      setImageData(filteredImagePosts.reverse());
    });
  };
  
  useEffect(() => {
    getTextPosts();
    getImagePosts();
  }, []);

  useEffect(() => {
    // Combine both arrays and add a type identifier
    const combinedArray = [
      ...textData.map((item) => ({ ...item, type: "text" as const })),
      ...imageData.map((item) => ({ ...item, type: "image" as const })),
    ];

    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array: Post[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    setFinal(shuffleArray(combinedArray));
  }, [textData, imageData]);

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
    <motion.div 
      ref={containerRef}
      className="w-[85%] mx-auto my-5 mt-24"
      variants={containerVariants}
      initial="hidden"
      animate={containerInView ? "visible" : "hidden"}
    >
      <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-3 p-4">
        {final.map((post, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bggradient-to-r from-[#040b14] to-[#031a2f] rounded-lg shadow-md overflow-hidden my-3 hover:shadow-lg transition-shadow"
            whileHover={{ y: -5 }}
          >
            {post.type === "image" && (
              <div className="p-3">
                <motion.img
                  src={post.path}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-3">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.description}</p>
                  <div className="mt-4 text-sm text-gray-500">
                    <div className="flex flex-row gap-3">
                      <motion.img
                        src="https://github.com/shadcn.png"
                        alt="avatar-image"
                        className="w-5 rounded-full"
                        whileHover={{ scale: 1.1 }}
                      />
                      <p>
                        {post.name} | {post.department}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {post.type === "text" && (
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-300">{post.description}</p>
                <div className="mt-4 text-sm text-gray-500">
                  <div className="flex flex-row gap-3">
                    <motion.img
                      src="https://github.com/shadcn.png"
                      alt="avatar-image"
                      className="w-5 rounded-full"
                      whileHover={{ scale: 1.1 }}
                    />
                    <p>
                      {post.name} | {post.department}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AllPosts;
