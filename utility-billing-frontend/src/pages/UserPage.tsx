import { useState } from 'react';
import api from '../api/client';
import { generateBillPDF } from '../utils/pdf';

export default function UserPage() {
  const [units, setUnits] = useState('');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const calculate = async () => {
    try {
      const res = await api.post('/bill/calculate', {
        units: Number(units),
      });
      setResult(res.data);
      setError('');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Error');
    }
  };

  return (
    <div style={card}>
      <h2>Calculate Bill</h2>

      <input
        placeholder="Units consumed"
        value={units}
        onChange={(e) => setUnits(e.target.value)}
        style={input}
      />

      <button style={button} onClick={calculate}>
        Calculate
      </button>

      {error && <p>{error}</p>}

      {result && (
        <div style={{ marginTop: 20 }}>
          <Row label="Subtotal" value={result.subtotal} />
          <Row label="VAT" value={result.vatAmount} />
          <Row label="Service Charge" value={result.serviceCharge} />
          <hr />
          <Row label="Total" value={result.total} bold />

          {/* PDF Download Button */}
          <button
            style={{ ...button, marginTop: 12 }}
            onClick={() => generateBillPDF(result)}
          >
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
}

function Row({
  label,
  value,
  bold,
}: {
  label: string;
  value: number;
  bold?: boolean;
}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: 6 }}>
      <span>{label}</span>
      <strong style={{ fontWeight: bold ? 700 : 400 }}>{value}</strong>
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
  marginBottom: 12,
  borderRadius: 6,
  border: '1px solid #d1d5db',
};

const button = {
  width: '100%',
  padding: '10px',
  background: '#2563eb',
  color: '#fff',
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
};
