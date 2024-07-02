import React, { useState } from "react";
import axios from "axios";
const Postapi = () => {
  //const navigate = useNavigate();
  const [todayDate, setTodayDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [ariesData, setAriesData] = useState({});
  const [formData, setFormData] = useState({
    id: 0,
    date: "",
    description: "",
    luckyNumber: "",
    luckyColor: "",
    remedy: "",
    healthRating: "",
    wealthRating: "",
    familyRating: "",
    loveMattersRating: "",
    occupationRating: "",
    marriedLifeRating: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      const selectedDate = new Date(formData.date);
      const isoDateString = selectedDate.toISOString();
      const formObjectToSend = {
        id: 0,
        date: isoDateString,
        description: formData.description,
        luckyNumber: formData.luckyNumber,
        luckyColor: formData.luckyColor,
        remedy: formData.remedy,
        healthRating: formData.healthRating,
        wealthRating: formData.wealthRating,
        familyRating: formData.familyRating,
        loveMattersRating: formData.loveMattersRating,
        occupationRating: formData.occupationRating,
        marriedLifeRating: formData.marriedLifeRating,
      };
      console.log("At the time of submit: ", JSON.stringify(formObjectToSend));
      setLoading(true);
      const response = await axios.post(
        "https://aligned.corvo.com.np/api/aries",
        JSON.stringify(formObjectToSend),
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      console.log("Form data to send: ", formDataToSend);
      console.log("Response:", response.data);
      if (response.status === 201) {
        // Success
        alert("Horoscope data added successfully!");
        // setTimeout(() => {
        //   navigate("/");
        // }, 2000);
      } else {
        // Display an error message
        alert("Failed to add horoscope data. Please try again.");
      }
      // Add any additional logic you need after a successful submission
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setLoading(false);
    }
  };
  const handleTodayChange = (e) => {
    setTodayDate(e.target.value);
    console.log(e.target.value);
  };
  const todayData = async () => {
    try {
      console.log(`https://aligned.corvo.com.np/api/aries/${todayDate}`);
      const response = await axios.get(
        `https://aligned.corvo.com.np/api/aries/${todayDate}`
      );

      console.log(response.data);
      setAriesData(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <div>
      <h1>FORM</h1>
      <form onSubmit={handleSubmit}>
        <h2>Post Horoscope Data</h2>
        <label htmlFor="date">Date: </label>
        <input
          name="date"
          type="date"
          onChange={handleChange}
          value={formData.date}
        />
        <br />

        <label htmlFor="description">Description: </label>
        <textarea
          name="description"
          onChange={handleChange}
          value={formData.description}
          style={{
            margin: "2px auto",
            maxWidth: "280px",
            maxHeight: "300px",
            minHeight: "25px",
            minWidth: "280px",
          }}
        />
        <br />
        <label htmlFor="luckyNumber">Lucky Number: </label>
        <input
          type="text"
          name="luckyNumber"
          value={formData.luckyNumber}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="luckyColor">Lucky Color: </label>
        <input
          type="text"
          name="luckyColor"
          value={formData.luckyColor}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="remedy">Remedy: </label>
        <input
          type="text"
          name="remedy"
          value={formData.remedy}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="healthRating">Health Rating: </label>
        <input
          type="text"
          name="healthRating"
          value={formData.healthRating}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="wealthRating">Wealth Rating: </label>
        <input
          type="text"
          name="wealthRating"
          value={formData.wealthRating}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="familyRating">Family Rating: </label>
        <input
          type="text"
          name="familyRating"
          value={formData.familyRating}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="loveMattersRating">Love Matters Rating: </label>
        <input
          type="text"
          name="loveMattersRating"
          value={formData.loveMattersRating}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="occupationRating">Occupation Rating: </label>
        <input
          type="text"
          name="occupationRating"
          value={formData.occupationRating}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="marriedLifeRating">Married Life Rating: </label>
        <input
          type="text"
          name="marriedLifeRating"
          value={formData.marriedLifeRating}
          onChange={handleChange}
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? <>Submitting..</> : "Submit"}
        </button>
        <br />
        <h2>Get Today's Horoscope Data</h2>
        <label htmlFor="todayDate">Today's Date: </label>
        <input
          name="todayDate"
          type="date"
          value={todayDate}
          onChange={handleTodayChange}
        />
        <button onClick={todayData}>Get today Data</button>
        <br />
      </form>
      <br />
      <div>
        <h3>Date: {ariesData.date}</h3>
        <p>Description: {ariesData.description}</p>
        <p>Lucky Number: {ariesData.luckyNumber}</p>
        <p>Lucky Color: {ariesData.luckyColor}</p>
        <p>Remedy: {ariesData.remedy}</p>
        <p>Health Rating: {ariesData.healthRating}</p>
        <p>Wealth Rating: {ariesData.wealthRating}</p>
        <p>Family Rating: {ariesData.familyRating}</p>
        <p>Love Matters Rating: {ariesData.loveMattersRating}</p>
        <p>Occupation Rating: {ariesData.occupationRating}</p>
        <p>Married Life Rating: {ariesData.marriedLifeRating}</p>
      </div>
    </div>
  );
};
export default Postapi;
