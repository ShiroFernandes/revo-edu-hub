
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
      aulas: ["Interpretação de Texto", "Gramática", "Redação"],
      quiz: ["Gramática", "Interpretação de Texto", "Redação"],
      videos: ["Interpretação de Texto", "Dicas de Redação", "Regras de Acentuação"]
    }
  },
  {
    name: "Matemática",
    slug: "matematica",
    icon: <BookOpen size={18} />,
    sections: {
      aulas: ["Aritmética", "Álgebra", "Geometria", "Funções"],
      quiz: ["Operações Básicas", "Álgebra", "Geometria"],
      videos: ["Equações do 1º Grau", "Geometria Espacial", "Trigonometria"]
    }
  },
  {
    name: "História",
    slug: "historia",
    icon: <BookOpen size={18} />,
    sections: {
      aulas: ["Brasil Colônia e Império", "Revoluções e Guerras", "Ditadura Militar"],
      quiz: ["História do Brasil", "História Geral", "Atualidades"],
      videos: ["Formação do Brasil", "Guerras Mundiais", "História Política"]
    }
  },
  {
    name: "Geografia",
    slug: "geografia",
    icon: <BookOpen size={18} />,
    sections: {
      aulas: ["Geografia Física", "Geopolítica", "Demografia"],
      quiz: ["Geografia Física", "Geopolítica", "Meio Ambiente"],
      videos: ["Climas do Brasil", "Globalização", "Urbanização"]
    }
  },
  {
    name: "Química",
    slug: "quimica",
    icon: <BookOpen size={18} />,
    sections: {
      aulas: ["Tabela Periódica", "Reações e Equações", "Química Orgânica"],
      quiz: ["Ligações Químicas", "Reações Químicas", "Química Orgânica"],
      videos: ["Tabela Periódica", "Reações Inorgânicas", "Hidrocarbonetos"]
    }
  },
  {
    name: "Física",
    slug: "fisica",
    icon: <BookOpen size={18} />,
    sections: {
      aulas: ["Cinemática e Dinâmica", "Leis de Newton", "Óptica"],
      quiz: ["Movimento e Força", "Leis de Newton", "Óptica"],
      videos: ["Leis de Newton", "Experimentos", "Energia e Trabalho"]
    }
  },
  {
    name: "Informática Básica",
    slug: "informatica",
    icon: <Monitor size={18} />,
    sections: {
      aulas: ["Conceitos Básicos", "Sistema Operacional", "Internet e Navegadores"],
      quiz: ["Hardware e Software", "Sistema Operacional", "Internet Básica"],
      videos: ["Introdução à Informática", "Navegação Segura", "Programas Básicos"]
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
                          <div
                            key={topic}
                            className="w-full text-left p-2 text-sm rounded text-gray-600"
                          >
                            • {topic}
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
