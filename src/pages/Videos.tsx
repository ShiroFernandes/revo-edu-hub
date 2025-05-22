
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

// Sample video data (similar to Aulas page but with different content)
const videos = [
  {
    id: 1,
    title: 'Aula de Interpretação de Texto',
    thumbnail: 'https://i.imgur.com/8cmNMnv.jpg',
    description: 'Aprenda técnicas avançadas para interpretar diferentes gêneros textuais.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
    duration: '15:20',
    subject: 'Português'
  },
  {
    id: 2,
    title: 'Dicas de Redação para ENEM',
    thumbnail: 'https://i.imgur.com/9lkBhQy.jpg',
    description: 'Estratégias e técnicas para conseguir nota máxima na redação do ENEM.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
    duration: '18:45',
    subject: 'Português'
  },
  {
    id: 3,
    title: 'Como Resolver Equações do 1º Grau',
    thumbnail: 'https://i.imgur.com/w5Rytdm.jpg',
    description: 'Passo a passo para resolver equações do primeiro grau com exemplos práticos.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
    duration: '12:30',
    subject: 'Matemática'
  },
  {
    id: 4,
    title: 'Leis de Newton com Exemplos',
    thumbnail: 'https://i.imgur.com/YwVR7of.jpg',
    description: 'As três leis de Newton explicadas com exemplos do cotidiano.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
    duration: '14:15',
    subject: 'Física'
  }
];

const Videos = () => {
  const [openVideo, setOpenVideo] = useState<typeof videos[0] | null>(null);

  return (
    <Layout>
      <div className="revo-container py-10">
        <h1 className="revo-page-title">Vídeos Educacionais</h1>
        
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
