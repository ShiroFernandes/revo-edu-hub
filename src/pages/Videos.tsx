
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Videos = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentSubject = searchParams.get('subject') || '';

  const subjectDisplayNames = {
    'portugues': 'Português',
    'matematica': 'Matemática',
    'informatica': 'Informática Básica'
  };

  const videosBySubject = {
    portugues: [
      { id: 1, title: 'Aprendendo a Ler', description: 'Primeiros passos na leitura', duration: '15 min' },
      { id: 2, title: 'Palavras do Cotidiano', description: 'Vocabulário básico do dia a dia', duration: '20 min' },
      { id: 3, title: 'Conversação Básica', description: 'Frases simples para o dia a dia', duration: '18 min' },
      { id: 4, title: 'Escrevendo Cartas', description: 'Como escrever uma carta simples', duration: '12 min' },
      { id: 5, title: 'Lendo Receitas', description: 'Entendendo receitas culinárias', duration: '16 min' }
    ],
    matematica: [
      { id: 1, title: 'Aprendendo a Contar', description: 'Números de 1 a 100', duration: '12 min' },
      { id: 2, title: 'Calculadora Básica', description: 'Como usar uma calculadora', duration: '10 min' },
      { id: 3, title: 'Compras no Mercado', description: 'Calculando preços e troco', duration: '25 min' },
      { id: 4, title: 'Medindo Receitas', description: 'Xícaras, colheres e medidas', duration: '14 min' },
      { id: 5, title: 'Controlando Gastos', description: 'Organizando o dinheiro', duration: '22 min' }
    ],
    informatica: [
      { id: 1, title: 'Conhecendo o Computador', description: 'Partes básicas do computador', duration: '18 min' },
      { id: 2, title: 'WhatsApp e E-mail', description: 'Enviando mensagens', duration: '30 min' },
      { id: 3, title: 'Pesquisas no Google', description: 'Como buscar informações', duration: '15 min' },
      { id: 4, title: 'Vídeos no YouTube', description: 'Assistindo vídeos online', duration: '12 min' },
      { id: 5, title: 'Fotos no Celular', description: 'Tirando e guardando fotos', duration: '20 min' }
    ]
  };

  const currentVideos = currentSubject ? videosBySubject[currentSubject as keyof typeof videosBySubject] || [] : [];

  const handleVideoClick = (videoId: number) => {
    // Simula abertura do vídeo
    alert(`Abrindo vídeo ${videoId}. Em breve você poderá assistir aos vídeos!`);
  };

  const handleSubjectSelect = (subject: string) => {
    navigate(`/videos?subject=${subject}`);
  };

  if (!currentSubject) {
    return (
      <Layout>
        <div className="revo-container py-10">
          <h1 className="revo-page-title">Vídeos Educativos</h1>
          
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600">
              Escolha uma matéria para ver os vídeos disponíveis:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {Object.entries(subjectDisplayNames).map(([slug, name]) => (
              <div key={slug} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{name}</h3>
                <p className="text-gray-600 mb-4">
                  Vídeos educativos para aprender {name.toLowerCase()}
                </p>
                <Button 
                  onClick={() => handleSubjectSelect(slug)}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Ver Vídeos
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="revo-container py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="revo-page-title">
            Vídeos de {subjectDisplayNames[currentSubject as keyof typeof subjectDisplayNames]}
          </h1>
          <Button 
            onClick={() => navigate('/videos')}
            variant="outline"
          >
            Voltar às Matérias
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-500">{video.duration}</span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                
                <Button 
                  onClick={() => handleVideoClick(video.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Assistir Vídeo
                </Button>
              </div>
            </div>
          ))}
        </div>

        {currentVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum vídeo encontrado para esta matéria.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Videos;
