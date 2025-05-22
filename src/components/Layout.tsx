
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showSidebar = true }) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <div className="flex flex-grow">
        {showSidebar && !isMobile && (
          <Sidebar />
        )}
        
        {showSidebar && isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="icon" 
                className="fixed left-4 top-20 z-30"
              >
                <Menu size={24} />
                <span className="sr-only">Menu de conteúdos</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <Sidebar />
            </SheetContent>
          </Sheet>
        )}
        
        <main className="flex-grow">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
