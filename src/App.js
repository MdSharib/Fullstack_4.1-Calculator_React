import "./App.css";
import { React, useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const numOneHandler = (ev) => {
    setNum1(ev.target.value);
  };
  const numTwoHandler = (ev) => {
    setNum2(ev.target.value);
  };

  // to display error at validation
  const displayError = (str) => {
    setError(`${str} cannot be empty!`);
    setResult("");
    setSuccess(false);
  };

  // handle operation
  const operationHandler = (operator, num1, num2) => {
    setError(false);
    setSuccess(true);
    let res = eval(`${num1} ${operator} ${num2}`).toFixed(2);
    setResult(res);
    clearingFields();
  };

  const clearingFields = () => {
    setNum1("");
    setNum2("");
  };

  // addition
  const addOperatorHandler = () => {
    if (num1.trim() === "") {
      displayError("Num1");
      return;
    }

    if (num2.trim() === "") {
      displayError("Num2");
      return;
    }

    const numberOne = +num1;
    const numberTwo = +num2;
    if ((!numberOne || !numberTwo) && numberOne !== 0 && numberTwo !== 0) {
      setError("Please enter valid number.");
      setSuccess(false);
      return;
    }

    operationHandler("+", numberOne, numberTwo);
  };

  // subtraction
  const subOperatorHandler = () => {
    if (num1.trim() === "") {
      displayError("Num1");
      return;
    }

    if (num2.trim() === "") {
      displayError("Num2");
      return;
    }

    const numberOne = +num1;
    const numberTwo = +num2;
    if ((!numberOne || !numberTwo) && numberOne !== 0 && numberTwo !== 0) {
      setError("Please enter valid number.");
      setSuccess(false);
      return;
    }

    operationHandler("-", numberOne, numberTwo);
  };

  // multiplication
  const multiplyOperatorHandler = () => {
    if (num1.trim() === "") {
      displayError("Num1");
      return;
    }

    if (num2.trim() === "") {
      displayError("Num2");
      return;
    }

    const numberOne = +num1;
    const numberTwo = +num2;
    if ((!numberOne || !numberTwo) && numberOne !== 0 && numberTwo !== 0) {
      setError("Please enter valid number.");
      setSuccess(false);
      return;
    }

    operationHandler("*", numberOne, numberTwo);
  };

  // division
  const divOperatorHandler = () => {
    if (num1.trim() === "") {
      displayError("Num1");
      return;
    }

    if (num2.trim() === "") {
      displayError("Num2");
      return;
    }

    const numberOne = +num1;
    const numberTwo = +num2;
    if ((!numberOne || !numberTwo) && numberOne !== 0 && numberTwo !== 0) {
      setError("Please enter valid number.");
      setSuccess(false);
      return;
    }

    operationHandler("/", numberOne, numberTwo);
  };

  return (
    <div className="App">
      <div className="inner-app">
        <h1 className="heading">React Calculator</h1>
        <input
          type="text"
          value={num1}
          onChange={numOneHandler}
          className="input-text"
          placeholder="Num1"
        />
        <input
          type="text"
          value={num2}
          onChange={numTwoHandler}
          className="input-text"
          placeholder="Num2"
        />
        <div className="operator-div">
          <button className="operator" onClick={addOperatorHandler}>
            +
          </button>
          <button className="operator" onClick={subOperatorHandler}>
            -
          </button>
          <button className="operator" onClick={multiplyOperatorHandler}>
            *
          </button>
          <button className="operator" onClick={divOperatorHandler}>
            /
          </button>
        </div>
        {!success && !error && <div className="result">Enter values</div>}
        {success && <div className="success">Success</div>}
        {error && <div className="error">Error: {error}</div>}

        <div className="result">
          Result: <span>{result}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
