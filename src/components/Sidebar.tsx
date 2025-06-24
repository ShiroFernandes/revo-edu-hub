
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight, BookOpen, Video, FileQuestion, Monitor } from 'lucide-react';
import { cn } from '@/lib/utils';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Navigation data structure
const subjectsData = [
  {
    name: "Português",
    slug: "portugues",
    icon: <BookOpen size={18} />,
    sections: {
      aulas: ["Leitura Básica", "Palavras Simples", "Frases do Dia a Dia"],
      quiz: [
        { name: "Letras e Sons", slug: "Letras e Sons" },
        { name: "Palavras Básicas", slug: "Palavras Básicas" },
        { name: "Frases Simples", slug: "Frases Simples" },
        { name: "Aprendendo a Ler", slug: "Aprendendo a Ler" },
        { name: "Palavras do Cotidiano", slug: "Palavras do Cotidiano" },
        { name: "Conversação Básica", slug: "Conversação Básica" }
      ],
      videos: [
        { name: "Aprendendo a Ler", slug: "Aprendendo a Ler" },
        { name: "Palavras do Cotidiano", slug: "Palavras do Cotidiano" },
        { name: "Conversação Básica", slug: "Conversação Básica" }
      ]
    }
  },
  {
    name: "Matemática",
    slug: "matematica",
    icon: <BookOpen size={18} />,
    sections: {
      aulas: ["Números Básicos", "Soma e Subtração", "Uso do Dinheiro"],
      quiz: [
        { name: "Contar até 100", slug: "Contar até 100" },
        { name: "Operações Simples", slug: "Operações Simples" },
        { name: "Dinheiro no Dia a Dia", slug: "Dinheiro no Dia a Dia" },
        { name: "Aprendendo a Contar", slug: "Aprendendo a Contar" },
        { name: "Calculadora Básica", slug: "Calculadora Básica" },
        { name: "Compras no Mercado", slug: "Compras no Mercado" }
      ],
      videos: [
        { name: "Aprendendo a Contar", slug: "Aprendendo a Contar" },
        { name: "Calculadora Básica", slug: "Calculadora Básica" },
        { name: "Compras no Mercado", slug: "Compras no Mercado" }
      ]
    }
  },
  {
    name: "Informática Básica",
    slug: "informatica",
    icon: <Monitor size={18} />,
    sections: {
      aulas: ["Ligando o Computador", "Usando o Mouse", "Navegando na Internet"],
      quiz: [
        { name: "Ligando o Computador", slug: "Ligando o Computador" },
        { name: "Usando o Mouse", slug: "Usando o Mouse" },
        { name: "Navegando na Internet", slug: "Navegando na Internet" },
        { name: "Partes do Computador", slug: "Partes do Computador" }
      ],
      videos: ["Conhecendo o Computador", "WhatsApp e E-mail", "Pesquisas no Google"]
    }
  }
];

// Icon mapping for section types
const sectionIcons = {
  aulas: <BookOpen size={16} />,
  quiz: <FileQuestion size={16} />,
  videos: <Video size={16} />
};

// Sidebar component
const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedSubjects, setExpandedSubjects] = useState<string[]>([]);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  
  const currentPath = location.pathname;
  const currentTab = currentPath.split('/')[1] || "";
  
  // Toggle subject expansion
  const toggleSubject = (subjectName: string) => {
    setExpandedSubjects(prev => 
      prev.includes(subjectName) 
        ? prev.filter(s => s !== subjectName)
        : [...prev, subjectName]
    );
  };
  
  // Toggle section expansion
  const toggleSection = (sectionKey: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionKey) 
        ? prev.filter(s => s !== sectionKey)
        : [...prev, sectionKey]
    );
  };
  
  // Navigate to content page with subject parameter
  const navigateToSection = (section: string, subjectSlug: string) => {
    navigate(`/${section}?subject=${subjectSlug}`);
  };

  // Navigate to specific topic
  const navigateToTopic = (section: string, subjectSlug: string, topicSlug: string) => {
    navigate(`/${section}?subject=${subjectSlug}&topic=${topicSlug}`);
  };

  return (
    <div className="h-full w-64 bg-gray-50 border-r border-gray-200 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Conteúdos</h2>
        
        <div className="space-y-1">
          {subjectsData.map((subject) => (
            <Collapsible
              key={subject.name}
              open={expandedSubjects.includes(subject.name)}
              onOpenChange={() => toggleSubject(subject.name)}
              className="border border-gray-200 rounded-md overflow-hidden mb-2"
            >
              <CollapsibleTrigger className="flex items-center justify-between w-full p-3 text-left bg-white hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  {subject.icon}
                  <span className="ml-2 font-medium">{subject.name}</span>
                </div>
                {expandedSubjects.includes(subject.name) ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </CollapsibleTrigger>
              
              <CollapsibleContent className="bg-gray-50">
                {Object.entries(subject.sections).map(([section, topics]) => (
                  <Collapsible
                    key={`${subject.name}-${section}`}
                    open={expandedSections.includes(`${subject.name}-${section}`)}
                    onOpenChange={() => toggleSection(`${subject.name}-${section}`)}
                    className="ml-2 mr-1 my-1"
                  >
                    <CollapsibleTrigger 
                      className={cn(
                        "flex items-center justify-between w-full p-2 text-left rounded transition-colors",
                        (currentTab === section) ? "bg-blue-100 text-blue-700" : "hover:bg-gray-200"
                      )}
                    >
                      <div className="flex items-center">
                        {sectionIcons[section as keyof typeof sectionIcons]}
                        <span className="ml-2 capitalize">{section}</span>
                      </div>
                      {expandedSections.includes(`${subject.name}-${section}`) ? (
                        <ChevronDown size={14} />
                      ) : (
                        <ChevronRight size={14} />
                      )}
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <div className="ml-6 my-1 space-y-1">
                        <button
                          onClick={() => navigateToSection(section, subject.slug)}
                          className="w-full text-left p-2 text-sm rounded hover:bg-blue-100 hover:text-blue-700 transition-colors bg-blue-50 text-blue-600 font-medium"
                        >
                          Ver todos os {section}
                        </button>
                        {topics.map((topic) => (
                          <div key={typeof topic === 'string' ? topic : topic.name}>
                            {typeof topic === 'string' ? (
                              <div className="w-full text-left p-2 text-sm rounded text-gray-600">
                                • {topic}
                              </div>
                            ) : (
                              <button
                                onClick={() => navigateToTopic(section, subject.slug, topic.slug)}
                                className="w-full text-left p-2 text-sm rounded hover:bg-blue-100 hover:text-blue-700 transition-colors text-gray-600"
                              >
                                • {topic.name}
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
