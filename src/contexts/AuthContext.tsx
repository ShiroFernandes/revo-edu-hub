
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqDbgXVcvezQcGX8w-nIJw6-M-U2a1ArY",
  authDomain: "revo-education.firebaseapp.com",
  projectId: "revo-education",
  storageBucket: "revo-education.appspot.com",
  messagingSenderId: "456845338100",
  appId: "1:456845338100:web:3df9db8852886addfda0fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

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

// Convert Firebase User to our User model
const formatUser = (user: FirebaseUser): User => {
  return {
    id: user.uid,
    name: user.displayName || 'Usuário REVO',
    email: user.email || 'usuario@example.com',
    photoURL: user.photoURL || undefined
  };
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const formattedUser = formatUser(user);
        setCurrentUser(formattedUser);
        localStorage.setItem('revo_user', JSON.stringify(formattedUser));
      } else {
        setCurrentUser(null);
        localStorage.removeItem('revo_user');
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (): Promise<void> => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) {
        const user = formatUser(result.user);
        setCurrentUser(user);
        localStorage.setItem('revo_user', JSON.stringify(user));
      }
    } catch (error) {
      console.error("Error logging in with Google:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (): Promise<void> => {
    // For Google auth, register is the same as login
    return login();
  };

  const logout = async (): Promise<void> => {
    setLoading(true);
    try {
      await firebaseSignOut(auth);
      setCurrentUser(null);
      localStorage.removeItem('revo_user');
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
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
