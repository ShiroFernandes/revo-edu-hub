
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Video, List, Pencil, Accessibility, Sparkles, Zap } from 'lucide-react';
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
  const [secretClicks, setSecretClicks] = useState(0);

  const toggleLibrasTranslator = () => {
    setShowLibrasTranslator(!showLibrasTranslator);
    alert("Em uma aplicação real, isso ativaria o tradutor de Libras.");
  };

  const handleSecretClick = () => {
    setSecretClicks(prev => prev + 1);
    if (secretClicks >= 9) {
      // Easter egg especial após 10 cliques
      document.body.style.animation = "rainbow 0.5s linear infinite";
      setTimeout(() => {
        document.body.style.animation = "";
        setSecretClicks(0);
      }, 3000);
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
    hover: { 
      scale: 1.05, 
      rotateY: 5,
      boxShadow: "0 25px 50px -12px rgba(214, 193, 232, 0.4)",
      backgroundColor: "#f9f7fc",
      transition: { duration: 0.3 }
    }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3
      } 
    }
  };

  const logoVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        duration: 1
      }
    }
  };

  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1532649842991-60f6a04df35d?auto=format&fit=crop&w=1920&q=80",
      alt: "Pessoa em cadeira de rodas sorrindo enquanto estuda com colegas"
    },
    {
      src: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&w=1920&q=80",
      alt: "Grupo diverso de estudantes incluindo pessoa com deficiência visual"
    },
    {
      src: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?auto=format&fit=crop&w=1920&q=80",
      alt: "Pessoa utilizando linguagem de sinais enquanto ensina"
    },
    {
      src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=1920&q=80",
      alt: "Grupo diverso de pessoas colaborando e sorrindo em ambiente educacional"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white via-purple-50 to-revo-purple-light relative overflow-hidden">
      <Header />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-revo-purple rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-purple-400 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-revo-purple-light rounded-full opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
      
      {/* Background Carousel with Overlay */}
      <div className="absolute inset-0 z-0">
        <Carousel className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent className="h-full">
            {carouselImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div 
                  className="w-full h-full bg-cover bg-center transition-opacity duration-500"
                  style={{ 
                    backgroundImage: `url(${image.src})`,
                  }}
                  aria-label={image.alt}
                  role="img"
                >
                  <div className="w-full h-full bg-gradient-to-br from-black/60 via-black/40 to-purple-900/50" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      <main className="flex-grow relative z-10">
        <div className="revo-container py-10">
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12 bg-gradient-to-r from-revo-purple via-purple-300 to-revo-purple rounded-xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm"
          >
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              className="flex justify-center mb-4"
              onClick={handleSecretClick}
            >
              <img 
                src="/lovable-uploads/c744f552-22a7-4164-876b-debf1ddc29dd.png" 
                alt="REVO Logo" 
                className="h-20 w-auto cursor-pointer easter-egg-trigger"
              />
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Seja bem-vindo ao{' '}
              <motion.span 
                className="gradient-text font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                REVO
              </motion.span>
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block ml-2"
              >
                ✨
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Sua plataforma acessível para aprender{' '}
              <span className="font-semibold text-yellow-200">Língua Portuguesa</span>{' '}
              de forma interativa e divertida
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                icon: <Book size={32} className="text-white" />,
                title: "Aulas",
                description: "Assista nossas aulas interativas de Língua Portuguesa",
                path: "/aulas",
                gradient: "from-blue-500 to-purple-600",
                emoji: "📚"
              },
              {
                icon: <List size={32} className="text-white" />,
                title: "Quiz",
                description: "Teste seus conhecimentos com nossos quizes personalizados",
                path: "/quiz",
                gradient: "from-green-500 to-blue-600",
                emoji: "🧠"
              },
              {
                icon: <Video size={32} className="text-white" />,
                title: "Vídeos",
                description: "Explore nossa biblioteca de vídeos educativos exclusivos",
                path: "/videos",
                gradient: "from-red-500 to-pink-600",
                emoji: "🎬"
              },
              {
                icon: <Pencil size={32} className="text-white" />,
                title: "Exercícios",
                description: "Pratique com exercícios interativos de Língua Portuguesa",
                path: "/exercicios",
                gradient: "from-yellow-500 to-orange-600",
                emoji: "✏️"
              }
            ].map((item, index) => (
              <motion.div 
                key={item.path}
                variants={cardVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl cursor-pointer border border-white/30 overflow-hidden group"
                onClick={() => navigate(item.path)}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigate(item.path)}
                role="button"
                aria-label={`Ir para página de ${item.title.toLowerCase()}`}
              >
                <div className="flex flex-col items-center text-center p-8 relative">
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-2 right-2 text-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatDelay: 2 + index * 0.5 
                    }}
                  >
                    {item.emoji}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-revo-purple transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>
                  
                  <motion.div
                    className="mt-4 flex items-center text-revo-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span className="text-sm font-medium mr-2">Explorar</span>
                    <Zap size={16} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Enhanced Libras Button with animations */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button 
          onClick={toggleLibrasTranslator}
          className="rounded-full w-16 h-16 flex items-center justify-center bg-gradient-to-r from-revo-purple to-purple-600 hover:from-purple-600 hover:to-revo-purple shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white/30"
          aria-label="Ativar tradutor de Libras"
        >
          <Accessibility size={isMobile ? 28 : 32} className="text-white" />
        </Button>
        
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200/50 py-6 relative z-10">
        <div className="revo-container">
          <motion.div
            className="flex items-center justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <img 
              src="/lovable-uploads/c744f552-22a7-4164-876b-debf1ddc29dd.png" 
              alt="REVO Logo" 
              className="h-8 w-auto opacity-70"
            />
            <p className="text-center text-gray-500">© 2025 REVO Plataforma Educacional</p>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-5 w-5 text-revo-purple opacity-50" />
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
