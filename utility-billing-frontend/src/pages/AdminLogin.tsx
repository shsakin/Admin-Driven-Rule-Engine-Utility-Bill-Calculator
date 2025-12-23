import { useState } from 'react';
import { useAdminAuth } from '../context/AdminAuthContext';

export default function AdminLogin() {
  const { login } = useAdminAuth();
  const [key, setKey] = useState('');
  const [error, setError] = useState('');

  const submit = () => {
    if (!key) {
      setError('Admin password required');
      return;
    }
    login(key);
  };

  return (
    <div style={card}>
      <h2>⚠ Admin Access</h2>
      <p style={{ color: '#6b7280', fontSize: 14 }}>
        This area is restricted. Enter admin password to continue.
      </p>

      <input
        type="password"
        placeholder="Admin password"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        style={input}
      />

      <button style={button} onClick={submit}>
        Enter Admin Panel
      </button>

      {error && <p style={{ marginTop: 8 }}>{error}</p>}
    </div>
  );
}

const card = {
  background: '#fff',
  padding: 24,
  borderRadius: 8,
  border: '1px solid #e5e7eb',
};

const input = {
  width: '100%',
  padding: '10px 12px',
  marginTop: 12,
  marginBottom: 12,
  borderRadius: 6,
  border: '1px solid #d1d5db',
};

const button = {
  width: '100%',
  padding: '10px',
  background: '#111827',
  color: '#fff',
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
};
