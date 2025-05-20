
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

// Sample video data
const videos = [
  {
    id: 1,
    title: 'Introdução à Língua Portuguesa',
    thumbnail: 'https://i.imgur.com/8cmNMnv.jpg',
    description: 'Aprenda os fundamentos básicos da Língua Portuguesa nesta aula introdutória.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
    duration: '12:34',
  },
  {
    id: 2,
    title: 'Uso correto da vírgula',
    thumbnail: 'https://i.imgur.com/9lkBhQy.jpg',
    description: 'Descubra as regras para o uso correto da vírgula na língua portuguesa.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
    duration: '8:21',
  },
  {
    id: 3,
    title: 'Concordância verbal',
    thumbnail: 'https://i.imgur.com/w5Rytdm.jpg',
    description: 'Aprenda como fazer a concordância verbal corretamente em português.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
    duration: '15:47',
  },
  {
    id: 4,
    title: 'Interpretação de texto',
    thumbnail: 'https://i.imgur.com/YwVR7of.jpg',
    description: 'Técnicas e estratégias para melhorar sua capacidade de interpretação de texto.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
    duration: '20:15',
  }
];

const Aulas = () => {
  const [openVideo, setOpenVideo] = useState<typeof videos[0] | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        <div className="revo-container py-10">
          <h1 className="revo-page-title">Aulas em Vídeo</h1>
          
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
      </main>

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
    </div>
  );
};

export default Aulas;
