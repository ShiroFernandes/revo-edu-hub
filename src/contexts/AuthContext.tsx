
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

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

// Mock authentication functions
const mockAuth = {
  signInWithGoogle: async (): Promise<User> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data
    return {
      id: 'user123',
      name: 'Usuário REVO',
      email: 'usuario@example.com',
      photoURL: 'https://i.pravatar.cc/150?img=3'
    };
  },
  registerWithGoogle: async (): Promise<User> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data (same as sign in for demo purposes)
    return {
      id: 'user123',
      name: 'Novo Usuário REVO',
      email: 'novo.usuario@example.com',
      photoURL: 'https://i.pravatar.cc/150?img=5'
    };
  },
  signOut: async (): Promise<void> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return;
  }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Check for existing user session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('revo_user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);
  
  // Save user to localStorage when it changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('revo_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('revo_user');
    }
  }, [currentUser]);

  const login = async (): Promise<void> => {
    setLoading(true);
    try {
      const user = await mockAuth.signInWithGoogle();
      setCurrentUser(user);
    } finally {
      setLoading(false);
    }
  };

  const register = async (): Promise<void> => {
    setLoading(true);
    try {
      const user = await mockAuth.registerWithGoogle();
      setCurrentUser(user);
    } finally {
      setLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setLoading(true);
    try {
      await mockAuth.signOut();
      setCurrentUser(null);
      localStorage.removeItem('revo_user');
    } finally {
      setLoading(false);
    }
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
      {!loading && children}
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
