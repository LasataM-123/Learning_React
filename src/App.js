import "./App.css";
import Form from "./Form";
import Calculator from "./Calculator";
import Todo from "./Todo";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
