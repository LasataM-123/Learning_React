import React, { useState } from "react";
import "./Cal.css";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");
  function handleNumberClick(num) {
    setDisplay(display + num);
  }

  function handleOperatorClick(op) {
    if (display !== "") {
      setDisplay(display + " " + op + " ");
    }
  }

  function calculatedResult() {
    try {
      const evaluatedResult = eval(display);
      setResult(evaluatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  }

  function clearCalculator() {
    setDisplay("");
    setResult("");
  }

  return (
    <div>
      <h1 align="center">Calculator</h1>
      <div id="calculator">
        <div id="screen">{result ? result : display}</div>
        <table>
          <tbody>
            <tr>
              <td colSpan="3" id="C">
                <button id="c" onClick={clearCalculator}>
                  C
                </button>
              </td>
              <td>
                <button
                  onClick={function () {
                    handleOperatorClick("/");
                  }}
                >
                  {" "}
                  /{" "}
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={function () {
                    handleNumberClick("7");
                  }}
                >
                  7
                </button>
              </td>
              <td>
                <button
                  onClick={function () {
                    handleNumberClick("8");
                  }}
                >
                  8
                </button>
              </td>
              <td>
                <button
                  onClick={function () {
                    handleNumberClick("9");
                  }}
                >
                  9
                </button>
              </td>
              <td>
                <button
                  onClick={function () {
                    handleOperatorClick("*");
                  }}
                >
                  *
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={function () {
                    handleNumberClick("4");
                  }}
                >
                  4
                </button>
              </td>
              <td>
                <button
                  onClick={function () {
                    handleNumberClick("5");
                  }}
                >
                  5
                </button>
              </td>
              <td>
                <button
                  onClick={function () {
                    handleNumberClick("6");
                  }}
                >
                  6
                </button>
              </td>
              <td>
                <button
                  onClick={function () {
                    handleOperatorClick("-");
                  }}
                >
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={function () {
                    handleNumberClick("1");
                  }}
                >
                  1
                </button>
              </td>
              <td>
                <button
                  onClick={function () {
                    handleNumberClick("2");
                  }}
                >
                  2
                </button>
              </td>
              <td>
                <button
                  onClick={function () {
                    handleNumberClick("3");
                  }}
                >
                  3
                </button>
              </td>
              <td>
                <button
                  onClick={function () {
                    handleOperatorClick("+");
                  }}
                >
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  onClick={function () {
                    handleNumberClick("0");
                  }}
                >
                  0
                </button>
              </td>
              <td>
                <button
                  onClick={function () {
                    handleNumberClick(".");
                  }}
                >
                  .
                </button>
              </td>
              <td colSpan="2" id="eq">
                <button onClick={calculatedResult} id="equals">
                  =
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calculator;
