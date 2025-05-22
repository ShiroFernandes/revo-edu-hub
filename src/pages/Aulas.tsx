
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import Layout from '@/components/Layout';
import { useSearchParams } from 'react-router-dom';

// All video data categorized by subject
const allVideos = {
  portugues: [
    {
      id: 1,
      title: 'Introdução à Língua Portuguesa',
      thumbnail: 'https://i.imgur.com/8cmNMnv.jpg',
      description: 'Aprenda os fundamentos básicos da Língua Portuguesa nesta aula introdutória.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '12:34',
      subject: 'Português'
    },
    {
      id: 2,
      title: 'Uso correto da vírgula',
      thumbnail: 'https://i.imgur.com/9lkBhQy.jpg',
      description: 'Descubra as regras para o uso correto da vírgula na língua portuguesa.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '8:21',
      subject: 'Português'
    },
    {
      id: 3,
      title: 'Concordância verbal',
      thumbnail: 'https://i.imgur.com/w5Rytdm.jpg',
      description: 'Aprenda como fazer a concordância verbal corretamente em português.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '15:47',
      subject: 'Português'
    },
    {
      id: 4,
      title: 'Interpretação de texto',
      thumbnail: 'https://i.imgur.com/YwVR7of.jpg',
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
      thumbnail: 'https://i.imgur.com/NRWvt5i.jpg',
      description: 'Aprenda a realizar operações básicas de adição, subtração, multiplicação e divisão.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '14:22',
      subject: 'Matemática'
    },
    {
      id: 6,
      title: 'Equações do 1º Grau',
      thumbnail: 'https://i.imgur.com/2JVCPUI.jpg',
      description: 'Como resolver equações do primeiro grau passo a passo.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '10:45',
      subject: 'Matemática'
    }
  ],
  historia: [
    {
      id: 7,
      title: 'Brasil Colônia',
      thumbnail: 'https://i.imgur.com/8QZHpHm.jpg',
      description: 'A história do Brasil durante o período colonial português.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '18:30',
      subject: 'História'
    }
  ],
  geografia: [
    {
      id: 8,
      title: 'Clima e Vegetação do Brasil',
      thumbnail: 'https://i.imgur.com/yWcx7pt.jpg',
      description: 'Entenda os diferentes climas e biomas presentes no território brasileiro.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '16:05',
      subject: 'Geografia'
    }
  ],
  quimica: [
    {
      id: 9,
      title: 'Tabela Periódica',
      thumbnail: 'https://i.imgur.com/ZHn6YNO.jpg',
      description: 'Aprenda sobre a organização e características dos elementos na tabela periódica.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '15:40',
      subject: 'Química'
    }
  ],
  fisica: [
    {
      id: 10,
      title: 'Leis de Newton',
      thumbnail: 'https://i.imgur.com/kXw3L3j.jpg',
      description: 'Entenda as três leis do movimento formuladas por Isaac Newton.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '17:20',
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

const Aulas = () => {
  const [searchParams] = useSearchParams();
  const [openVideo, setOpenVideo] = useState<(typeof allVideos)[keyof typeof allVideos][0] | null>(null);
  const [videos, setVideos] = useState<(typeof allVideos)[keyof typeof allVideos]>([]);
  const [currentSubject, setCurrentSubject] = useState<string>('portugues');
  
  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    const validSubject = subjectParam && subjectMap[subjectParam as keyof typeof subjectMap] 
      ? subjectMap[subjectParam as keyof typeof subjectMap]
      : 'portugues';
      
    setCurrentSubject(validSubject);
    setVideos(allVideos[validSubject as keyof typeof allVideos] || allVideos.portugues);
  }, [searchParams]);

  return (
    <Layout>
      <div className="revo-container py-10">
        <h1 className="revo-page-title">Aulas de {subjectDisplayNames[currentSubject as keyof typeof subjectDisplayNames]}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="revo-card overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 text-xs rounded">
                  {video.duration}
                </span>
                <span className="absolute top-2 left-2 bg-revo-purple bg-opacity-80 text-white px-2 py-1 text-xs rounded">
                  {video.subject}
                </span>
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <p className="text-gray-600 mb-4">{video.description}</p>
                <Button 
                  onClick={() => setOpenVideo(video)}
                  className="revo-button w-full"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Assistir Aula
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={openVideo !== null} onOpenChange={(open) => !open && setOpenVideo(null)}>
        <DialogContent className="sm:max-w-4xl">
          <div className="aspect-video w-full">
            {openVideo && (
              <iframe
                src={openVideo.videoUrl}
                title={openVideo.title}
                className="w-full h-full rounded-md"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          {openVideo && (
            <div className="mt-4">
              <h2 className="text-2xl font-bold">{openVideo.title}</h2>
              <p className="text-gray-600 mt-2">{openVideo.description}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Aulas;
