import { createContext, useContext, useState } from 'react';

type AdminContextType = {
  isAuthenticated: boolean;
  adminKey: string;
  login: (key: string) => void;
  logout: () => void;
};

const AdminAuthContext = createContext<AdminContextType | null>(null);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [adminKey, setAdminKey] = useState('');

  const login = (key: string) => setAdminKey(key);
  const logout = () => setAdminKey('');

  return (
    <AdminAuthContext.Provider
      value={{
        isAuthenticated: !!adminKey,
        adminKey,
        login,
        logout,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('AdminAuth must be used inside provider');
  return ctx;
}
