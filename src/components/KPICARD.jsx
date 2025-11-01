import React from 'react';

export default function KPICard({ title, value, delta }) {
  const up = delta > 0;
  return (
    <div className="kpi-card">
      <div className="kpi-title">{title}</div>
      <div className="kpi-value">{value}</div>
      <div className={`kpi-delta ${up ? 'up' : 'down'}`}>
        {up ? '↑' : '↓'} {Math.abs(delta)}%
      </div>
    </div>
  );
}
