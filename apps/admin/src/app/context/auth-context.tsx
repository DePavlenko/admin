import React from 'react';

interface AuthContextType {
  isLogged: boolean;
  signIn: () => void;
  signOut: () => void;
}

const AuthContext = React.createContext<AuthContextType>({
  isLogged: false,
  signIn: () => undefined,
  signOut: () => undefined,
});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogged, setIsLogged] = React.useState<boolean>(false);

  const signIn = () => setIsLogged(true);
  const signOut = () => setIsLogged(false);

  const value = { isLogged, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within ThemeProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
