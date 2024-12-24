export default function WeatherTable({ data }) {
    return (
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th>Date</th>
            <th>Max Temp (°C)</th>
            <th>Min Temp (°C)</th>
          </tr>
        </thead>
        <tbody>
          {data.time.map((date, idx) => (
            <tr key={date}>
              <td>{date}</td>
              <td>{data.temperature_2m_max[idx]}</td>
              <td>{data.temperature_2m_min[idx]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  