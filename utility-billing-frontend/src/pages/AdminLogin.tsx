import { useState } from 'react';
import api from '../api/client';
import { useAdminAuth } from '../context/AdminAuthContext';

export default function AdminLogin() {
  const { login } = useAdminAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!password) {
      setError('Admin password is required');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await api.get('/pricing/verify-admin', {
        headers: { 'x-admin-key': password },
      });

      // ✅ Password correct
      login(password);
    } catch (err: any) {
      // ❌ Password wrong
      setError('Invalid admin password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={card}>
      <h2>⚠ Admin Access Restricted</h2>
      <p style={hint}>
        You must enter the admin password to access this page.
      </p>

      <input
        type="password"
        placeholder="Admin password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={input}
      />

      <button style={button} onClick={submit} disabled={loading}>
        {loading ? 'Verifying...' : 'Enter Admin Panel'}
      </button>

      {error && <p style={errorText}>{error}</p>}
    </div>
  );
}

const card = {
  background: '#ffffff',
  padding: 24,
  borderRadius: 8,
  border: '1px solid #e5e7eb',
};

const hint = {
  color: '#6b7280',
  fontSize: 14,
  marginBottom: 12,
};

const input = {
  width: '100%',
  padding: '10px 12px',
  marginBottom: 12,
  borderRadius: 6,
  border: '1px solid #d1d5db',
};

const button = {
  width: '100%',
  padding: '10px',
  background: '#111827',
  color: '#ffffff',
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
};

const errorText = {
  color: '#dc2626',
  marginTop: 10,
};
