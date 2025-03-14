import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-zinc-900 text-white text-center">
      <motion.h1
        className="text-9xl font-bold text-red-500"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.h2
        className="text-2xl font-semibold mt-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Oops! Page Not Found
      </motion.h2>
      <p className="text-gray-400 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-white text-black rounded-lg text-lg font-semibold hover:bg-[#18181b] hover:text-white hover:border transition"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
