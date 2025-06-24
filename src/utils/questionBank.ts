
// Sistema de banco de questões que rotaciona diariamente
export const questionBank = {
  portugues: [
    // Dia 1
    [
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
      },
      {
        id: 9,
        question: 'Qual é a última letra do alfabeto?',
        options: ['Y', 'X', 'Z', 'W'],
        correctAnswer: 'Z',
        subject: 'Português'
      },
      {
        id: 10,
        question: 'Como se escreve o número "um" em palavras?',
        options: ['hum', 'um', 'hun', 'uum'],
        correctAnswer: 'um',
        subject: 'Português'
      }
    ],
    // Dia 2
    [
      {
        id: 1,
        question: 'Quantas consoantes tem o alfabeto?',
        options: ['19', '20', '21', '22'],
        correctAnswer: '21',
        subject: 'Português'
      },
      {
        id: 2,
        question: 'Qual é o oposto de "feliz"?',
        options: ['Alegre', 'Triste', 'Contente', 'Animado'],
        correctAnswer: 'Triste',
        subject: 'Português'
      },
      {
        id: 3,
        question: 'Como se escreve o número "três" em palavras?',
        options: ['tres', 'treis', 'três', 'trez'],
        correctAnswer: 'três',
        subject: 'Português'
      },
      {
        id: 4,
        question: 'Qual palavra usamos para cumprimentar à noite?',
        options: ['Bom dia', 'Boa tarde', 'Boa noite', 'Até logo'],
        correctAnswer: 'Boa noite',
        subject: 'Português'
      },
      {
        id: 5,
        question: 'Quais são as vogais?',
        options: ['A, E, I, O, U', 'A, B, C, D, E', 'E, F, G, H, I', 'O, P, Q, R, S'],
        correctAnswer: 'A, E, I, O, U',
        subject: 'Português'
      },
      {
        id: 6,
        question: 'Qual é o oposto de "alto"?',
        options: ['Baixo', 'Grande', 'Pequeno', 'Largo'],
        correctAnswer: 'Baixo',
        subject: 'Português'
      },
      {
        id: 7,
        question: 'Como se chama o lugar onde compramos pão?',
        options: ['Farmácia', 'Padaria', 'Mercado', 'Açougue'],
        correctAnswer: 'Padaria',
        subject: 'Português'
      },
      {
        id: 8,
        question: 'Qual destas palavras está escrita corretamente?',
        options: ['Karro', 'Carro', 'Karo', 'Caro'],
        correctAnswer: 'Carro',
        subject: 'Português'
      },
      {
        id: 9,
        question: 'Como se escreve o número "zero" em palavras?',
        options: ['sero', 'zero', 'cero', 'zeiro'],
        correctAnswer: 'zero',
        subject: 'Português'
      },
      {
        id: 10,
        question: 'Qual é o oposto de "novo"?',
        options: ['Velho', 'Jovem', 'Moderno', 'Atual'],
        correctAnswer: 'Velho',
        subject: 'Português'
      }
    ],
    // Continua com mais 8 dias...
    // Dia 3-10 (simplificado para exemplo)
    ...Array(8).fill(null).map((_, dayIndex) => [
      {
        id: 1,
        question: `Dia ${dayIndex + 3}: Qual é a cor do céu?`,
        options: ['Verde', 'Azul', 'Vermelho', 'Amarelo'],
        correctAnswer: 'Azul',
        subject: 'Português'
      },
      // ... mais 9 questões por dia
    ])
  ],
  
  matematica: [
    // Dia 1
    [
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
    // Dia 2-10 (simplificado para exemplo)
    ...Array(9).fill(null).map((_, dayIndex) => [
      {
        id: 1,
        question: `Dia ${dayIndex + 2}: Quanto é 3 + 3?`,
        options: ['5', '6', '7', '8'],
        correctAnswer: '6',
        subject: 'Matemática'
      },
      // ... mais 9 questões por dia
    ])
  ],

  informatica: [
    // Dia 1
    [
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
    ],
    // Dia 2-10 (simplificado para exemplo)
    ...Array(9).fill(null).map((_, dayIndex) => [
      {
        id: 1,
        question: `Dia ${dayIndex + 2}: O que é um e-mail?`,
        options: ['Uma carta eletrônica', 'Um telefone', 'Uma televisão', 'Um remédio'],
        correctAnswer: 'Uma carta eletrônica',
        subject: 'Informática Básica'
      },
      // ... mais 9 questões por dia
    ])
  ]
};

// Função para obter as questões do dia
export const getQuestionsForToday = (subject: string) => {
  const today = new Date();
  const dayOfCycle = Math.floor(today.getTime() / (1000 * 60 * 60 * 24)) % 10; // Ciclo de 10 dias
  
  const subjectQuestions = questionBank[subject as keyof typeof questionBank];
  if (!subjectQuestions) return [];
  
  return subjectQuestions[dayOfCycle] || subjectQuestions[0];
};

// Mensagens motivacionais
export const motivationalMessages = [
  "Parabéns! Você está indo muito bem! Cada pergunta respondida é um passo a mais no seu aprendizado. Continue assim!",
  "Que orgulho! Você está provando que nunca é tarde para aprender coisas novas. Você é uma inspiração!",
  "Maravilhoso! Seu esforço e dedicação estão dando frutos. Continue praticando e crescendo!",
  "Excelente trabalho! Você está mostrando que a experiência de vida é o melhor professor. Parabéns!",
  "Fantástico! Cada dia que você dedica aos estudos é um investimento em si mesmo. Continue brilhando!",
  "Que conquista! Você está provando que o conhecimento não tem idade. Siga em frente com confiança!",
  "Incrível! Sua determinação em aprender é admirável. Você está no caminho certo!",
  "Muito bem! Você está transformando curiosidade em conhecimento. Isso é verdadeira sabedoria!",
  "Perfeito! Você está mostrando que aprender é um prazer que dura toda a vida. Continue aproveitando!",
  "Sensacional! Seu progresso é prova de que nunca paramos de crescer. Você está fazendo a diferença!"
];

export const getRandomMotivationalMessage = () => {
  const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
  return motivationalMessages[randomIndex];
};
