import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Faculty = () => {
  const hodRef = useRef(null);
  const facultyRef = useRef(null);
  const hodInView = useInView(hodRef, { once: true, margin: "-100px" });
  const facultyInView = useInView(facultyRef, { once: true, margin: "-100px" });

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
    <div className="w-[80%] mx-auto mt-20">
      <motion.div
        ref={hodRef}
        initial={{ opacity: 0, y: 20 }}
        animate={hodInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl">HOD's Message</h1>
      </motion.div>
      
      <motion.div 
        className="flex flex-row justify-center items-center gap-10 my-10"
        initial={{ opacity: 0, y: 20 }}
        animate={hodInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div 
          className="flex flex-col justify-center items-center gap-5"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div 
            className="w-28 h-28 bg-white rounded-full"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          />
          <div className="text-center">
            <h1 className="text-xl font-semibold">Dr. Milind Sarode Sir</h1>
            <p className="text-gray-500">HOD, Department of Computer Engineering</p>
          </div>
        </motion.div>

        <motion.div 
          className="w-[75%] flex flex-col gap-5"
          initial={{ opacity: 0, x: 20 }}
          animate={hodInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-quote mt-10 mb-3"
            initial={{ opacity: 0, scale: 0 }}
            animate={hodInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
            <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
          </motion.svg>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={hodInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Welcome to the Department of Computer Engineering at Government
            Polytechnic, Nagpur! Our department is dedicated to fostering
            innovation, technical excellence, and problem-solving skills among
            students. Through a blend of theoretical knowledge and practical
            exposure, we strive to equip our students with the skills needed to
            excel in the ever-evolving tech industry.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={hodInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            We take pride in our state-of-the-art facilities, experienced
            faculty, and an industry-relevant curriculum designed to prepare
            students for real-world challenges. Whether you are a prospective
            student, a researcher, or an industry professional, we invite you to
            collaborate with us in shaping the future of technology.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div 
        ref={facultyRef}
        className="mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={facultyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl mb-12">Our Faculty</h1>
        <motion.div 
          className="flex flex-wrap justify-center gap-10 mb-10"
          variants={containerVariants}
          initial="hidden"
          animate={facultyInView ? "visible" : "hidden"}
        >
          {[
            { name: "Prof. Anita Patil", role: "Associate Professor" },
            { name: "Prof. Rajesh Kumar", role: "Assistant Professor" },
            { name: "Prof. Sunita Sharma", role: "Assistant Professor" },
            { name: "Prof. Deepak Verma", role: "Assistant Professor" },
            { name: "Prof. Priya Deshmukh", role: "Assistant Professor" }
          ].map((faculty, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-24 h-24 bg-white rounded-full mb-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <h2 className="text-xl font-semibold">{faculty.name}</h2>
              <p className="text-gray-500">{faculty.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Faculty;
