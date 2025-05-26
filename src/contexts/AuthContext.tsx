
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define user types
interface User {
  id: string;
  name: string;
  email: string;
  photoURL?: string;
}

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  login: () => Promise<void>;
  register: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user for demo purposes
const mockUser: User = {
  id: '1',
  name: 'Usuário REVO',
  email: 'usuario@revo.com',
  photoURL: undefined
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(mockUser);
  const [loading, setLoading] = useState(false);

  const login = async (): Promise<void> => {
    setLoading(true);
    // Simulate login process
    setTimeout(() => {
      setCurrentUser(mockUser);
      localStorage.setItem('revo_user', JSON.stringify(mockUser));
      setLoading(false);
    }, 500);
  };

  const register = async (): Promise<void> => {
    // Same as login for simplicity
    return login();
  };

  const logout = async (): Promise<void> => {
    setLoading(true);
    setTimeout(() => {
      setCurrentUser(null);
      localStorage.removeItem('revo_user');
      setLoading(false);
    }, 300);
  };

  const value = {
    currentUser,
    loading,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
