
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';

interface Exercicio {
  id: number;
  pergunta: string;
  respostaCorreta: string;
  respostaUsuario: string;
  correcao?: boolean;
}

const Exercicios = () => {
  const { toast } = useToast();
  const [respostasVisiveis, setRespostasVisiveis] = useState(false);
  const [exercicios, setExercicios] = useState<Exercicio[]>([
    {
      id: 1,
      pergunta: 'Reescreva a frase: "o menino correu" usando um advérbio.',
      respostaCorreta: 'O menino correu rapidamente.',
      respostaUsuario: '',
    },
    {
      id: 2,
      pergunta: 'Substitua o substantivo da frase: "A professora explicou a lição" por um sinônimo.',
      respostaCorreta: 'A docente explicou a lição.',
      respostaUsuario: '',
    },
    {
      id: 3,
      pergunta: 'Crie uma frase com um verbo no futuro.',
      respostaCorreta: 'Eu irei à escola amanhã.',
      respostaUsuario: '',
    },
    {
      id: 4,
      pergunta: 'Identifique o sujeito e o predicado: "Maria gosta de música."',
      respostaCorreta: 'Sujeito: Maria | Predicado: gosta de música',
      respostaUsuario: '',
    },
    {
      id: 5,
      pergunta: 'Complete com a preposição correta: "Ela foi ___ escola."',
      respostaCorreta: 'à',
      respostaUsuario: '',
    },
  ]);

  const handleInputChange = (id: number, value: string) => {
    setExercicios(
      exercicios.map(exercicio => 
        exercicio.id === id ? { ...exercicio, respostaUsuario: value } : exercicio
      )
    );
  };

  const verificarRespostas = () => {
    if (exercicios.some(ex => !ex.respostaUsuario.trim())) {
      toast({
        title: 'Preencha todas as respostas',
        description: 'Por favor, responda todos os exercícios antes de verificar.',
        variant: 'destructive',
      });
      return;
    }

    const exerciciosCorrigidos = exercicios.map(exercicio => ({
      ...exercicio,
      correcao: verificarResposta(exercicio.respostaUsuario, exercicio.respostaCorreta),
    }));

    setExercicios(exerciciosCorrigidos);
    setRespostasVisiveis(true);

    const acertos = exerciciosCorrigidos.filter(ex => ex.correcao).length;
    toast({
      title: `Você acertou ${acertos} de ${exercicios.length}!`,
      description: acertos === exercicios.length 
        ? 'Parabéns! Você completou todos os exercícios corretamente!' 
        : 'Continue praticando para melhorar!',
      variant: acertos === exercicios.length ? 'default' : 'default',
    });
  };

  const verificarResposta = (respostaUsuario: string, respostaCorreta: string): boolean => {
    return respostaUsuario.toLowerCase().trim() === respostaCorreta.toLowerCase().trim() ||
           respostaCorreta.toLowerCase().includes(respostaUsuario.toLowerCase().trim());
  };

  const resetarExercicios = () => {
    setExercicios(exercicios.map(exercicio => ({ ...exercicio, respostaUsuario: '', correcao: undefined })));
    setRespostasVisiveis(false);
    toast({
      title: 'Exercícios resetados',
      description: 'Tente novamente!',
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        <div className="revo-container py-10">
          <h1 className="revo-page-title">Exercícios de Língua Portuguesa</h1>
          
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-center text-gray-600 mb-8">
              Resolva os exercícios abaixo para praticar seus conhecimentos de Língua Portuguesa.
              Preencha todos os campos e clique em "Ver Respostas" para verificar suas respostas.
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {exercicios.map((exercicio) => (
              <Card key={exercicio.id} className={`border-2 transition-all duration-300 ${
                exercicio.correcao === undefined ? 'border-gray-200' : 
                exercicio.correcao ? 'border-green-500 animate-success-pulse' : 
                'border-red-500 animate-error-shake'
              }`}>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center">
                    <span className="mr-2">Exercício {exercicio.id}</span>
                    {exercicio.correcao !== undefined && (
                      exercicio.correcao ? 
                        <Check className="text-green-500" /> : 
                        <X className="text-red-500" />
                    )}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-700">
                    {exercicio.pergunta}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Label htmlFor={`resposta-${exercicio.id}`}>Sua resposta:</Label>
                    <Input
                      id={`resposta-${exercicio.id}`}
                      placeholder="Digite sua resposta aqui..."
                      value={exercicio.respostaUsuario}
                      onChange={(e) => handleInputChange(exercicio.id, e.target.value)}
                    />
                  </div>
                </CardContent>
                {respostasVisiveis && (
                  <CardFooter className="flex flex-col items-start bg-gray-50 rounded-b-lg p-4 space-y-2">
                    <p className="text-sm font-medium">Resposta correta:</p>
                    <p className="text-sm text-gray-700">{exercicio.respostaCorreta}</p>
                  </CardFooter>
                )}
              </Card>
            ))}

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                onClick={verificarRespostas}
                className="bg-revo-purple hover:bg-revo-purple-dark text-gray-800"
                disabled={respostasVisiveis}
              >
                Ver Respostas
              </Button>
              
              <Button
                onClick={resetarExercicios}
                variant="outline"
                className="border-revo-purple text-gray-800 hover:bg-gray-100"
              >
                Tentar Novamente
              </Button>
            </div>
          </div>
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

export default Exercicios;
