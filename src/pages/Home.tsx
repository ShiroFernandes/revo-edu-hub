
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Video, List, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Header from '@/components/Header';

const Home = () => {
  const navigate = useNavigate();

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      backgroundColor: "#f9f7fc" // Light purple background on hover
    }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        <div className="revo-container py-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Seja bem-vindo ao <span className="text-revo-purple">REVO</span>
            </h1>
            <p className="text-xl text-gray-600">
              Sua plataforma para aprender Língua Portuguesa de forma interativa
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="revo-card cursor-pointer"
              onClick={() => navigate('/aulas')}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-revo-purple rounded-full flex items-center justify-center mb-4">
                  <Video size={28} className="text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Aula</h3>
                <p className="text-gray-600">Assista nossas aulas de Língua Portuguesa</p>
              </div>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="revo-card cursor-pointer"
              onClick={() => navigate('/quiz')}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-revo-purple rounded-full flex items-center justify-center mb-4">
                  <List size={28} className="text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Quiz</h3>
                <p className="text-gray-600">Teste seus conhecimentos com nossos quizes</p>
              </div>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="revo-card cursor-pointer"
              onClick={() => navigate('/videos')}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-revo-purple rounded-full flex items-center justify-center mb-4">
                  <Video size={28} className="text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Vídeos</h3>
                <p className="text-gray-600">Explore nossa biblioteca de vídeos educativos</p>
              </div>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="revo-card cursor-pointer"
              onClick={() => navigate('/exercicios')}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-revo-purple rounded-full flex items-center justify-center mb-4">
                  <Pencil size={28} className="text-gray-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Exercícios</h3>
                <p className="text-gray-600">Pratique com exercícios de Língua Portuguesa</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="revo-container">
          <p className="text-center text-gray-500">© 2025 REVO Plataforma Educacional</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
