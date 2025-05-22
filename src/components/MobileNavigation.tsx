
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Calculator, 
  History, 
  Globe, 
  Flask, 
  Atom, 
  MessageSquare 
} from 'lucide-react';

const MobileNavigation = () => {
  const location = useLocation();

  const menuItems = [
    { 
      name: 'Início', 
      path: '/', 
      icon: <Home className="mr-2 h-5 w-5" /> 
    },
    { 
      name: 'Português', 
      path: '/aulas?subject=portugues', 
      icon: <BookOpen className="mr-2 h-5 w-5" /> 
    },
    { 
      name: 'Matemática', 
      path: '/aulas?subject=matematica', 
      icon: <Calculator className="mr-2 h-5 w-5" /> 
    },
    { 
      name: 'História', 
      path: '/aulas?subject=historia', 
      icon: <History className="mr-2 h-5 w-5" /> 
    },
    { 
      name: 'Geografia', 
      path: '/aulas?subject=geografia', 
      icon: <Globe className="mr-2 h-5 w-5" /> 
    },
    { 
      name: 'Química', 
      path: '/aulas?subject=quimica', 
      icon: <Flask className="mr-2 h-5 w-5" /> 
    },
    { 
      name: 'Física', 
      path: '/aulas?subject=fisica', 
      icon: <Atom className="mr-2 h-5 w-5" /> 
    },
    { 
      name: 'Contato', 
      path: '/contato', 
      icon: <MessageSquare className="mr-2 h-5 w-5" /> 
    }
  ];

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-revo-purple">REVO</h2>
        <p className="text-sm text-gray-500">Plataforma Educacional</p>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link 
                to={item.path}
                className={`flex items-center p-3 rounded-md transition-colors ${
                  location.pathname === item.path || 
                  (location.pathname.includes('/aulas') && item.path.includes('/aulas')) 
                    ? 'bg-purple-100 text-revo-purple font-medium' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t">
        <p className="text-xs text-gray-500 text-center">© 2023 REVO Educação</p>
      </div>
    </div>
  );
};

export default MobileNavigation;
