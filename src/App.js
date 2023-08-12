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

  const clearingFields = () => {
    setNum1("");
    setNum2("");
  };

  const addOperatorHandler = () => {
    if (num1 === "") {
      setError("Num1 cannot be empty!");
      setSuccess(false);
      return;
    }
    if (num2 === "") {
      setError("Num2 cannot be empty!");
      setSuccess(false);
      return;
    }
    setError(false);
    setSuccess(true);

    setResult(+num1 + +num2);
    clearingFields();
  };
  const subOperatorHandler = () => {
    if (num1 === "") {
      setError("Num1 cannot be empty!");
      setSuccess(false);
      return;
    }
    if (num2 === "") {
      setError("Num2 cannot be empty!");
      setSuccess(false);
      return;
    }
    setError(false);
    setSuccess(true);
    setResult(+num1 - +num2);
    clearingFields();
  };
  const multiplyOperatorHandler = () => {
    if (num1 === "") {
      setError("Num1 cannot be empty!");
      setSuccess(false);
      return;
    }
    if (num2 === "") {
      setError("Num2 cannot be empty!");
      setSuccess(false);
      return;
    }
    setError(false);
    setSuccess(true);
    setResult(+num1 * +num2);
    clearingFields();
  };
  const divOperatorHandler = () => {
    if (num1 === "") {
      setError("Num1 cannot be empty!");
      setSuccess(false);
      return;
    }
    if (num2 === "") {
      setError("Num2 cannot be empty!");
      setSuccess(false);
      return;
    }
    setError(false);
    setSuccess(true);
    setResult(+num1 / +num2);
    clearingFields();
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

        <div className="result">Result: {result}</div>
        
      </div>
    </div>
  );
}

export default App;
