import React, { useState, useEffect } from "react";
import axios from "axios";
export const Aries = () => {
  const [ariesData, setAriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://aligned.corvo.com.np/api/aries"
        );
        console.log(response);
        setAriesData(response.data);
        ariesData.forEach((item) => {
          console.log(item);
        });
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error message: {error.message}</p>;
  return (
    <div>
      <h1>Horoscope data</h1>
      {ariesData.length > 0 ? (
        <ul>
          {ariesData.map((item) => (
            <li key={item.id}>
              <h2>Date: {item.date}</h2>
              <p>Description: {item.description}</p>
              <p>Lucky Number: {item.luckyNumber}</p>
              <p>Lucky Color: {item.luckyColor}</p>
              <p>Remedy: {item.remedy}</p>
              <p>Health Rating: {item.healthRating}</p>
              <p>Wealth Rating: {item.wealthRating}</p>
              <p>Family Rating: {item.familyRating}</p>
              <p>Love Matters Rating: {item.loveMattersRating}</p>
              <p>Occupation Rating: {item.occupationRating}</p>
              <p>Married Life Rating: {item.marriedLifeRating}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};
