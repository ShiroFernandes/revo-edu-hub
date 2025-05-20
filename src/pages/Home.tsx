
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Video, List, Pencil, Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';

const Home = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [showLibrasTranslator, setShowLibrasTranslator] = useState(false);

  const toggleLibrasTranslator = () => {
    setShowLibrasTranslator(!showLibrasTranslator);
    // In a real application, this would activate the VLibras translator
    // For this demo, we'll just show a message
    alert("Em uma aplicação real, isso ativaria o tradutor de Libras.");
  };

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

  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=1920&q=80",
      alt: "Pessoas usando tecnologia assistiva estudando juntas"
    },
    {
      src: "https://images.unsplash.com/photo-1510227272981-87123e259b17?auto=format&fit=crop&w=1920&q=80",
      alt: "Estudante sorrindo enquanto usa um laptop"
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80",
      alt: "Grupo de pessoas diversas colaborando em uma mesa de estudos"
    },
    {
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80",
      alt: "Pessoas diversas em uma reunião de estudo"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-hidden">
      <Header />
      
      {/* Background Carousel with Overlay */}
      <div className="absolute inset-0 z-0">
        <Carousel className="w-full h-full" opts={{ loop: true, duration: 20 }}>
          <CarouselContent className="h-full">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div 
                  className="w-full h-full bg-cover bg-center" 
                  style={{ 
                    backgroundImage: `url(${image.src})`,
                  }}
                  aria-label={image.alt}
                  role="img"
                >
                  {/* Dark overlay */}
                  <div className="w-full h-full bg-black/40" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      <main className="flex-grow relative z-10">
        <div className="revo-container py-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 bg-revo-purple rounded-xl p-6 shadow-lg"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Seja bem-vindo ao <span className="font-bold">REVO</span>
            </h1>
            <p className="text-lg md:text-xl text-white">
              Sua plataforma acessível para aprender Língua Portuguesa de forma interativa
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
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate('/aulas')}
              role="button"
              aria-label="Ir para página de aulas"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-revo-purple rounded-full flex items-center justify-center mb-4">
                  <Book size={28} className="text-gray-800" aria-hidden="true" />
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
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate('/quiz')}
              role="button"
              aria-label="Ir para página de quiz"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-revo-purple rounded-full flex items-center justify-center mb-4">
                  <List size={28} className="text-gray-800" aria-hidden="true" />
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
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate('/videos')}
              role="button"
              aria-label="Ir para página de vídeos"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-revo-purple rounded-full flex items-center justify-center mb-4">
                  <Video size={28} className="text-gray-800" aria-hidden="true" />
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
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate('/exercicios')}
              role="button"
              aria-label="Ir para página de exercícios"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-revo-purple rounded-full flex items-center justify-center mb-4">
                  <Pencil size={28} className="text-gray-800" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Exercícios</h3>
                <p className="text-gray-600">Pratique com exercícios de Língua Portuguesa</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Libras Icon (Fixed Position) */}
      <Button 
        onClick={toggleLibrasTranslator}
        className="fixed bottom-4 right-4 z-50 rounded-full w-16 h-16 flex items-center justify-center bg-revo-purple hover:bg-revo-purple-dark shadow-lg"
        aria-label="Ativar tradutor de Libras"
      >
        <Accessibility size={isMobile ? 24 : 32} className="text-gray-800" />
      </Button>

      <footer className="bg-white border-t border-gray-200 py-6 relative z-10">
        <div className="revo-container">
          <p className="text-center text-gray-500">© 2025 REVO Plataforma Educacional</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
