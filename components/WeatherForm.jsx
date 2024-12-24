import { useState } from 'react';

export default function WeatherForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    latitude: '',
    longitude: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto">
      <input
        name="latitude"
        placeholder="Latitude"
        value={formData.latitude}
        onChange={handleChange}
        className="p-2 w-full border mb-2"
        required
      />
      <input
        name="longitude"
        placeholder="Longitude"
        value={formData.longitude}
        onChange={handleChange}
        className="p-2 w-full border mb-2"
        required
      />
      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        className="p-2 w-full border mb-2"
        required
      />
      <input
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        className="p-2 w-full border mb-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
        Fetch Weather Data
      </button>
    </form>
  );
}
