
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

// Quiz questions
const questions = [
  {
    id: 1,
    question: 'Qual é o sujeito da frase: "Os alunos estudam à noite."?',
    options: ['Verbo', 'Os alunos', 'À noite', 'Nenhum'],
    correctAnswer: 'Os alunos',
  },
  {
    id: 2,
    question: 'Onde se usa a vírgula corretamente?',
    options: [
      'Ela foi ao mercado e comprou pão leite ovos',
      'Ela foi ao mercado, e comprou pão, leite, ovos',
      'Ela foi ao mercado e, comprou, pão leite ovos',
      'Ela, foi ao mercado, e comprou pão',
    ],
    correctAnswer: 'Ela foi ao mercado, e comprou pão, leite, ovos',
  },
  {
    id: 3,
    question: 'Qual a classe gramatical da palavra "rapidamente"?',
    options: ['Substantivo', 'Advérbio', 'Adjetivo', 'Verbo'],
    correctAnswer: 'Advérbio',
  },
  {
    id: 4,
    question: 'O que é uma oração subordinada?',
    options: [
      'Uma oração que depende de outra para fazer sentido',
      'Uma oração independente',
      'Uma oração sem sujeito',
      'Um tipo de verbo',
    ],
    correctAnswer: 'Uma oração que depende de outra para fazer sentido',
  },
  {
    id: 5,
    question: 'Marque a frase com erro de concordância:',
    options: [
      'Os meninos chegaram cedo.',
      'As menina chegou cedo.',
      'As meninas chegaram cedo.',
      'O menino chegou cedo.',
    ],
    correctAnswer: 'As menina chegou cedo.',
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  
  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      // Play success sound
      const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3');
      audio.volume = 0.5;
      audio.play();
    } else {
      // Play error sound
      const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3');
      audio.volume = 0.5;
      audio.play();
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

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">
        <div className="revo-container py-10">
          <h1 className="revo-page-title">Quiz de Português</h1>
          
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
                      <div
                        key={index}
                        onClick={() => handleAnswerSelect(option)}
                        className={`quiz-option ${isCorrectAnswer(option) ? 'correct' : ''} ${isWrongAnswer(option) ? 'incorrect' : ''}`}
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
                      </div>
                    ))}
                  </div>
                  
                  <Button
                    onClick={handleNextQuestion}
                    disabled={!isAnswered}
                    className="w-full revo-button"
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
                  
                  <div className="text-6xl font-bold mb-6 text-revo-purple">
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
                    className="revo-button"
                  >
                    Reiniciar Quiz
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
