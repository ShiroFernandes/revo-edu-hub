import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { useSearchParams } from 'react-router-dom';

// Quiz questions by subject - Questões muito básicas para iniciantes
const questionsBySubject = {
  portugues: [
    {
      id: 1,
      question: 'Quantas letras tem o alfabeto?',
      options: ['24 letras', '26 letras', '28 letras', '30 letras'],
      correctAnswer: '26 letras',
      subject: 'Português'
    },
    {
      id: 2,
      question: 'Qual é a primeira letra do alfabeto?',
      options: ['B', 'A', 'C', 'D'],
      correctAnswer: 'A',
      subject: 'Português'
    },
    {
      id: 3,
      question: 'Como se escreve o número "dois" em palavras?',
      options: ['dous', 'dose', 'dois', 'dols'],
      correctAnswer: 'dois',
      subject: 'Português'
    },
    {
      id: 4,
      question: 'Qual palavra significa "bom dia"?',
      options: ['Boa tarde', 'Boa noite', 'Bom dia', 'Até logo'],
      correctAnswer: 'Bom dia',
      subject: 'Português'
    },
    {
      id: 5,
      question: 'Quantas vogais existem?',
      options: ['4', '5', '6', '7'],
      correctAnswer: '5',
      subject: 'Português'
    },
    {
      id: 6,
      question: 'Qual é o oposto de "grande"?',
      options: ['Alto', 'Pequeno', 'Largo', 'Comprido'],
      correctAnswer: 'Pequeno',
      subject: 'Português'
    },
    {
      id: 7,
      question: 'Como se chama o lugar onde compramos remédios?',
      options: ['Padaria', 'Farmácia', 'Mercado', 'Açougue'],
      correctAnswer: 'Farmácia',
      subject: 'Português'
    },
    {
      id: 8,
      question: 'Qual destas palavras está escrita corretamente?',
      options: ['Casa', 'Kasa', 'Caza', 'Kaza'],
      correctAnswer: 'Casa',
      subject: 'Português'
    }
  ],
  matematica: [
    {
      id: 1,
      question: 'Quanto é 1 + 1?',
      options: ['1', '2', '3', '4'],
      correctAnswer: '2',
      subject: 'Matemática'
    },
    {
      id: 2,
      question: 'Quanto é 5 - 2?',
      options: ['2', '3', '4', '7'],
      correctAnswer: '3',
      subject: 'Matemática'
    },
    {
      id: 3,
      question: 'Quantos dedos temos em uma mão?',
      options: ['4', '5', '6', '10'],
      correctAnswer: '5',
      subject: 'Matemática'
    },
    {
      id: 4,
      question: 'Se você tem 2 reais e ganha mais 3 reais, quanto você tem?',
      options: ['4 reais', '5 reais', '6 reais', '1 real'],
      correctAnswer: '5 reais',
      subject: 'Matemática'
    },
    {
      id: 5,
      question: 'Quantas horas tem um dia?',
      options: ['12 horas', '20 horas', '24 horas', '30 horas'],
      correctAnswer: '24 horas',
      subject: 'Matemática'
    },
    {
      id: 6,
      question: 'Quanto é 10 - 5?',
      options: ['3', '4', '5', '15'],
      correctAnswer: '5',
      subject: 'Matemática'
    },
    {
      id: 7,
      question: 'Quantos lados tem um triângulo?',
      options: ['2', '3', '4', '5'],
      correctAnswer: '3',
      subject: 'Matemática'
    },
    {
      id: 8,
      question: 'Se você comprar um pão por R$ 1,00 e pagar com R$ 2,00, quanto receberá de troco?',
      options: ['R$ 1,00', 'R$ 2,00', 'R$ 3,00', 'Nada'],
      correctAnswer: 'R$ 1,00',
      subject: 'Matemática'
    },
    {
      id: 9,
      question: 'Quanto é 2 + 2?',
      options: ['3', '4', '5', '22'],
      correctAnswer: '4',
      subject: 'Matemática'
    },
    {
      id: 10,
      question: 'Quantos minutos tem uma hora?',
      options: ['50 minutos', '60 minutos', '70 minutos', '100 minutos'],
      correctAnswer: '60 minutos',
      subject: 'Matemática'
    }
  ],
  informatica: [
    {
      id: 1,
      question: 'Como ligamos o computador?',
      options: ['Apertando qualquer tecla', 'Apertando o botão de ligar', 'Batendo na tela', 'Falando com ele'],
      correctAnswer: 'Apertando o botão de ligar',
      subject: 'Informática Básica'
    },
    {
      id: 2,
      question: 'O que usamos para clicar na tela do computador?',
      options: ['Teclado', 'Mouse', 'Dedo', 'Caneta'],
      correctAnswer: 'Mouse',
      subject: 'Informática Básica'
    },
    {
      id: 3,
      question: 'Onde digitamos as letras no computador?',
      options: ['Na tela', 'No mouse', 'No teclado', 'Na impressora'],
      correctAnswer: 'No teclado',
      subject: 'Informática Básica'
    },
    {
      id: 4,
      question: 'Como abrimos um programa no computador?',
      options: ['Clicando duas vezes em cima dele', 'Gritando o nome dele', 'Balançando o mouse', 'Desligando o computador'],
      correctAnswer: 'Clicando duas vezes em cima dele',
      subject: 'Informática Básica'
    },
    {
      id: 5,
      question: 'O que é a Internet?',
      options: ['Um lugar para comprar comida', 'Uma rede que conecta computadores', 'Um tipo de televisão', 'Um remédio'],
      correctAnswer: 'Uma rede que conecta computadores',
      subject: 'Informática Básica'
    },
    {
      id: 6,
      question: 'Qual programa usamos para navegar na Internet?',
      options: ['Word', 'Calculadora', 'Google Chrome', 'Paint'],
      correctAnswer: 'Google Chrome',
      subject: 'Informática Básica'
    },
    {
      id: 7,
      question: 'Como fazemos para pesquisar algo no Google?',
      options: ['Digitamos o que queremos e apertamos Enter', 'Falamos com o computador', 'Desenhamos na tela', 'Cantamos uma música'],
      correctAnswer: 'Digitamos o que queremos e apertamos Enter',
      subject: 'Informática Básica'
    },
    {
      id: 8,
      question: 'O que devemos fazer antes de desligar o computador?',
      options: ['Fechar todos os programas', 'Quebrar o mouse', 'Tirar uma foto', 'Gritar bem alto'],
      correctAnswer: 'Fechar todos os programas',
      subject: 'Informática Básica'
    },
    {
      id: 9,
      question: 'Onde ficam guardados os nossos arquivos no computador?',
      options: ['Na geladeira', 'No disco rígido', 'No mouse', 'Na impressora'],
      correctAnswer: 'No disco rígido',
      subject: 'Informática Básica'
    },
    {
      id: 10,
      question: 'O que é WhatsApp?',
      options: ['Um remédio', 'Um programa para mandar mensagens', 'Uma comida', 'Um animal'],
      correctAnswer: 'Um programa para mandar mensagens',
      subject: 'Informática Básica'
    }
  ]
};

