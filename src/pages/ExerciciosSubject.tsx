
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Layout from '@/components/Layout';

interface Exercicio {
  id: number;
  pergunta: string;
  respostaCorreta: string;
  respostaUsuario: string;
  correcao?: boolean;
  tipo: 'curta' | 'longa';
}

// Dados de exercícios por matéria
const exerciciosPorMateria: Record<string, Exercicio[]> = {
  portugues: [
    {
      id: 1,
      pergunta: 'Reescreva a frase: "o menino correu" usando um advérbio.',
      respostaCorreta: 'O menino correu rapidamente.',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 2,
      pergunta: 'Substitua o substantivo da frase: "A professora explicou a lição" por um sinônimo.',
      respostaCorreta: 'A docente explicou a lição.',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 3,
      pergunta: 'Identifique o sujeito e o predicado: "Maria gosta de música."',
      respostaCorreta: 'Sujeito: Maria | Predicado: gosta de música',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 4,
      pergunta: 'Complete com a preposição correta: "Ela foi ___ escola."',
      respostaCorreta: 'à',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 5,
      pergunta: 'Escreva um parágrafo argumentativo sobre a importância da educação na sociedade atual.',
      respostaCorreta: 'A educação é fundamental para o desenvolvimento social e econômico de um país, pois proporciona às pessoas o conhecimento necessário para exercer a cidadania, contribuir para a economia e promover a justiça social.',
      respostaUsuario: '',
      tipo: 'longa',
    },
  ],
  matematica: [
    {
      id: 1,
      pergunta: 'Resolva a equação: 2x + 5 = 15',
      respostaCorreta: 'x = 5',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 2,
      pergunta: 'Calcule a área de um quadrado de lado 7cm.',
      respostaCorreta: '49cm²',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 3,
      pergunta: 'Simplifique a expressão: 3(x + 2) - 2(x - 1)',
      respostaCorreta: 'x + 8',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 4,
      pergunta: 'Se f(x) = x² - 3x + 2, calcule f(4).',
      respostaCorreta: '6',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 5,
      pergunta: 'Explique o teorema de Pitágoras e dê um exemplo de aplicação.',
      respostaCorreta: 'O teorema de Pitágoras estabelece que, em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos. Exemplo: um triângulo com catetos 3 e 4 tem hipotenusa 5, pois 3² + 4² = 9 + 16 = 25 = 5².',
      respostaUsuario: '',
      tipo: 'longa',
    },
  ],
  historia: [
    {
      id: 1,
      pergunta: 'Em que ano o Brasil se tornou independente de Portugal?',
      respostaCorreta: '1822',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 2,
      pergunta: 'Quem foi o primeiro presidente do Brasil?',
      respostaCorreta: 'Deodoro da Fonseca',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 3,
      pergunta: 'Em que ano começou a Segunda Guerra Mundial?',
      respostaCorreta: '1939',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 4,
      pergunta: 'Qual evento marcou o fim da Idade Média?',
      respostaCorreta: 'A queda de Constantinopla',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 5,
      pergunta: 'Descreva as principais consequências da Revolução Industrial para a sociedade.',
      respostaCorreta: 'A Revolução Industrial provocou urbanização, surgimento do proletariado, aumento da produção em massa, poluição ambiental, avanços tecnológicos e mudanças nas relações de trabalho, substituindo o artesanato pela produção mecanizada.',
      respostaUsuario: '',
      tipo: 'longa',
    },
  ],
  geografia: [
    {
      id: 1,
      pergunta: 'Qual é o maior país do mundo em território?',
      respostaCorreta: 'Rússia',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 2,
      pergunta: 'Quais são os principais biomas brasileiros?',
      respostaCorreta: 'Amazônia, Cerrado, Caatinga, Mata Atlântica, Pantanal e Pampa.',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 3,
      pergunta: 'O que é uma bacia hidrográfica?',
      respostaCorreta: 'É uma área de terra onde toda a água que cai nela escoa para um mesmo rio principal.',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 4,
      pergunta: 'Explique a diferença entre clima e tempo.',
      respostaCorreta: 'Clima refere-se às condições atmosféricas médias de um local ao longo de um período prolongado, enquanto tempo refere-se às condições atmosféricas em um determinado momento.',
      respostaUsuario: '',
      tipo: 'longa',
    },
    {
      id: 5,
      pergunta: 'Discuta as causas e consequências do aquecimento global.',
      respostaCorreta: 'O aquecimento global é causado principalmente pela emissão de gases de efeito estufa por atividades humanas, como queima de combustíveis fósseis e desmatamento. Suas consequências incluem derretimento das calotas polares, aumento do nível do mar, eventos climáticos extremos e alterações nos ecossistemas.',
      respostaUsuario: '',
      tipo: 'longa',
    },
  ],
  quimica: [
    {
      id: 1,
      pergunta: 'Qual é o símbolo químico do ouro?',
      respostaCorreta: 'Au',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 2,
      pergunta: 'Qual é a fórmula química da água?',
      respostaCorreta: 'H₂O',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 3,
      pergunta: 'Defina o conceito de pH.',
      respostaCorreta: 'pH é uma escala que mede o quão ácida ou básica é uma solução, variando de 0 a 14.',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 4,
      pergunta: 'Explique a diferença entre elementos e compostos.',
      respostaCorreta: 'Elementos são substâncias puras formadas por apenas um tipo de átomo, enquanto compostos são formados pela combinação química de dois ou mais elementos diferentes.',
      respostaUsuario: '',
      tipo: 'longa',
    },
    {
      id: 5,
      pergunta: 'Descreva os tipos de ligações químicas e dê um exemplo de cada.',
      respostaCorreta: 'Ligação iônica: transferência de elétrons entre metais e não-metais (ex: NaCl). Ligação covalente: compartilhamento de elétrons entre não-metais (ex: H₂O). Ligação metálica: compartilhamento de elétrons livres entre átomos metálicos (ex: Cu).',
      respostaUsuario: '',
      tipo: 'longa',
    },
  ],
  fisica: [
    {
      id: 1,
      pergunta: 'Qual é a fórmula da segunda lei de Newton?',
      respostaCorreta: 'F = m.a',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 2,
      pergunta: 'O que é a velocidade média?',
      respostaCorreta: 'É a razão entre o deslocamento e o tempo gasto para realizá-lo.',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 3,
      pergunta: 'Qual é a unidade de medida da força no Sistema Internacional?',
      respostaCorreta: 'Newton (N)',
      respostaUsuario: '',
      tipo: 'curta',
    },
    {
      id: 4,
      pergunta: 'Explique o princípio da conservação de energia.',
      respostaCorreta: 'O princípio da conservação de energia afirma que a energia não pode ser criada nem destruída, apenas transformada de uma forma para outra, mantendo-se constante em um sistema isolado.',
      respostaUsuario: '',
      tipo: 'longa',
    },
    {
      id: 5,
      pergunta: 'Descreva os tipos de ondas e suas características.',
      respostaCorreta: 'Ondas mecânicas: precisam de um meio material para se propagar (ex: som). Ondas eletromagnéticas: não precisam de meio material (ex: luz). Ondas podem ser classificadas como longitudinais (vibração na mesma direção da propagação) ou transversais (vibração perpendicular à propagação).',
      respostaUsuario: '',
      tipo: 'longa',
    },
  ],
};

