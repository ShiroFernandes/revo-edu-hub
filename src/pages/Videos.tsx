
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Play, Star, Heart, Zap } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

// Videos data by subject with REVO logo as thumbnail
const videosBySubject = {
  portugues: [
    {
      id: 1,
      title: 'Interpretação de Texto - Técnicas Avançadas',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Aprenda técnicas avançadas para interpretar diferentes gêneros textuais no ENEM.',
      videoUrl: 'https://www.youtube.com/embed/K12i3cqe_fA',
      duration: '15:20',
      subject: 'Português',
      featured: true
    },
    {
      id: 2,
      title: 'Redação ENEM - Como tirar 1000',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Estratégias e técnicas para conseguir nota máxima na redação do ENEM.',
      videoUrl: 'https://www.youtube.com/embed/dw8yPVAkzz4',
      duration: '18:45',
      subject: 'Português'
    },
    {
      id: 3,
      title: 'Figuras de Linguagem Explicadas',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Metáforas, metonímias e outras figuras de linguagem com exemplos práticos.',
      videoUrl: 'https://www.youtube.com/embed/mvF7LMf4BZ8',
      duration: '12:30',
      subject: 'Português'
    },
    {
      id: 4,
      title: 'Análise Sintática Completa',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Como analisar a estrutura sintática das frases passo a passo.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '14:15',
      subject: 'Português'
    }
  ],
  matematica: [
    {
      id: 5,
      title: 'Equações do 1º Grau - Resolução Completa',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Passo a passo para resolver equações do primeiro grau com exemplos práticos.',
      videoUrl: 'https://www.youtube.com/embed/L2zWP1HaJiI',
      duration: '12:30',
      subject: 'Matemática',
      featured: true
    },
    {
      id: 6,
      title: 'Geometria Plana - Cálculo de Áreas',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Calcule áreas de figuras geométricas planas com fórmulas e exercícios.',
      videoUrl: 'https://www.youtube.com/embed/9IX1WOgVYQQ',
      duration: '16:45',
      subject: 'Matemática'
    },
    {
      id: 7,
      title: 'Funções do 1º Grau e Gráficos',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Entenda o conceito e como construir gráficos de funções lineares.',
      videoUrl: 'https://www.youtube.com/embed/q2Hkp8y_GGQ',
      duration: '18:20',
      subject: 'Matemática'
    },
    {
      id: 8,
      title: 'Teorema de Pitágoras na Prática',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Aplicações práticas do teorema de Pitágoras em problemas do dia a dia.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '13:55',
      subject: 'Matemática'
    }
  ],
  historia: [
    {
      id: 9,
      title: 'Brasil Império - Período Regencial',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Os principais eventos do período imperial brasileiro e suas transformações.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '22:15',
      subject: 'História',
      featured: true
    },
    {
      id: 10,
      title: 'Revolução Francesa - Causas e Consequências',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'As causas e consequências da Revolução Francesa de 1789 para o mundo.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '19:30',
      subject: 'História'
    },
    {
      id: 11,
      title: 'Era Vargas - Estado Novo',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'O período de Getúlio Vargas e suas transformações no Brasil moderno.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '20:45',
      subject: 'História'
    },
    {
      id: 12,
      title: 'Segunda Guerra Mundial',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'O maior conflito da história e suas consequências para o mundo.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '17:25',
      subject: 'História'
    }
  ],
  geografia: [
    {
      id: 13,
      title: 'Biomas Brasileiros - Características',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Conheça os principais biomas do Brasil e suas características únicas.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '16:30',
      subject: 'Geografia',
      featured: true
    },
    {
      id: 14,
      title: 'Placas Tectônicas e Terremotos',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Como as placas tectônicas moldam a superfície terrestre e causam terremotos.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '18:15',
      subject: 'Geografia'
    },
    {
      id: 15,
      title: 'Globalização e Economia Mundial',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Os impactos da globalização na economia e sociedade contemporânea.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '21:40',
      subject: 'Geografia'
    },
    {
      id: 16,
      title: 'Ciclo da Água e Clima',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'O processo de circulação da água na natureza e influência no clima.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '14:20',
      subject: 'Geografia'
    }
  ],
  quimica: [
    {
      id: 17,
      title: 'Tabela Periódica - Propriedades',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Como ler e interpretar a tabela periódica e propriedades dos elementos.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '19:45',
      subject: 'Química',
      featured: true
    },
    {
      id: 18,
      title: 'Ligações Químicas - Tipos e Propriedades',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Iônicas, covalentes e metálicas: tipos de ligações químicas explicadas.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '17:30',
      subject: 'Química'
    },
    {
      id: 19,
      title: 'Reações Químicas - Balanceamento',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Como identificar, classificar e balancear diferentes tipos de reações.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '15:50',
      subject: 'Química'
    },
    {
      id: 20,
      title: 'Ácidos e Bases - pH e Indicadores',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Entenda a escala de pH e como medir acidez e basicidade de substâncias.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '13:25',
      subject: 'Química'
    }
  ],
  fisica: [
    {
      id: 21,
      title: 'Leis de Newton - Aplicações Práticas',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'As três leis de Newton explicadas com exemplos do cotidiano e exercícios.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '14:15',
      subject: 'Física',
      featured: true
    },
    {
      id: 22,
      title: 'Cinemática - Movimento e Velocidade',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Conceitos básicos de cinemática: movimento uniforme e uniformemente variado.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '16:40',
      subject: 'Física'
    },
    {
      id: 23,
      title: 'Energia Mecânica - Conservação',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Energia cinética, potencial e o princípio da conservação de energia.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '18:35',
      subject: 'Física'
    },
    {
      id: 24,
      title: 'Ondas e Fenômenos Sonoros',
      thumbnail: '/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png',
      description: 'Propriedades das ondas sonoras e fenômenos acústicos do dia a dia.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '20:10',
      subject: 'Física'
    }
  ]
};