const subjectDisplayNames = {
  'portugues': 'Português',
  'matematica': 'Matemática', 
  'informatica': 'Informática Básica'
};

const Quiz = () => {
  const [searchParams] = useSearchParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [questions, setQuestions] = useState<typeof questionsBySubject.portugues>([]);
  const [currentSubject, setCurrentSubject] = useState('portugues');
  
  useEffect(() => {
    const subjectParam = searchParams.get('subject') || 'portugues';
    const validSubject = questionsBySubject[subjectParam as keyof typeof questionsBySubject] 
      ? subjectParam 
      : 'portugues';
      
    setCurrentSubject(validSubject);
    setQuestions(questionsBySubject[validSubject as keyof typeof questionsBySubject]);
    
    // Reset quiz state when subject changes
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  }, [searchParams]);
  
  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  const isCorrectAnswer = (answer: string) => {
    return isAnswered && answer === questions[currentQuestion].correctAnswer;
  };
  
  const isWrongAnswer = (answer: string) => {
    return isAnswered && selectedAnswer === answer && answer !== questions[currentQuestion].correctAnswer;
  };

  if (questions.length === 0) {
    return (
      <Layout>
        <div className="revo-container py-10">
          <h1 className="revo-page-title">Carregando Quiz...</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="revo-container py-10">
        <h1 className="revo-page-title">Quiz de {subjectDisplayNames[currentSubject as keyof typeof subjectDisplayNames]}</h1>
        
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!quizFinished ? (
              <motion.div
                key="question"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-medium text-gray-600">
                    Questão {currentQuestion + 1} de {questions.length}
                  </span>
                  <span className="text-lg font-medium text-gray-600">
                    Pontuação: {score}
                  </span>
                </div>
                
                <h2 className="text-2xl font-semibold mb-6">
                  {questions[currentQuestion].question}
                </h2>
                
                <div className="space-y-4 mb-6">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(option)}
                      disabled={isAnswered}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 ${
                        isCorrectAnswer(option) 
                          ? 'bg-green-100 border-green-500 text-green-700' 
                          : isWrongAnswer(option)
                          ? 'bg-red-100 border-red-500 text-red-700'
                          : isAnswered
                          ? 'bg-gray-100 border-gray-300 text-gray-500'
                          : 'bg-white border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {isCorrectAnswer(option) && (
                          <div className="bg-green-100 p-1 rounded-full">
                            <Check className="h-5 w-5 text-green-600" />
                          </div>
                        )}
                        {isWrongAnswer(option) && (
                          <div className="bg-red-100 p-1 rounded-full">
                            <X className="h-5 w-5 text-red-600" />
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                
                <Button
                  onClick={handleNextQuestion}
                  disabled={!isAnswered}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentQuestion < questions.length - 1 ? "Próxima Questão" : "Finalizar Quiz"}
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <h2 className="text-3xl font-bold mb-6">Quiz Finalizado!</h2>
                
                <div className="text-6xl font-bold mb-6 text-blue-600">
                  {score} / {questions.length}
                </div>
                
                <p className="text-xl mb-8">
                  {score === questions.length 
                    ? "Parabéns! Você acertou todas as questões!" 
                    : score >= questions.length / 2 
                      ? "Bom trabalho! Continue praticando." 
                      : "Continue estudando e tente novamente."}
                </p>
                
                <Button
                  onClick={handleRestartQuiz}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium"
                >
                  Reiniciar Quiz
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;
