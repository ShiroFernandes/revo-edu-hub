
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

// Videos data by subject
const videosBySubject = {
  portugues: [
    {
      id: 1,
      title: 'Aula de Interpretação de Texto',
      thumbnail: 'https://i.imgur.com/8cmNMnv.jpg',
      description: 'Aprenda técnicas avançadas para interpretar diferentes gêneros textuais.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '15:20',
      subject: 'Português'
    },
    {
      id: 2,
      title: 'Dicas de Redação para ENEM',
      thumbnail: 'https://i.imgur.com/9lkBhQy.jpg',
      description: 'Estratégias e técnicas para conseguir nota máxima na redação do ENEM.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '18:45',
      subject: 'Português'
    },
    {
      id: 3,
      title: 'Figuras de Linguagem',
      thumbnail: 'https://i.imgur.com/w5Rytdm.jpg',
      description: 'Metáforas, metonímias e outras figuras de linguagem explicadas.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '12:30',
      subject: 'Português'
    },
    {
      id: 4,
      title: 'Análise Sintática',
      thumbnail: 'https://i.imgur.com/YwVR7of.jpg',
      description: 'Como analisar a estrutura sintática das frases.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '14:15',
      subject: 'Português'
    }
  ],
  matematica: [
    {
      id: 5,
      title: 'Como Resolver Equações do 1º Grau',
      thumbnail: 'https://i.imgur.com/w5Rytdm.jpg',
      description: 'Passo a passo para resolver equações do primeiro grau com exemplos práticos.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '12:30',
      subject: 'Matemática'
    },
    {
      id: 6,
      title: 'Geometria Plana - Áreas',
      thumbnail: 'https://i.imgur.com/YwVR7of.jpg',
      description: 'Calcule áreas de figuras geométricas planas com facilidade.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '16:45',
      subject: 'Matemática'
    },
    {
      id: 7,
      title: 'Funções do 1º Grau',
      thumbnail: 'https://i.imgur.com/8cmNMnv.jpg',
      description: 'Entenda o conceito e como construir gráficos de funções lineares.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '18:20',
      subject: 'Matemática'
    },
    {
      id: 8,
      title: 'Teorema de Pitágoras',
      thumbnail: 'https://i.imgur.com/9lkBhQy.jpg',
      description: 'Aplicações práticas do teorema de Pitágoras no dia a dia.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '13:55',
      subject: 'Matemática'
    }
  ],
  historia: [
    {
      id: 9,
      title: 'Brasil Império Explicado',
      thumbnail: 'https://i.imgur.com/8cmNMnv.jpg',
      description: 'Os principais eventos do período imperial brasileiro.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '22:15',
      subject: 'História'
    },
    {
      id: 10,
      title: 'Revolução Francesa',
      thumbnail: 'https://i.imgur.com/9lkBhQy.jpg',
      description: 'As causas e consequências da Revolução Francesa de 1789.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '19:30',
      subject: 'História'
    },
    {
      id: 11,
      title: 'Era Vargas no Brasil',
      thumbnail: 'https://i.imgur.com/w5Rytdm.jpg',
      description: 'O período de Getúlio Vargas e suas transformações no Brasil.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '20:45',
      subject: 'História'
    },
    {
      id: 12,
      title: 'Guerra Fria Resumida',
      thumbnail: 'https://i.imgur.com/YwVR7of.jpg',
      description: 'O conflito ideológico entre EUA e URSS após a Segunda Guerra.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '17:25',
      subject: 'História'
    }
  ],
  geografia: [
    {
      id: 13,
      title: 'Biomas Brasileiros',
      thumbnail: 'https://i.imgur.com/8cmNMnv.jpg',
      description: 'Conheça os principais biomas do Brasil e suas características.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '16:30',
      subject: 'Geografia'
    },
    {
      id: 14,
      title: 'Placas Tectônicas',
      thumbnail: 'https://i.imgur.com/9lkBhQy.jpg',
      description: 'Como as placas tectônicas moldam a superfície terrestre.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '18:15',
      subject: 'Geografia'
    },
    {
      id: 15,
      title: 'Globalização Mundial',
      thumbnail: 'https://i.imgur.com/w5Rytdm.jpg',
      description: 'Os impactos da globalização na economia e sociedade.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '21:40',
      subject: 'Geografia'
    },
    {
      id: 16,
      title: 'Ciclo da Água',
      thumbnail: 'https://i.imgur.com/YwVR7of.jpg',
      description: 'O processo de circulação da água na natureza.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '14:20',
      subject: 'Geografia'
    }
  ],
  quimica: [
    {
      id: 17,
      title: 'Tabela Periódica Explicada',
      thumbnail: 'https://i.imgur.com/8cmNMnv.jpg',
      description: 'Como ler e interpretar a tabela periódica dos elementos.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '19:45',
      subject: 'Química'
    },
    {
      id: 18,
      title: 'Ligações Químicas',
      thumbnail: 'https://i.imgur.com/9lkBhQy.jpg',
      description: 'Iônicas, covalentes e metálicas: tipos de ligações químicas.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '17:30',
      subject: 'Química'
    },
    {
      id: 19,
      title: 'Reações Químicas Básicas',
      thumbnail: 'https://i.imgur.com/w5Rytdm.jpg',
      description: 'Como identificar e classificar diferentes tipos de reações.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '15:50',
      subject: 'Química'
    },
    {
      id: 20,
      title: 'pH e Acidez',
      thumbnail: 'https://i.imgur.com/YwVR7of.jpg',
      description: 'Entenda a escala de pH e como medir acidez e basicidade.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '13:25',
      subject: 'Química'
    }
  ],
  fisica: [
    {
      id: 21,
      title: 'Leis de Newton com Exemplos',
      thumbnail: 'https://i.imgur.com/YwVR7of.jpg',
      description: 'As três leis de Newton explicadas com exemplos do cotidiano.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '14:15',
      subject: 'Física'
    },
    {
      id: 22,
      title: 'Movimento e Velocidade',
      thumbnail: 'https://i.imgur.com/8cmNMnv.jpg',
      description: 'Conceitos básicos de cinemática: movimento uniforme e variado.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '16:40',
      subject: 'Física'
    },
    {
      id: 23,
      title: 'Energia e suas Formas',
      thumbnail: 'https://i.imgur.com/9lkBhQy.jpg',
      description: 'Energia cinética, potencial e a conservação de energia.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '18:35',
      subject: 'Física'
    },
    {
      id: 24,
      title: 'Ondas e Som',
      thumbnail: 'https://i.imgur.com/w5Rytdm.jpg',
      description: 'Propriedades das ondas sonoras e fenômenos acústicos.',
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
  
  useEffect(() => {
    const subjectParam = searchParams.get('subject') || 'portugues';
    const validSubject = videosBySubject[subjectParam as keyof typeof videosBySubject] 
      ? subjectParam 
      : 'portugues';
      
    setCurrentSubject(validSubject);
    setVideos(videosBySubject[validSubject as keyof typeof videosBySubject]);
  }, [searchParams]);

  return (
    <Layout>
      <div className="revo-container py-10">
        <h1 className="revo-page-title">Vídeos de {subjectDisplayNames[currentSubject as keyof typeof subjectDisplayNames]}</h1>
        
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
                  Assistir Vídeo
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

export default Videos;
