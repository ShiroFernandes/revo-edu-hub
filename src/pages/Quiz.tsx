
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { useSearchParams } from 'react-router-dom';

// Quiz questions by subject
const questionsBySubject = {
  portugues: [
    {
      id: 1,
      question: 'Qual é o sujeito da frase: "Os alunos estudam à noite."?',
      options: ['Verbo', 'Os alunos', 'À noite', 'Nenhum'],
      correctAnswer: 'Os alunos',
      subject: 'Português'
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
      subject: 'Português'
    },
    {
      id: 3,
      question: 'Qual a classe gramatical da palavra "rapidamente"?',
      options: ['Substantivo', 'Advérbio', 'Adjetivo', 'Verbo'],
      correctAnswer: 'Advérbio',
      subject: 'Português'
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
      subject: 'Português'
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
      subject: 'Português'
    },
  ],
  matematica: [
    {
      id: 1,
      question: 'Qual o resultado de 2x + 5 = 15?',
      options: ['x = 5', 'x = 10', 'x = 7', 'x = 3'],
      correctAnswer: 'x = 5',
      subject: 'Matemática'
    },
    {
      id: 2,
      question: 'Qual a área de um quadrado de lado 4cm?',
      options: ['16cm²', '8cm²', '12cm²', '20cm²'],
      correctAnswer: '16cm²',
      subject: 'Matemática'
    },
    {
      id: 3,
      question: 'Quanto é 15% de 200?',
      options: ['30', '25', '35', '20'],
      correctAnswer: '30',
      subject: 'Matemática'
    },
    {
      id: 4,
      question: 'Se uma função f(x) = 2x + 3, qual é f(5)?',
      options: ['13', '10', '8', '15'],
      correctAnswer: '13',
      subject: 'Matemática'
    },
    {
      id: 5,
      question: 'Qual a fórmula da área do círculo?',
      options: ['πr²', '2πr', 'πd', 'πr'],
      correctAnswer: 'πr²',
      subject: 'Matemática'
    }
  ],
  historia: [
    {
      id: 1,
      question: 'Em que ano o Brasil se tornou independente?',
      options: ['1822', '1889', '1500', '1824'],
      correctAnswer: '1822',
      subject: 'História'
    },
    {
      id: 2,
      question: 'Quem foi o primeiro presidente do Brasil?',
      options: ['Getúlio Vargas', 'Deodoro da Fonseca', 'Dom Pedro I', 'Juscelino Kubitschek'],
      correctAnswer: 'Deodoro da Fonseca',
      subject: 'História'
    },
    {
      id: 3,
      question: 'Qual guerra marcou o fim do Império Romano do Ocidente?',
      options: ['Guerra dos Cem Anos', 'Invasões Bárbaras', 'Guerra Púnica', 'Cruzadas'],
      correctAnswer: 'Invasões Bárbaras',
      subject: 'História'
    },
    {
      id: 4,
      question: 'Qual evento marcou o início da Idade Moderna?',
      options: ['Descobrimento da América', 'Queda de Constantinopla', 'Revolução Francesa', 'Reforma Protestante'],
      correctAnswer: 'Queda de Constantinopla',
      subject: 'História'
    },
    {
      id: 5,
      question: 'Quem foi Napoleão Bonaparte?',
      options: ['Rei da França', 'Imperador da França', 'Papa', 'Filósofo'],
      correctAnswer: 'Imperador da França',
      subject: 'História'
    }
  ],
  geografia: [
    {
      id: 1,
      question: 'Qual é o maior país do mundo em território?',
      options: ['China', 'Estados Unidos', 'Rússia', 'Brasil'],
      correctAnswer: 'Rússia',
      subject: 'Geografia'
    },
    {
      id: 2,
      question: 'Qual é a capital da Austrália?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
      correctAnswer: 'Canberra',
      subject: 'Geografia'
    },
    {
      id: 3,
      question: 'Qual o maior bioma brasileiro?',
      options: ['Cerrado', 'Amazônia', 'Caatinga', 'Mata Atlântica'],
      correctAnswer: 'Amazônia',
      subject: 'Geografia'
    },
    {
      id: 4,
      question: 'Qual linha imaginária divide a Terra em hemisférios Norte e Sul?',
      options: ['Trópico de Câncer', 'Meridiano de Greenwich', 'Linha do Equador', 'Trópico de Capricórnio'],
      correctAnswer: 'Linha do Equador',
      subject: 'Geografia'
    },
    {
      id: 5,
      question: 'Qual processo forma as montanhas?',
      options: ['Erosão', 'Tectonismo', 'Intemperismo', 'Sedimentação'],
      correctAnswer: 'Tectonismo',
      subject: 'Geografia'
    }
  ],
  quimica: [
    {
      id: 1,
      question: 'Qual é o símbolo químico do ouro?',
      options: ['Au', 'Ag', 'Go', 'Or'],
      correctAnswer: 'Au',
      subject: 'Química'
    },
    {
      id: 2,
      question: 'Qual é a fórmula química da água?',
      options: ['H₂O', 'CO₂', 'NaCl', 'O₂'],
      correctAnswer: 'H₂O',
      subject: 'Química'
    },
    {
      id: 3,
      question: 'Quantos prótons tem o átomo de carbono?',
      options: ['4', '6', '8', '12'],
      correctAnswer: '6',
      subject: 'Química'
    },
    {
      id: 4,
      question: 'Qual o pH da água pura?',
      options: ['6', '7', '8', '5'],
      correctAnswer: '7',
      subject: 'Química'
    },
    {
      id: 5,
      question: 'Qual tipo de ligação ocorre entre Na e Cl?',
      options: ['Covalente', 'Iônica', 'Metálica', 'Dipolo'],
      correctAnswer: 'Iônica',
      subject: 'Química'
    }
  ],
  fisica: [
    {
      id: 1,
      question: 'Qual é a fórmula da segunda lei de Newton?',
      options: ['F = m.a', 'E = mc²', 'v = d/t', 'P = F/A'],
      correctAnswer: 'F = m.a',
      subject: 'Física'
    },
    {
      id: 2,
      question: 'Qual é a velocidade da luz no vácuo?',
      options: ['300.000 km/s', '150.000 km/s', '500.000 km/s', '200.000 km/s'],
      correctAnswer: '300.000 km/s',
      subject: 'Física'
    },
    {
      id: 3,
      question: 'Qual é a unidade de medida da força?',
      options: ['Joule', 'Newton', 'Watt', 'Pascal'],
      correctAnswer: 'Newton',
      subject: 'Física'
    },
    {
      id: 4,
      question: 'Qual é a aceleração da gravidade na Terra?',
      options: ['9,8 m/s²', '10 m/s²', '8,9 m/s²', '11 m/s²'],
      correctAnswer: '9,8 m/s²',
      subject: 'Física'
    },
    {
      id: 5,
      question: 'Qual fenômeno explica por que vemos o arco-íris?',
      options: ['Reflexão', 'Refração', 'Dispersão', 'Difração'],
      correctAnswer: 'Dispersão',
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
