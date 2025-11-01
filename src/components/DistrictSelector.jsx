import React from 'react';

export default function DistrictSelector({ districts, value, onChange, onLocate }) {
  return (
    <div className="district-selector">
      <label className="label">जिला चुनें</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">-- अपना जिला चुनें --</option>
        {districts.map((d) => <option key={d} value={d}>{d}</option>)}
      </select>
      <button className="locate-btn" onClick={onLocate}>मेरी जगह से ढूँढें</button>
    </div>
  );
}
