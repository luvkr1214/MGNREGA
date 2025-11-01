import React, { useEffect, useState } from "react";

const API_BASE = "http://localhost:4000";

function FilterForm({ onSelect }) {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  // Fetch states on mount
  useEffect(() => {
    fetch(`${API_BASE}/api/states`)
      .then(res => res.json())
      .then(data => setStates(data.states || []))
      .catch(err => console.error("Error loading states:", err));
  }, []);

  // Fetch districts whenever state changes
  useEffect(() => {
    if (selectedState) {
      fetch(`${API_BASE}/api/districts?state=${selectedState}`)
        .then(res => res.json())
        .then(data => setDistricts(data.districts || []))
        .catch(err => console.error("Error loading districts:", err));
    } else {
      setDistricts([]);
    }
  }, [selectedState]);

  return (
    <div className="p-4 bg-white shadow rounded">
      <label className="block font-semibold mb-2">State:</label>
      <select
        className="border p-2 rounded w-full mb-4"
        value={selectedState}
        onChange={(e) => {
          setSelectedState(e.target.value);
          setSelectedDistrict("");
        }}
      >
        <option value="">-- Select State --</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      <label className="block font-semibold mb-2">District:</label>
      <select
        className="border p-2 rounded w-full"
        value={selectedDistrict}
        onChange={(e) => {
          setSelectedDistrict(e.target.value);
          onSelect(selectedState, e.target.value);
        }}
        disabled={!selectedState}
      >
        <option value="">-- Select District --</option>
        {districts.map((dist) => (
          <option key={dist} value={dist}>
            {dist}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterForm;
