
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Play, Sparkles, Star, Heart, Zap, Crown } from 'lucide-react';
import Layout from '@/components/Layout';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// All video data categorized by subject
const allVideos = {
  portugues: [
    {
      id: 1,
      title: 'Introdução à Língua Portuguesa',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Aprenda os fundamentos básicos da Língua Portuguesa nesta aula introdutória.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '12:34',
      subject: 'Português'
    },
    {
      id: 2,
      title: 'Uso correto da vírgula',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Descubra as regras para o uso correto da vírgula na língua portuguesa.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '8:21',
      subject: 'Português'
    },
    {
      id: 3,
      title: 'Concordância verbal',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Aprenda como fazer a concordância verbal corretamente em português.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '15:47',
      subject: 'Português'
    },
    {
      id: 4,
      title: 'Interpretação de texto',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Técnicas e estratégias para melhorar sua capacidade de interpretação de texto.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '20:15',
      subject: 'Português'
    }
  ],
  matematica: [
    {
      id: 5,
      title: 'Operações Básicas de Matemática',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Aprenda a realizar operações básicas de adição, subtração, multiplicação e divisão.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '14:22',
      subject: 'Matemática'
    },
    {
      id: 6,
      title: 'Equações do 1º Grau',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Como resolver equações do primeiro grau passo a passo.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '10:45',
      subject: 'Matemática'
    },
    {
      id: 7,
      title: 'Funções Lineares',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Entenda o conceito de funções lineares e como representá-las graficamente.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '18:30',
      subject: 'Matemática'
    },
    {
      id: 8,
      title: 'Geometria Básica',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Formas geométricas, perímetros e áreas explicados de forma simples.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '16:05',
      subject: 'Matemática'
    }
  ],
  historia: [
    {
      id: 9,
      title: 'Brasil Colônia',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'A história do Brasil durante o período colonial português.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '18:30',
      subject: 'História'
    },
    {
      id: 10,
      title: 'Independência do Brasil',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Os eventos que levaram à independência do Brasil em 1822.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '15:40',
      subject: 'História'
    },
    {
      id: 11,
      title: 'Segunda Guerra Mundial',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'As causas, desenvolvimento e consequências da Segunda Guerra Mundial.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '22:15',
      subject: 'História'
    },
    {
      id: 12,
      title: 'Revolução Industrial',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Como a Revolução Industrial transformou a sociedade mundial.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '19:45',
      subject: 'História'
    }
  ],
  geografia: [
    {
      id: 13,
      title: 'Clima e Vegetação do Brasil',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Entenda os diferentes climas e biomas presentes no território brasileiro.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '16:05',
      subject: 'Geografia'
    },
    {
      id: 14,
      title: 'Relevo Brasileiro',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Características do relevo brasileiro: planaltos, planícies e depressões.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '14:20',
      subject: 'Geografia'
    },
    {
      id: 15,
      title: 'Hidrografia do Brasil',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'As principais bacias hidrográficas brasileiras e sua importância.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '17:30',
      subject: 'Geografia'
    },
    {
      id: 16,
      title: 'Urbanização Mundial',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'O processo de urbanização e seus impactos no mundo moderno.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '20:10',
      subject: 'Geografia'
    }
  ],
  quimica: [
    {
      id: 17,
      title: 'Tabela Periódica',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Aprenda sobre a organização e características dos elementos na tabela periódica.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '15:40',
      subject: 'Química'
    },
    {
      id: 18,
      title: 'Ligações Químicas',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Entenda os tipos de ligações químicas: iônicas, covalentes e metálicas.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '18:25',
      subject: 'Química'
    },
    {
      id: 19,
      title: 'Reações Químicas',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Como identificar e balancear reações químicas básicas.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '16:50',
      subject: 'Química'
    },
    {
      id: 20,
      title: 'Estados da Matéria',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Sólido, líquido, gasoso: propriedades e mudanças de estado.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '13:15',
      subject: 'Química'
    }
  ],
  fisica: [
    {
      id: 21,
      title: 'Leis de Newton',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Entenda as três leis do movimento formuladas por Isaac Newton.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '17:20',
      subject: 'Física'
    },
    {
      id: 22,
      title: 'Cinemática',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Movimento uniforme, aceleração e movimento retilíneo.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '19:30',
      subject: 'Física'
    },
    {
      id: 23,
      title: 'Energia e Trabalho',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Conceitos fundamentais de energia cinética, potencial e trabalho.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '21:45',
      subject: 'Física'
    },
    {
      id: 24,
      title: 'Óptica Básica',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Luz, reflexão, refração e formação de imagens.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '14:55',
      subject: 'Física'
    }
  ]
};

