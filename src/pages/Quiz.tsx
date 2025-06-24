import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { useSearchParams } from 'react-router-dom';
import { getQuestionsForToday, getRandomMotivationalMessage, getQuestionsByTopic } from '@/utils/questionBank';

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
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentSubject, setCurrentSubject] = useState('portugues');
  const [motivationalMessage, setMotivationalMessage] = useState('');
  
  useEffect(() => {
    const subjectParam = searchParams.get('subject') || 'portugues';
    const topicParam = searchParams.get('topic');
    
    const validSubject = ['portugues', 'matematica', 'informatica'].includes(subjectParam) 
      ? subjectParam 
      : 'portugues';
      
    setCurrentSubject(validSubject);
    
    // Se há um tópico específico, buscar questões por tópico
    let todayQuestions;
    if (topicParam) {
      todayQuestions = getQuestionsByTopic(topicParam);
    } else {
      todayQuestions = getQuestionsForToday(validSubject);
    }
    
    setQuestions(todayQuestions);
    
    // Reset quiz state when subject changes
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
    setMotivationalMessage('');
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
      setMotivationalMessage(getRandomMotivationalMessage());
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
    setMotivationalMessage('');
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
        <h1 className="revo-page-title">
          Quiz de {subjectDisplayNames[currentSubject as keyof typeof subjectDisplayNames]}
          {questions[0]?.topic && ` - ${questions[0].topic}`}
        </h1>
        
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
                <div className="flex justify-center mb-4">
                  <Heart className="h-12 w-12 text-red-500 fill-current" />
                </div>
                
                <h2 className="text-3xl font-bold mb-6">Quiz Finalizado!</h2>
                
                <div className="text-6xl font-bold mb-6 text-blue-600">
                  {score} / {questions.length}
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                  <p className="text-lg text-yellow-800 font-medium">
                    {motivationalMessage}
                  </p>
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
