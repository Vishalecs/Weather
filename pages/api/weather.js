import axios from 'axios';

export default async function handler(req, res) {
  const { latitude, longitude, startDate, endDate } = req.query;

  if (!latitude || !longitude || !startDate || !endDate) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_WEATHER_API}?latitude=${latitude}&longitude=${longitude}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
    const response = await axios.get(apiUrl);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
