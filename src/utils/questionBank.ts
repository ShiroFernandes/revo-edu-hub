
// Sistema de banco de questões que rotaciona diariamente
export const questionBank = {
  portugues: [
    // Dia 1 - Letras e Sons
    [
      {
        id: 1,
        question: 'Quantas letras tem o alfabeto?',
        options: ['24 letras', '26 letras', '28 letras', '30 letras'],
        correctAnswer: '26 letras',
        subject: 'Português',
        topic: 'Letras e Sons'
      },
      {
        id: 2,
        question: 'Qual é a primeira letra do alfabeto?',
        options: ['B', 'A', 'C', 'D'],
        correctAnswer: 'A',
        subject: 'Português',
        topic: 'Letras e Sons'
      },
      {
        id: 3,
        question: 'Quantas vogais existem?',
        options: ['4', '5', '6', '7'],
        correctAnswer: '5',
        subject: 'Português',
        topic: 'Letras e Sons'
      },
      {
        id: 4,
        question: 'Quais são as vogais?',
        options: ['A, E, I, O, U', 'A, B, C, D, E', 'E, F, G, H, I', 'O, P, Q, R, S'],
        correctAnswer: 'A, E, I, O, U',
        subject: 'Português',
        topic: 'Letras e Sons'
      },
      {
        id: 5,
        question: 'Qual é a última letra do alfabeto?',
        options: ['Y', 'X', 'Z', 'W'],
        correctAnswer: 'Z',
        subject: 'Português',
        topic: 'Letras e Sons'
      },
      {
        id: 6,
        question: 'Quantas consoantes tem o alfabeto?',
        options: ['19', '20', '21', '22'],
        correctAnswer: '21',
        subject: 'Português',
        topic: 'Letras e Sons'
      },
      {
        id: 7,
        question: 'A letra "B" faz que som?',
        options: ['Bê', 'Cê', 'Dê', 'Efe'],
        correctAnswer: 'Bê',
        subject: 'Português',
        topic: 'Letras e Sons'
      },
      {
        id: 8,
        question: 'Qual vogal vem depois do "A"?',
        options: ['I', 'E', 'O', 'U'],
        correctAnswer: 'E',
        subject: 'Português',
        topic: 'Letras e Sons'
      },
      {
        id: 9,
        question: 'A letra "M" é uma:',
        options: ['Vogal', 'Consoante', 'Número', 'Símbolo'],
        correctAnswer: 'Consoante',
        subject: 'Português',
        topic: 'Letras e Sons'
      },
      {
        id: 10,
        question: 'Como falamos a letra "H"?',
        options: ['Rê', 'Agá', 'Eme', 'Ene'],
        correctAnswer: 'Agá',
        subject: 'Português',
        topic: 'Letras e Sons'
      }
    ],
    // Dia 2 - Palavras Básicas
    [
      {
        id: 1,
        question: 'Como se escreve o número "um" em palavras?',
        options: ['hum', 'um', 'hun', 'uum'],
        correctAnswer: 'um',
        subject: 'Português',
        topic: 'Palavras Básicas'
      },
      {
        id: 2,
        question: 'Como se escreve o número "dois" em palavras?',
        options: ['dous', 'dose', 'dois', 'dols'],
        correctAnswer: 'dois',
        subject: 'Português',
        topic: 'Palavras Básicas'
      },
      {
        id: 3,
        question: 'Como se escreve o número "três" em palavras?',
        options: ['tres', 'treis', 'três', 'trez'],
        correctAnswer: 'três',
        subject: 'Português',
        topic: 'Palavras Básicas'
      },
      {
        id: 4,
        question: 'Qual destas palavras está escrita corretamente?',
        options: ['Casa', 'Kasa', 'Caza', 'Kaza'],
        correctAnswer: 'Casa',
        subject: 'Português',
        topic: 'Palavras Básicas'
      },
      {
        id: 5,
        question: 'Qual destas palavras está escrita corretamente?',
        options: ['Karro', 'Carro', 'Karo', 'Caro'],
        correctAnswer: 'Carro',
        subject: 'Português',
        topic: 'Palavras Básicas'
      },
      {
        id: 6,
        question: 'Como se escreve o número "zero" em palavras?',
        options: ['sero', 'zero', 'cero', 'zeiro'],
        correctAnswer: 'zero',
        subject: 'Português',
        topic: 'Palavras Básicas'
      },
      {
        id: 7,
        question: 'Qual é o oposto de "grande"?',
        options: ['Alto', 'Pequeno', 'Largo', 'Comprido'],
        correctAnswer: 'Pequeno',
        subject: 'Português',
        topic: 'Palavras Básicas'
      },
      {
        id: 8,
        question: 'Qual é o oposto de "alto"?',
        options: ['Baixo', 'Grande', 'Pequeno', 'Largo'],
        correctAnswer: 'Baixo',
        subject: 'Português',
        topic: 'Palavras Básicas'
      },
      {
        id: 9,
        question: 'Qual é o oposto de "novo"?',
        options: ['Velho', 'Jovem', 'Moderno', 'Atual'],
        correctAnswer: 'Velho',
        subject: 'Português',
        topic: 'Palavras Básicas'
      },
      {
        id: 10,
        question: 'Qual é o oposto de "feliz"?',
        options: ['Alegre', 'Triste', 'Contente', 'Animado'],
        correctAnswer: 'Triste',
        subject: 'Português',
        topic: 'Palavras Básicas'
      }
    ],
    // Dia 3-10 - Frases Simples e outros tópicos
    ...Array(8).fill(null).map((_, dayIndex) => 
      Array(10).fill(null).map((_, qIndex) => ({
        id: qIndex + 1,
        question: `Qual palavra significa "bom dia"?`,
        options: ['Boa tarde', 'Boa noite', 'Bom dia', 'Até logo'],
        correctAnswer: 'Bom dia',
        subject: 'Português',
        topic: dayIndex < 2 ? 'Frases Simples' : dayIndex < 4 ? 'Aprendendo a Ler' : dayIndex < 6 ? 'Palavras do Cotidiano' : 'Conversação Básica'
      }))
    )
  ],
  
  matematica: [
    // Dia 1 - Contar até 100
    [
      {
        id: 1,
        question: 'Qual número vem depois do 1?',
        options: ['0', '2', '3', '4'],
        correctAnswer: '2',
        subject: 'Matemática',
        topic: 'Contar até 100'
      },
      {
        id: 2,
        question: 'Qual número vem antes do 5?',
        options: ['3', '4', '6', '7'],
        correctAnswer: '4',
        subject: 'Matemática',
        topic: 'Contar até 100'
      },
      {
        id: 3,
        question: 'Quantos dedos temos em uma mão?',
        options: ['4', '5', '6', '10'],
        correctAnswer: '5',
        subject: 'Matemática',
        topic: 'Contar até 100'
      },
      {
        id: 4,
        question: 'Quantos dedos temos nas duas mãos?',
        options: ['8', '9', '10', '12'],
        correctAnswer: '10',
        subject: 'Matemática',
        topic: 'Contar até 100'
      },
      {
        id: 5,
        question: 'Qual número vem depois do 10?',
        options: ['9', '11', '12', '20'],
        correctAnswer: '11',
        subject: 'Matemática',
        topic: 'Contar até 100'
      },
      {
        id: 6,
        question: 'Qual número é maior: 15 ou 12?',
        options: ['12', '15', 'São iguais', 'Não sei'],
        correctAnswer: '15',
        subject: 'Matemática',
        topic: 'Contar até 100'
      },
      {
        id: 7,
        question: 'Quantas dezenas tem o número 20?',
        options: ['1', '2', '3', '0'],
        correctAnswer: '2',
        subject: 'Matemática',
        topic: 'Contar até 100'
      },
      {
        id: 8,
        question: 'Qual número vem antes do 50?',
        options: ['48', '49', '51', '52'],
        correctAnswer: '49',
        subject: 'Matemática',
        topic: 'Contar até 100'
      },
      {
        id: 9,
        question: 'Qual é o maior número de um dígito?',
        options: ['8', '9', '10', '11'],
        correctAnswer: '9',
        subject: 'Matemática',
        topic: 'Contar até 100'
      },
      {
        id: 10,
        question: 'Quantas unidades tem o número 100?',
        options: ['0', '1', '10', '100'],
        correctAnswer: '0',
        subject: 'Matemática',
        topic: 'Contar até 100'
      }
    ],
    // Dia 2 - Operações Simples
    [
      {
        id: 1,
        question: 'Quanto é 1 + 1?',
        options: ['1', '2', '3', '4'],
        correctAnswer: '2',
        subject: 'Matemática',
        topic: 'Operações Simples'
      },
      {
        id: 2,
        question: 'Quanto é 2 + 2?',
        options: ['3', '4', '5', '22'],
        correctAnswer: '4',
        subject: 'Matemática',
        topic: 'Operações Simples'
      },
      {
        id: 3,
        question: 'Quanto é 5 - 2?',
        options: ['2', '3', '4', '7'],
        correctAnswer: '3',
        subject: 'Matemática',
        topic: 'Operações Simples'
      },
      {
        id: 4,
        question: 'Quanto é 10 - 5?',
        options: ['3', '4', '5', '15'],
        correctAnswer: '5',
        subject: 'Matemática',
        topic: 'Operações Simples'
      },
      {
        id: 5,
        question: 'Quanto é 3 + 3?',
        options: ['5', '6', '7', '8'],
        correctAnswer: '6',
        subject: 'Matemática',
        topic: 'Operações Simples'
      },
      {
        id: 6,
        question: 'Quanto é 8 - 3?',
        options: ['4', '5', '6', '11'],
        correctAnswer: '5',
        subject: 'Matemática',
        topic: 'Operações Simples'
      },
      {
        id: 7,
        question: 'Quanto é 4 + 4?',
        options: ['6', '7', '8', '44'],
        correctAnswer: '8',
        subject: 'Matemática',
        topic: 'Operações Simples'
      },
      {
        id: 8,
        question: 'Quanto é 9 - 4?',
        options: ['4', '5', '6', '13'],
        correctAnswer: '5',
        subject: 'Matemática',
        topic: 'Operações Simples'
      },
      {
        id: 9,
        question: 'Quanto é 6 + 2?',
        options: ['7', '8', '9', '62'],
        correctAnswer: '8',
        subject: 'Matemática',
        topic: 'Operações Simples'
      },
      {
        id: 10,
        question: 'Quanto é 7 - 3?',
        options: ['3', '4', '5', '10'],
        correctAnswer: '4',
        subject: 'Matemática',
        topic: 'Operações Simples'
      }
    ],
    // Dia 3-10 - Dinheiro no Dia a Dia e outros tópicos
    ...Array(8).fill(null).map((_, dayIndex) => 
      Array(10).fill(null).map((_, qIndex) => ({
        id: qIndex + 1,
        question: `Se você tem 2 reais e ganha mais 3 reais, quanto você tem?`,
        options: ['4 reais', '5 reais', '6 reais', '1 real'],
        correctAnswer: '5 reais',
        subject: 'Matemática',
        topic: dayIndex < 2 ? 'Dinheiro no Dia a Dia' : dayIndex < 4 ? 'Aprendendo a Contar' : dayIndex < 6 ? 'Calculadora Básica' : 'Compras no Mercado'
      }))
    )
  ],

  informatica: [
    // Dia 1 - Ligando o Computador
    [
      {
        id: 1,
        question: 'Como ligamos o computador?',
        options: ['Apertando qualquer tecla', 'Apertando o botão de ligar', 'Batendo na tela', 'Falando com ele'],
        correctAnswer: 'Apertando o botão de ligar',
        subject: 'Informática Básica',
        topic: 'Ligando o Computador'
      },
      {
        id: 2,
        question: 'Onde fica o botão de ligar do computador?',
        options: ['Na tela', 'No teclado', 'Na torre/gabinete', 'No mouse'],
        correctAnswer: 'Na torre/gabinete',
        subject: 'Informática Básica',
        topic: 'Ligando o Computador'
      },
      {
        id: 3,
        question: 'O que aparece na tela quando ligamos o computador?',
        options: ['Nada', 'Uma luz azul', 'A área de trabalho', 'Um filme'],
        correctAnswer: 'A área de trabalho',
        subject: 'Informática Básica',
        topic: 'Ligando o Computador'
      },
      {
        id: 4,
        question: 'Quanto tempo demora para o computador ligar?',
        options: ['1 segundo', 'Alguns minutos', '1 hora', 'Um dia'],
        correctAnswer: 'Alguns minutos',
        subject: 'Informática Básica',
        topic: 'Ligando o Computador'
      },
      {
        id: 5,
        question: 'O que devemos fazer se o computador não ligar?',
        options: ['Bater nele', 'Verificar se está na tomada', 'Jogar fora', 'Gritar com ele'],
        correctAnswer: 'Verificar se está na tomada',
        subject: 'Informática Básica',
        topic: 'Ligando o Computador'
      },
      {
        id: 6,
        question: 'Qual a primeira coisa que vemos quando o computador liga?',
        options: ['Internet', 'Jogos', 'Área de trabalho', 'Calculadora'],
        correctAnswer: 'Área de trabalho',
        subject: 'Informática Básica',
        topic: 'Ligando o Computador'
      },
      {
        id: 7,
        question: 'Como sabemos que o computador está ligado?',
        options: ['Pela luz do botão', 'Pelo barulho', 'Pela tela acesa', 'Todas as anteriores'],
        correctAnswer: 'Todas as anteriores',
        subject: 'Informática Básica',
        topic: 'Ligando o Computador'
      },
      {
        id: 8,
        question: 'O que não devemos fazer quando o computador está ligando?',
        options: ['Esperar', 'Ficar mexendo', 'Ter paciência', 'Observar'],
        correctAnswer: 'Ficar mexendo',
        subject: 'Informática Básica',
        topic: 'Ligando o Computador'
      },
      {
        id: 9,
        question: 'Onde ficam os ícones quando o computador termina de ligar?',
        options: ['No teclado', 'Na área de trabalho', 'No mouse', 'Na tomada'],
        correctAnswer: 'Na área de trabalho',
        subject: 'Informática Básica',
        topic: 'Ligando o Computador'
      },
      {
        id: 10,
        question: 'Para que serve o computador?',
        options: ['Só para jogos', 'Para muitas coisas', 'Só para internet', 'Para nada'],
        correctAnswer: 'Para muitas coisas',
        subject: 'Informática Básica',
        topic: 'Ligando o Computador'
      }
    ],
    // Dia 2 - Usando o Mouse
    [
      {
        id: 1,
        question: 'O que usamos para clicar na tela do computador?',
        options: ['Teclado', 'Mouse', 'Dedo', 'Caneta'],
        correctAnswer: 'Mouse',
        subject: 'Informática Básica',
        topic: 'Usando o Mouse'
      },
      {
        id: 2,
        question: 'Quantos botões tem um mouse básico?',
        options: ['1', '2', '3', '4'],
        correctAnswer: '2',
        subject: 'Informática Básica',
        topic: 'Usando o Mouse'
      },
      {
        id: 3,
        question: 'Como seguramos o mouse?',
        options: ['Com a mão toda', 'Com dois dedos', 'Suavemente com a mão', 'Com força'],
        correctAnswer: 'Suavemente com a mão',
        subject: 'Informática Básica',
        topic: 'Usando o Mouse'
      },
      {
        id: 4,
        question: 'O que aparece na tela quando mexemos o mouse?',
        options: ['Nada', 'Uma setinha', 'Uma luz', 'Um desenho'],
        correctAnswer: 'Uma setinha',
        subject: 'Informática Básica',
        topic: 'Usando o Mouse'
      },
      {
        id: 5,
        question: 'Para abrir um programa, quantas vezes clicamos?',
        options: ['1 vez', '2 vezes', '3 vezes', '10 vezes'],
        correctAnswer: '2 vezes',
        subject: 'Informática Básica',
        topic: 'Usando o Mouse'
      },
      {
        id: 6,
        question: 'Qual botão do mouse usamos para clicar normalmente?',
        options: ['Direito', 'Esquerdo', 'Do meio', 'Qualquer um'],
        correctAnswer: 'Esquerdo',
        subject: 'Informática Básica',
        topic: 'Usando o Mouse'
      },
      {
        id: 7,
        question: 'O que acontece quando clicamos no botão direito?',
        options: ['Nada', 'Abre um menu', 'Desliga o computador', 'Quebra'],
        correctAnswer: 'Abre um menu',
        subject: 'Informática Básica',
        topic: 'Usando o Mouse'
      },
      {
        id: 8,
        question: 'Como arrastamos algo na tela?',
        options: ['Clicando e segurando', 'Só clicando', 'Balançando o mouse', 'Gritando'],
        correctAnswer: 'Clicando e segurando',
        subject: 'Informática Básica',
        topic: 'Usando o Mouse'
      },
      {
        id: 9,
        question: 'O mouse precisa estar conectado ao:',
        options: ['Monitor', 'Computador', 'Teclado', 'Impressora'],
        correctAnswer: 'Computador',
        subject: 'Informática Básica',
        topic: 'Usando o Mouse'
      },
      {
        id: 10,
        question: 'Se o mouse não funciona, o que devemos verificar?',
        options: ['Se está conectado', 'Se tem pilha', 'Se não está sujo', 'Todas as anteriores'],
        correctAnswer: 'Todas as anteriores',
        subject: 'Informática Básica',
        topic: 'Usando o Mouse'
      }
    ],
    // Dia 3-10 - Navegando na Internet e outros tópicos
    ...Array(8).fill(null).map((_, dayIndex) => 
      Array(10).fill(null).map((_, qIndex) => ({
        id: qIndex + 1,
        question: `O que é a Internet?`,
        options: ['Um lugar para comprar comida', 'Uma rede que conecta computadores', 'Um tipo de televisão', 'Um remédio'],
        correctAnswer: 'Uma rede que conecta computadores',
        subject: 'Informática Básica',
        topic: dayIndex < 2 ? 'Navegando na Internet' : 'Partes do Computador'
      }))
    )
  ]
};

