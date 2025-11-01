const API_BASE = "http://localhost:4000"; // ✅ match your backend port

export async function getDistricts() {
  const res = await fetch(`${API_BASE}/api/districts`);
  return res.json();
}

export async function getPerformance(district, month) {
  const res = await fetch(`${API_BASE}/api/performance?district=${district}&month=${month}`);
  return res.json();
}

export async function reverseGeocode(lat, lon) {
  const res = await fetch(`${API_BASE}/api/reverse-geocode?lat=${lat}&lon=${lon}`);
  return res.json();
}
