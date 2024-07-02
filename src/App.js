import { useState } from "react";
import "./App.css";
import DisplayName from "./DisplayName";
import Form from "./Form";
// import Calculator from "./Calculator";
// import Todo from "./Todo";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Color from "./Color";
// import DynamicTitle from "./DynamicTitle";
// import LogOnMount from "./LogOnMount";
import Polysure from "./Polysure";

import Cal from "./Cal";
import { API } from "./API";
import HoroscopeComponent from "./Horoscope";
import { Aries } from "./Aries";
import Postapi from "./Postapi";

// import Timer from "./Timer";

function App() {
  // const firstName = "Lasata";
  // const lastName = "Maharjan";
  // const [submittedData, setSubmittedData] = useState({});
  // const handleSubmittedData = (data) => {
  //   setSubmittedData(data);
  // };
  return (
    <div>
      <Postapi />
      {/* using props to pass value to the other component */}
      {/* <DisplayName firstName={firstName} lastName={lastName} />
      <DisplayName firstName={"Luniva"} lastName={"Shrestha"} />
      <DisplayName firstName={"Shruti"} lastName={"Munikar"} /> */}
      {/* <Form onSubmit={handleSubmittedData} />
      <DisplayName
        FullName={submittedData.fullName}
        Email={submittedData.email}
        Subject={submittedData.subject}
        Message={submittedData.message}
      /> */}
    </div>
  );
}

export default App;
{
  /* <BrowserRouter>
<div>
  <nav>
    <ul>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/form">Form</Link>
      </li>
      <li>
        <Link to="/todo">Todo</Link>
      </li>
    </ul>
  </nav>

  <Routes>
    <Route path="/calculator" element={<Calculator />} />
    <Route path="/form" element={<Form />} />
    <Route path="/todo" element={<Todo />} />
  </Routes>
</div>
</BrowserRouter> */
}
