import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import AdventureSection from "../components/AdventureSection";
import Preloader from "../Components/Preloader/preloader";

console.log('Home component rendering');

const Home = () => {
<<<<<<< HEAD
  // All hooks at the top level
=======
  // Initialize loading state to true on every mount/refresh
>>>>>>> a7c68320c834c0cb746a9c0d6774dc01cc86bc5f
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  
  useEffect(() => {
<<<<<<< HEAD
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds for loading
  
    return () => clearTimeout(timer);
  }, []);
=======
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1700);
  
      return () => clearTimeout(timer);
    }
  }, [loading]);
>>>>>>> a7c68320c834c0cb746a9c0d6774dc01cc86bc5f
  
  const handleNavigate = (path) => {
    if (user) {
      navigate(path);
    } else {
      navigate('/login');
    }
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0a0b1d]">
      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center text-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/images/bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold">
            Bring your imagination to{" "}
            <span className="text-yellow-400">life, without limits.</span>
          </h1>
          <p className="text-lg md:text-2xl mt-4 text-gray-300">
            Between a helpful co-writer and an easy-to-use image generator,
            <br /> Kahani AI offers the tools to unlock your creative potential.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => handleNavigate('/donate')}
              className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition transform duration-300"
            >
              Generate Images
            </button>
            <button
              onClick={() => handleNavigate('/map')}
              className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition transform duration-300"
            >
              Create Stories
            </button>
          </div>
        </motion.div>
      </div>

      <AdventureSection />
    </div>
  );
};

export default Home;