const subjectDisplayNames = {
  'portugues': 'Português',
  'matematica': 'Matemática',
  'historia': 'História', 
  'geografia': 'Geografia',
  'quimica': 'Química',
  'fisica': 'Física'
};

const Videos = () => {
  const [searchParams] = useSearchParams();
  const [openVideo, setOpenVideo] = useState<(typeof videosBySubject)[keyof typeof videosBySubject][0] | null>(null);
  const [videos, setVideos] = useState<(typeof videosBySubject)[keyof typeof videosBySubject]>([]);
  const [currentSubject, setCurrentSubject] = useState('portugues');
  const [likedVideos, setLikedVideos] = useState<number[]>([]);
  
  useEffect(() => {
    const subjectParam = searchParams.get('subject') || 'portugues';
    const validSubject = videosBySubject[subjectParam as keyof typeof videosBySubject] 
      ? subjectParam 
      : 'portugues';
      
    setCurrentSubject(validSubject);
    setVideos(videosBySubject[validSubject as keyof typeof videosBySubject]);
  }, [searchParams]);

  const toggleLike = (videoId: number) => {
    setLikedVideos(prev => 
      prev.includes(videoId) 
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <Layout>
      <div className="revo-container py-10 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-revo-purple rounded-full opacity-10 -translate-x-16 -translate-y-16 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-revo-purple rounded-full opacity-10 translate-x-24 translate-y-24 animate-pulse"></div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="revo-page-title bg-gradient-to-r from-revo-purple to-purple-600 bg-clip-text text-transparent">
            Vídeos de {subjectDisplayNames[currentSubject as keyof typeof subjectDisplayNames]}
          </h1>
          <motion.div
            className="flex justify-center items-center mt-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
          >
            <img 
              src="/lovable-uploads/838d6cdb-ffae-458d-bcf6-7ff359d5a495.png" 
              alt="REVO Logo" 
              className="h-16 w-auto opacity-80"
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {videos.map((video, index) => (
            <motion.div 
              key={video.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 20px 40px rgba(214, 193, 232, 0.3)",
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col relative group"
            >
              {video.featured && (
                <motion.div
                  className="absolute top-2 left-2 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 text-xs rounded-full flex items-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Star className="h-3 w-3 mr-1" />
                  Destaque
                </motion.div>
              )}
              
              <motion.button
                className="absolute top-2 right-2 z-10 bg-white bg-opacity-80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                onClick={() => toggleLike(video.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Heart 
                  className={`h-4 w-4 ${likedVideos.includes(video.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                />
              </motion.button>

              <div className="relative overflow-hidden">
                <motion.img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-contain bg-gradient-to-br from-revo-purple-light to-revo-purple p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="h-12 w-12 text-white" />
                  </motion.div>
                </motion.div>
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
                  {video.duration}
                </span>
                <span className="absolute bottom-2 left-2 bg-revo-purple bg-opacity-90 text-white px-2 py-1 text-xs rounded">
                  {video.subject}
                </span>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-revo-purple transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow leading-relaxed">{video.description}</p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    onClick={() => setOpenVideo(video)}
                    className="bg-gradient-to-r from-revo-purple to-purple-600 hover:from-purple-600 hover:to-revo-purple text-white w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Play className="h-4 w-4" />
                    Assistir Vídeo
                    <Zap className="h-4 w-4 opacity-70" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={openVideo !== null} onOpenChange={(open) => !open && setOpenVideo(null)}>
        <DialogContent className="sm:max-w-4xl bg-white">
          <motion.div 
            className="aspect-video w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-gray-800">{openVideo.title}</h2>
              <p className="text-gray-600 mt-2">{openVideo.description}</p>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Videos;
