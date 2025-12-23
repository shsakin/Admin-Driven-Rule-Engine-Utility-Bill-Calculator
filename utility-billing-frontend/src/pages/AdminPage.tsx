import { useState } from 'react';
import api from '../api/client';
import { useAdminAuth } from '../context/AdminAuthContext';

export default function AdminPage() {
  const { adminKey, logout } = useAdminAuth();

  const [ratePerUnit, setRatePerUnit] = useState('');
  const [vatPercentage, setVatPercentage] = useState('');
  const [serviceCharge, setServiceCharge] = useState('');
  const [message, setMessage] = useState('');

  const submit = async () => {
    try {
      await api.post(
        '/pricing',
        {
          ratePerUnit: Number(ratePerUnit),
          vatPercentage: Number(vatPercentage),
          serviceCharge: Number(serviceCharge),
        },
        {
          headers: {
            'x-admin-key': adminKey,
          },
        }
      );
      setMessage('✅ Pricing updated successfully');
    } catch (err: any) {
      setMessage(err.response?.data?.message || '❌ Update failed');
    }
  };

  return (
    <div style={card}>
      <div style={header}>
        <h2>Admin Configuration</h2>
        <button style={logoutBtn} onClick={logout}>
          Logout
        </button>
      </div>

      <input
        placeholder="Rate per unit"
        onChange={(e) => setRatePerUnit(e.target.value)}
        style={input}
      />

      <input
        placeholder="VAT percentage"
        onChange={(e) => setVatPercentage(e.target.value)}
        style={input}
      />

      <input
        placeholder="Service charge"
        onChange={(e) => setServiceCharge(e.target.value)}
        style={input}
      />

      <button style={button} onClick={submit}>
        Update Pricing
      </button>

      {message && <p style={{ marginTop: 12 }}>{message}</p>}
    </div>
  );
}

const card = {
  background: '#ffffff',
  padding: 24,
  borderRadius: 8,
  border: '1px solid #e5e7eb',
};

const header = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 16,
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
  background: '#2563eb',
  color: '#ffffff',
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
};

const logoutBtn = {
  background: 'transparent',
  border: 'none',
  color: '#dc2626',
  cursor: 'pointer',
};
