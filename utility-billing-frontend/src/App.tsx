import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import AdminRoute from './components/AdminRoute';

export default function App() {
  return (
    <BrowserRouter>
      <header style={headerStyle}>
        <h1 style={{ margin: 0 }}>Utility Billing</h1>

      
        <nav style={navStyle}>
          <Link to="/user">User Portal</Link>
          <Link to="/admin">Admin Panel</Link>
        </nav>
      </header>

      <main style={mainStyle}>
        <Routes>
          <Route path="/" element={<Navigate to="/user" />} />

          <Route path="/user" element={<UserPage />} />

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminPage />
              </AdminRoute>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

const headerStyle = {
  background: '#ffffff',
  borderBottom: '1px solid #e5e7eb',
  padding: '16px 32px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const navStyle = {
  display: 'flex',
  gap: 16,
};

const mainStyle = {
  maxWidth: 480,
  margin: '40px auto',
  padding: '0 16px',
};
