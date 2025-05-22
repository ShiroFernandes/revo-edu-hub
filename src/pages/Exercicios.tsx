
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Calculator, 
  History, 
  Globe, 
  Flame, 
  Atom
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const materias = [
  {
    id: 'portugues',
    nome: 'Português',
    descricao: 'Exercícios de gramática, interpretação de texto e redação',
    icon: <BookOpen className="h-10 w-10 text-revo-purple" />
  },
  {
    id: 'matematica',
    nome: 'Matemática',
    descricao: 'Exercícios de álgebra, geometria e aritmética',
    icon: <Calculator className="h-10 w-10 text-revo-purple" />
  },
  {
    id: 'historia',
    nome: 'História',
    descricao: 'Exercícios sobre eventos históricos brasileiros e mundiais',
    icon: <History className="h-10 w-10 text-revo-purple" />
  },
  {
    id: 'geografia',
    nome: 'Geografia',
    descricao: 'Exercícios de geografia física, política e econômica',
    icon: <Globe className="h-10 w-10 text-revo-purple" />
  },
  {
    id: 'quimica',
    nome: 'Química',
    descricao: 'Exercícios sobre elementos químicos, reações e compostos',
    icon: <Flame className="h-10 w-10 text-revo-purple" />
  },
  {
    id: 'fisica',
    nome: 'Física',
    descricao: 'Exercícios sobre mecânica, termodinâmica e óptica',
    icon: <Atom className="h-10 w-10 text-revo-purple" />
  }
];

const Exercicios = () => {
  return (
    <Layout showSidebar={false}>
      <div className="revo-container py-10">
        <h1 className="revo-page-title">Exercícios por Matéria</h1>
        
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-center text-gray-600 mb-8">
            Escolha uma matéria abaixo para praticar seus conhecimentos com exercícios interativos.
            Receba feedback instantâneo e acompanhe seu progresso.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {materias.map((materia) => (
              <Card key={materia.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex justify-center mb-4">
                    {materia.icon}
                  </div>
                  <CardTitle className="text-center text-xl">{materia.nome}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-center text-gray-600">
                    {materia.descricao}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-3">
                  <Button asChild className="w-full bg-revo-purple hover:bg-revo-purple-dark">
                    <Link to={`/exercicios?subject=${materia.id}`}>
                      Praticar Exercícios
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Exercicios;
