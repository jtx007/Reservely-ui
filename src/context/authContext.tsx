/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useContext, useEffect } from 'react';
import { getCurrentUserQuery } from '@/services';
import { useQuery } from '@tanstack/react-query';
import type { UserResponse } from '@/types';
interface AuthContextType {
  authToken: string | null;
  isLoggedIn: boolean;
  setTokenLogin: (token: string) => void;
  setTokenLogout: () => void;
  currentUser: UserResponse | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authToken, setAuthToken] = useState<string | null>(
    localStorage.getItem('token'),
  );

  const [currentUser, setCurrentUser] = useState<UserResponse | null>(() => {
    try {
      const stored = localStorage.getItem('current_user');
      return stored ? (JSON.parse(stored) as UserResponse) : null;
    } catch {
      return null;
    }
  });
  const { data } = useQuery(getCurrentUserQuery(authToken ?? ''));

  const setTokenLogin = (token: string) => {
    localStorage.setItem('token', token);
    setAuthToken(token);
  };

  const setTokenLogout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
    setCurrentUser(null);
    localStorage.removeItem('current_user');
  };

  useEffect(() => {
    if (data) {
      setCurrentUser(data);
      localStorage.setItem('current_user', JSON.stringify(data));
    }
  }, [data]);

  return (
    <AuthContext.Provider
      value={{
        authToken,
        setTokenLogin,
        setTokenLogout,
        isLoggedIn: !!authToken,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
