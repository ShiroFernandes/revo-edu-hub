
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';

// Exercise data
const exercises = [
  {
    id: 1,
    question: 'Reescreva a frase: "o menino correu" usando um advérbio.',
    hint: 'Advérbios modificam verbos, adjetivos ou outros advérbios. Ex: rapidamente, lentamente, etc.',
    examples: ['O menino correu rapidamente.', 'O menino correu silenciosamente.'],
  },
  {
    id: 2,
    question: 'Substitua o substantivo da frase: "A professora explicou a lição" por um sinônimo.',
    hint: 'Sinônimos são palavras com significado semelhante. Ex: professora → mestra, docente, etc.',
    examples: ['A mestra explicou a lição.', 'A docente explicou a lição.'],
  },
  {
    id: 3,
    question: 'Crie uma frase com um verbo no futuro.',
    hint: 'O futuro do presente indica uma ação que ainda vai acontecer. Ex: farei, estudarei, etc.',
    examples: ['Eu estudarei português amanhã.', 'Nós viajaremos nas próximas férias.'],
  },
  {
    id: 4,
    question: 'Identifique o sujeito e o predicado: "Maria gosta de música."',
    hint: 'Sujeito: quem pratica a ação. Predicado: o que se declara sobre o sujeito.',
    examples: ['Sujeito: Maria | Predicado: gosta de música.'],
  },
  {
    id: 5,
    question: 'Complete com a preposição correta: "Ela foi ___ escola."',
    hint: 'Preposições podem indicar destino, origem, meio, etc. Pense: à, para, da, etc.',
    examples: ['Ela foi à escola.', 'Ela foi para a escola.'],
  }
];

const Exercicios = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [showHint, setShowHint] = useState<number | null>(null);
  const { toast } = useToast();

  const handleAnswerChange = (id: number, value: string) => {
    setAnswers({
      ...answers,
      [id]: value
    });
  };

  const toggleHint = (id: number) => {
    setShowHint(showHint === id ? null : id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all questions have been answered
    const answeredCount = Object.keys(answers).length;
    
    if (answeredCount < exercises.length) {
      toast({
        title: "Atenção!",
        description: `Você respondeu apenas ${answeredCount} de ${exercises.length} exercícios.`,
        variant: "default",
      });
    } else {
      setShowAnswers(true);
      toast({
        title: "Exercícios enviados!",
        description: "Veja as respostas sugeridas para comparar com as suas.",
        variant: "default",
      });
    }
  };

  const resetExercises = () => {
    setAnswers({});
    setShowAnswers(false);
    setShowHint(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        <div className="revo-container py-10">
          <h1 className="revo-page-title">Exercícios de Português</h1>
          
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {exercises.map((exercise) => (
                <div key={exercise.id} className="revo-card">
                  <Label 
                    htmlFor={`exercise-${exercise.id}`} 
                    className="text-xl font-medium block mb-4"
                  >
                    {exercise.question}
                  </Label>
                  
                  <div className="mb-4">
                    {exercise.id !== 4 ? (
                      <Input
                        id={`exercise-${exercise.id}`}
                        placeholder="Digite sua resposta aqui..."
                        value={answers[exercise.id] || ''}
                        onChange={(e) => handleAnswerChange(exercise.id, e.target.value)}
                        disabled={showAnswers}
                        className="w-full p-3 border-2 focus:border-revo-purple"
                      />
                    ) : (
                      <Textarea
                        id={`exercise-${exercise.id}`}
                        placeholder="Digite sua resposta aqui..."
                        value={answers[exercise.id] || ''}
                        onChange={(e) => handleAnswerChange(exercise.id, e.target.value)}
                        disabled={showAnswers}
                        className="w-full p-3 border-2 focus:border-revo-purple"
                      />
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => toggleHint(exercise.id)}
                      className="text-sm text-gray-600"
                    >
                      {showHint === exercise.id ? "Ocultar dica" : "Ver dica"}
                    </Button>
                    
                    {showAnswers && (
                      <div className="text-gray-600 text-sm">
                        <strong>Exemplos de respostas:</strong> {exercise.examples.join(', ')}
                      </div>
                    )}
                  </div>
                  
                  {showHint === exercise.id && (
                    <div className="mt-3 p-3 bg-revo-purple-light rounded-md text-gray-700 text-sm">
                      <strong>Dica:</strong> {exercise.hint}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center gap-4">
              {!showAnswers ? (
                <Button type="submit" className="revo-button">
                  Ver respostas
                </Button>
              ) : (
                <Button type="button" onClick={resetExercises} className="revo-button">
                  Reiniciar exercícios
                </Button>
              )}
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Exercicios;