const titulos: Record<string, string> = {
  portugues: 'Português',
  matematica: 'Matemática',
  historia: 'História',
  geografia: 'Geografia',
  quimica: 'Química',
  fisica: 'Física',
};

const ExerciciosSubject = () => {
  const [searchParams] = useSearchParams();
  const subject = searchParams.get('subject') || 'portugues';
  const { toast } = useToast();
  const [respostasVisiveis, setRespostasVisiveis] = useState(false);
  const [exercicios, setExercicios] = useState<Exercicio[]>([]);

  useEffect(() => {
    setExercicios(exerciciosPorMateria[subject] || []);
    setRespostasVisiveis(false); // Reset visibility when subject changes
  }, [subject]);

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
    <Layout>
      <div className="revo-container py-10">
        <h1 className="revo-page-title">Exercícios de {titulos[subject] || "Matéria"}</h1>
        
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-center text-gray-600 mb-8">
            Resolva os exercícios abaixo para praticar seus conhecimentos de {titulos[subject] || "Matéria"}.
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
                  {exercicio.tipo === 'curta' ? (
                    <Input
                      id={`resposta-${exercicio.id}`}
                      placeholder="Digite sua resposta aqui..."
                      value={exercicio.respostaUsuario}
                      onChange={(e) => handleInputChange(exercicio.id, e.target.value)}
                    />
                  ) : (
                    <Textarea
                      id={`resposta-${exercicio.id}`}
                      placeholder="Digite sua resposta aqui..."
                      value={exercicio.respostaUsuario}
                      onChange={(e) => handleInputChange(exercicio.id, e.target.value)}
                      rows={4}
                    />
                  )}
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
              className="bg-revo-purple hover:bg-revo-purple-dark text-white"
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
    </Layout>
  );
};

export default ExerciciosSubject;
