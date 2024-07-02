import React, { useEffect, useState } from "react";
import axios from "axios";
export const API = () => {
  const [horoscopeData, setHoroscopeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://aligned.corvo.com.np/api/aquarius/2024-07-01"
        );
        console.log(response.data);
        setHoroscopeData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return <div></div>;
};