// Tópicos específicos por matéria
export const topicQuestions = {
  'Letras e Sons': questionBank.portugues[0],
  'Palavras Básicas': questionBank.portugues[1],
  'Frases Simples': questionBank.portugues[2],
  'Aprendendo a Ler': questionBank.portugues[3],
  'Palavras do Cotidiano': questionBank.portugues[4],
  'Conversação Básica': questionBank.portugues[5],
  'Contar até 100': questionBank.matematica[0],
  'Operações Simples': questionBank.matematica[1],
  'Dinheiro no Dia a Dia': questionBank.matematica[2],
  'Aprendendo a Contar': questionBank.matematica[3],
  'Calculadora Básica': questionBank.matematica[4],
  'Compras no Mercado': questionBank.matematica[5],
  'Ligando o Computador': questionBank.informatica[0],
  'Usando o Mouse': questionBank.informatica[1],
  'Navegando na Internet': questionBank.informatica[2],
  'Partes do Computador': questionBank.informatica[3]
};

// Função para obter as questões do dia
export const getQuestionsForToday = (subject: string) => {
  const today = new Date();
  const dayOfCycle = Math.floor(today.getTime() / (1000 * 60 * 60 * 24)) % 10; // Ciclo de 10 dias
  
  const subjectQuestions = questionBank[subject as keyof typeof questionBank];
  if (!subjectQuestions) return [];
  
  return subjectQuestions[dayOfCycle] || subjectQuestions[0];
};

// Função para obter questões por tópico específico
export const getQuestionsByTopic = (topic: string) => {
  return topicQuestions[topic as keyof typeof topicQuestions] || [];
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
