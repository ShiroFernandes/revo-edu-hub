
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, LogOut, Sparkles } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import MobileNavigation from './MobileNavigation';
import { motion } from 'framer-motion';

const Header = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [easterEggTriggered, setEasterEggTriggered] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const handleLogoClick = () => {
    setLogoClickCount(prev => prev + 1);
    if (logoClickCount >= 4) {
      setEasterEggTriggered(true);
      setTimeout(() => {
        setEasterEggTriggered(false);
        setLogoClickCount(0);
      }, 3000);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40 border-b-2 border-revo-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="ghost" size="icon" className="mr-2">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Menu principal</span>
                    </Button>
                  </motion.div>
                </SheetTrigger>
                <SheetContent side="left" className="p-0">
                  <MobileNavigation />
                </SheetContent>
              </Sheet>
            )}
            
            <Link to="/" className="flex-shrink-0 flex items-center">
              <motion.div
                onClick={handleLogoClick}
                className="flex items-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={easterEggTriggered ? {
                  rotate: [0, 360, 0],
                  scale: [1, 1.2, 1],
                  transition: { duration: 1, repeat: 2 }
                } : {}}
              >
                <img 
                  src="/lovable-uploads/c744f552-22a7-4164-876b-debf1ddc29dd.png" 
                  alt="REVO Logo" 
                  className="h-10 w-auto mr-2"
                />
                <motion.h1 
                  className="text-xl font-bold text-revo-purple"
                  animate={easterEggTriggered ? {
                    color: ['#D6C1E8', '#ff6b6b', '#4ecdc4', '#45b7d1', '#D6C1E8'],
                    transition: { duration: 0.5, repeat: 4 }
                  } : {}}
                >
                  REVO
                </motion.h1>
              </motion.div>
            </Link>
            
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {[
                { to: "/", label: "Início" },
                { to: "/aulas", label: "Aulas" },
                { to: "/quiz", label: "Quiz" },
                { to: "/exercicios", label: "Exercícios" }
              ].map((item) => (
                <motion.div
                  key={item.to}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to={item.to} 
                    className="border-transparent text-gray-500 hover:border-revo-purple hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
          
          {easterEggTriggered && (
            <motion.div
              className="absolute top-20 left-1/2 transform -translate-x-1/2 flex items-center bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-full shadow-lg"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              <span className="text-sm font-medium">🎉 Easter Egg Descoberto! 🎉</span>
            </motion.div>
          )}
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="ghost" className="relative w-10 h-10 rounded-full">
                    <Avatar>
                      <AvatarImage src={currentUser?.photoURL} alt={currentUser?.name} />
                      <AvatarFallback className="bg-revo-purple text-white">{currentUser?.name?.[0] || 'U'}</AvatarFallback>
                    </Avatar>
                  </Button>
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem className="text-gray-700">
                  <span>{currentUser?.name}</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-gray-700">
                  <span>{currentUser?.email}</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer flex items-center">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {isMobile && (
            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="ghost" className="relative w-10 h-10 rounded-full">
                      <Avatar>
                        <AvatarImage src={currentUser?.photoURL} alt={currentUser?.name} />
                        <AvatarFallback className="bg-revo-purple text-white">{currentUser?.name?.[0] || 'U'}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </motion.div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="text-gray-700">
                    <span>{currentUser?.name}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-gray-700">
                    <span>{currentUser?.email}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer flex items-center">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
