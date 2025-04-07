import API from "@/lib/baseUrl";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Post {
  _id: string;
  title: string;
  description: string;
  name: string;
  department: string;
  status: string;
  path?: string;
}

const PostsSection = () => {
  const [textData, setTextData] = useState<Post[]>([]);
  const [imageData, setImageData] = useState<Post[]>([]);
  
  // Refs for scroll detection
  const titleRef = useRef(null);
  const textPostsRef = useRef(null);
  const imagePostsRef = useRef(null);
  
  // Scroll detection hooks
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const textPostsInView = useInView(textPostsRef, { once: true, margin: "-100px" });
  const imagePostsInView = useInView(imagePostsRef, { once: true, margin: "-100px" });

  const getTextPosts = async () => {
    API.get("/admin/get-text-data").then((res) => {
      const fetchedTextData = res.data.data;
      const filteredTextPosts = fetchedTextData.filter(
        (item: Post) => item.status === "Approved"
      );
      setTextData(filteredTextPosts.reverse().slice(0, 3));
    });
  };

  const getImagePosts = async () => {
    API.get("/admin/get-image-data").then((res) => {
      const fetchedImageData = res.data.data;
      const filteredImagePosts = fetchedImageData.filter(
        (item: Post) => item.status === "Approved"
      );
      setImageData(filteredImagePosts.reverse());
    });
  };

  useEffect(() => {
    getTextPosts();
    getImagePosts();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <div>
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-center text-xl cursor-pointer hover:text-gray-300 transition-colors">
          Posts
        </h1>
      </motion.div>
      
      <div>
        <div className="w-[75%] mx-auto my-5 bg-gradient-to-r from-[#040b14] to-[#031a2f] text-white p-10 rounded-lg">
          <motion.div 
            ref={textPostsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={textPostsInView ? "visible" : "hidden"}
          >
            {textData.map((post: Post, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-black rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.description}</p>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <div className="flex flex-row gap-3 items-center">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src="https://github.com/shadcn.png"
                      alt="avatar-image"
                      className="w-5 rounded-full"
                    />
                    <p>
                      {post.name} | {post.department}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            ref={imagePostsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
            variants={containerVariants}
            initial="hidden"
            animate={imagePostsInView ? "visible" : "hidden"}
          >
            {imageData.map((post: Post, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-black rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-lg transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={post.path}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-sm mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.description}</p>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <div className="flex flex-row gap-3 items-center">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src="https://github.com/shadcn.png"
                      alt="avatar-image" 
                      className="w-5 rounded-full"
                    />
                    <p>
                      {post.name} | {post.department}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PostsSection;