// Map URL parameters to subject keys
const subjectMap = {
  'portugues': 'portugues',
  'matematica': 'matematica',
  'historia': 'historia',
  'geografia': 'geografia',
  'quimica': 'quimica',
  'fisica': 'fisica'
};

// Map subject keys to display names
const subjectDisplayNames = {
  'portugues': 'Português',
  'matematica': 'Matemática',
  'historia': 'História',
  'geografia': 'Geografia',
  'quimica': 'Química',
  'fisica': 'Física'
};

// Easter egg messages
const easterEggMessages = [
  "🎉 Você encontrou o primeiro easter egg! 🎉",
  "⭐ Parabéns! Segundo easter egg descoberto! ⭐",
  "💜 Terceiro easter egg! Você está arrasando! 💜",
  "⚡ Quarto easter egg! Você é um explorador nato! ⚡",
  "👑 Easter egg final! Você é o mestre dos segredos! 👑"
];

const Aulas = () => {
  const [searchParams] = useSearchParams();
  const [openVideo, setOpenVideo] = useState<(typeof allVideos)[keyof typeof allVideos][0] | null>(null);
  const [videos, setVideos] = useState<(typeof allVideos)[keyof typeof allVideos]>([]);
  const [currentSubject, setCurrentSubject] = useState<string>('portugues');
  
  // Easter egg states
  const [titleClickCount, setTitleClickCount] = useState(0);
  const [logoSpinCount, setLogoSpinCount] = useState(0);
  const [konami, setKonami] = useState<string[]>([]);
  const [discoveredEggs, setDiscoveredEggs] = useState<number[]>([]);
  const [showEasterEgg, setShowEasterEgg] = useState<{show: boolean, message: string, icon: React.ReactNode}>({
    show: false,
    message: '',
    icon: null
  });
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([]);
  
  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    const validSubject = subjectParam && subjectMap[subjectParam as keyof typeof subjectMap] 
      ? subjectMap[subjectParam as keyof typeof subjectMap]
      : 'portugues';
      
    setCurrentSubject(validSubject);
    setVideos(allVideos[validSubject as keyof typeof allVideos] || allVideos.portugues);
  }, [searchParams]);

  // Easter egg functions
  const showEasterEggMessage = (eggNumber: number, icon: React.ReactNode) => {
    if (!discoveredEggs.includes(eggNumber)) {
      setDiscoveredEggs(prev => [...prev, eggNumber]);
      setShowEasterEgg({
        show: true,
        message: easterEggMessages[eggNumber - 1],
        icon
      });
      setTimeout(() => setShowEasterEgg({show: false, message: '', icon: null}), 3000);
    }
  };

  // Easter Egg 1: Click no título
  const handleTitleClick = () => {
    setTitleClickCount(prev => prev + 1);
    if (titleClickCount >= 2) {
      showEasterEggMessage(1, <Sparkles className="h-6 w-6" />);
      setTitleClickCount(0);
    }
  };

  // Easter Egg 2: Duplo clique na logo
  const handleLogoDoubleClick = () => {
    setLogoSpinCount(prev => prev + 1);
    if (logoSpinCount >= 1) {
      showEasterEggMessage(2, <Star className="h-6 w-6" />);
      setLogoSpinCount(0);
    }
  };

  // Easter Egg 3: Konami Code (ArrowUp, ArrowUp, ArrowDown, ArrowDown)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newKonami = [...konami, e.key].slice(-4);
      setKonami(newKonami);
      
      if (newKonami.join(',') === 'ArrowUp,ArrowUp,ArrowDown,ArrowDown') {
        showEasterEggMessage(3, <Heart className="h-6 w-6" />);
        setKonami([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konami]);

  // Easter Egg 4: Hover em todos os vídeos
  const [hoveredVideos, setHoveredVideos] = useState<Set<number>>(new Set());
  
  const handleVideoHover = (videoId: number) => {
    const newHovered = new Set(hoveredVideos);
    newHovered.add(videoId);
    setHoveredVideos(newHovered);
    
    if (newHovered.size >= videos.length && videos.length > 0) {
      showEasterEggMessage(4, <Zap className="h-6 w-6" />);
    }
  };

  // Easter Egg 5: Clique triplo em qualquer vídeo
  const [videoClickCounts, setVideoClickCounts] = useState<{[key: number]: number}>({});
  
  const handleVideoClick = (videoId: number) => {
    const newCounts = {...videoClickCounts};
    newCounts[videoId] = (newCounts[videoId] || 0) + 1;
    setVideoClickCounts(newCounts);
    
    if (newCounts[videoId] >= 3) {
      showEasterEggMessage(5, <Crown className="h-6 w-6" />);
      newCounts[videoId] = 0;
      setVideoClickCounts(newCounts);
    }
  };

  // Create floating particles
  const createParticles = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newParticles = Array.from({length: 5}, (_, i) => ({
      id: Date.now() + i,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }));
    
    setParticles(prev => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => !newParticles.find(np => np.id === p.id)));
    }, 1000);
  };

  return (
    <Layout>
      <div className="revo-container py-10 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-revo-purple opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-10 w-24 h-24 bg-purple-400 opacity-10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-pink-300 opacity-10 rounded-full animate-float"></div>
        </div>

        {/* Floating particles */}
        <AnimatePresence>
          {particles.map(particle => (
            <motion.div
              key={particle.id}
              initial={{ opacity: 1, scale: 0, x: particle.x, y: particle.y }}
              animate={{ opacity: 0, scale: 1, y: particle.y - 100 }}
              exit={{ opacity: 0 }}
              className="absolute w-4 h-4 bg-gradient-to-r from-revo-purple to-pink-400 rounded-full pointer-events-none z-20"
            />
          ))}
        </AnimatePresence>

        {/* Header with logo and title */}
        <div className="flex items-center justify-center mb-8">
          <motion.img 
            src="/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png" 
            alt="REVO Logo" 
            className="h-16 w-auto mr-4 cursor-pointer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onDoubleClick={handleLogoDoubleClick}
            animate={logoSpinCount > 0 ? { rotate: 360 } : {}}
            transition={{ duration: 0.5 }}
          />
          <motion.h1 
            className="revo-page-title cursor-pointer"
            onClick={handleTitleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseMove={createParticles}
          >
            Aulas de {subjectDisplayNames[currentSubject as keyof typeof subjectDisplayNames]}
          </motion.h1>
        </div>

        {/* Easter egg notification */}
        <AnimatePresence>
          {showEasterEgg.show && (
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.8 }}
              className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full shadow-2xl flex items-center space-x-2"
            >
              {showEasterEgg.icon}
              <span className="font-bold">{showEasterEgg.message}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress indicator for discovered easter eggs */}
        <div className="fixed bottom-4 right-4 z-40">
          <motion.div 
            className="bg-white rounded-full p-3 shadow-lg border-2 border-revo-purple"
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex space-x-1">
              {[1,2,3,4,5].map(num => (
                <div
                  key={num}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    discoveredEggs.includes(num) 
                      ? 'bg-gradient-to-r from-revo-purple to-pink-400' 
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <motion.div 
              key={video.id}
              className="revo-card overflow-hidden flex flex-col group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              onHoverStart={() => handleVideoHover(video.id)}
              onClick={() => handleVideoClick(video.id)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <motion.span 
                  className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded"
                  whileHover={{ scale: 1.1 }}
                >
                  {video.duration}
                </motion.span>
                
                <motion.span 
                  className="absolute top-2 left-2 bg-revo-purple bg-opacity-80 text-white px-2 py-1 text-xs rounded"
                  whileHover={{ scale: 1.1 }}
                >
                  {video.subject}
                </motion.span>

                {/* Play button overlay */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="bg-white bg-opacity-90 rounded-full p-4 shadow-lg">
                    <Play className="h-8 w-8 text-revo-purple" />
                  </div>
                </motion.div>
              </div>
              
              <div className="p-4 flex-grow">
                <motion.h3 
                  className="text-xl font-semibold mb-2 group-hover:text-revo-purple transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {video.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 mb-4"
                  whileHover={{ x: 5 }}
                >
                  {video.description}
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenVideo(video);
                    }}
                    className="revo-button w-full relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <Play className="mr-2 h-4 w-4" />
                    Assistir Aula
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating REVO logos */}
        <div className="fixed top-1/4 left-4 opacity-20 pointer-events-none">
          <motion.img 
            src="/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png" 
            alt="REVO" 
            className="w-12 h-12"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="fixed bottom-1/4 right-8 opacity-20 pointer-events-none">
          <motion.img 
            src="/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png" 
            alt="REVO" 
            className="w-16 h-16"
            animate={{ 
              y: [0, 30, 0],
              rotate: [360, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
      </div>

      <Dialog open={openVideo !== null} onOpenChange={(open) => !open && setOpenVideo(null)}>
        <DialogContent className="sm:max-w-4xl">
          <motion.div 
            className="aspect-video w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {openVideo && (
              <iframe
                src={openVideo.videoUrl}
                title={openVideo.title}
                className="w-full h-full rounded-md"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </motion.div>
          {openVideo && (
            <motion.div 
              className="mt-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold flex items-center">
                <img 
                  src="/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png" 
                  alt="REVO" 
                  className="w-8 h-8 mr-2"
                />
                {openVideo.title}
              </h2>
              <p className="text-gray-600 mt-2">{openVideo.description}</p>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Aulas;
