import { useState } from 'react';
import WeatherForm from '../components/WeatherForm';
import WeatherChart from '../components/WeatherChart';
import WeatherTable from '../components/WeatherTable';

export default function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeatherData = async (formData) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(
        `/api/weather?latitude=${formData.latitude}&longitude=${formData.longitude}&startDate=${formData.startDate}&endDate=${formData.endDate}`
      );
      const data = await res.json();
      if (res.ok) {
        setWeatherData(data);
      } else {
        setError(data.error || 'Failed to fetch data');
      }
    } catch (err) {
      setError('Error fetching weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center my-4">Weather Dashboard</h1>
      <WeatherForm onSubmit={fetchWeatherData} />
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {weatherData && (
        <>
          <WeatherChart data={weatherData.daily} />
          <WeatherTable data={weatherData.daily} />
        </>
      )}
    </div>
  );
}
