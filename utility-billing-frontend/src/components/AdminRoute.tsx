import type { ReactNode } from 'react';
import { useAdminAuth } from '../context/AdminAuthContext';
import AdminLogin from '../pages/AdminLogin';

export default function AdminRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAdminAuth();

  if (!isAuthenticated) {
    return <AdminLogin />;
  }

  return <>{children}</>;
}
