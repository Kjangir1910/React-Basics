import React, { useState } from "react";

const ChildComponent = ({ index }) => {
  return <div>Child Component {index + 1}</div>;
};

const Basics = () => {
  const data = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew'
  ];
  const [isVisible, setIsVisible] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [text, setText] = useState('');
  const [children, setChildren] = useState([]);
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);
  const [counter, setCounter] = useState(0);
  const [query, setQuery] = useState('');

  const handleHange = (event) => {
    setQuery(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };

  const calculateSum = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult(sum);
  };

  const addChild = () => {
    setChildren([...children, children.length]);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const toggleButton = () => {
    setIsDisabled(!isDisabled);
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const styles = {
    container: {
      backgroundColor: '#fff',
      padding: '20px',
      margin: '20px',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif'
    },
    h1: {
      color: '#333',
      marginBottom: '10px'
    },
    button: {
      backgroundColor: '#007bff',
      border: 'none',
      color: 'white',
      padding: '10px 20px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
      margin: '4px 2px',
      cursor: 'pointer',
      borderRadius: '5px'
    },
    buttonDisabled: {
      backgroundColor: '#d6d6d6',
      cursor: 'not-allowed'
    },
    buttonHover: {
      backgroundColor: '#0056b3'
    },
    input: {
      padding: '10px',
      margin: '10px 0',
      boxSizing: 'border-box',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: 'calc(100% - 22px)'
    },
    ul: {
      listStyleType: 'none',
      padding: '0'
    },
    li: {
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      margin: '5px 0',
      padding: '10px',
      borderRadius: '5px'
    }
  };

  return (
    <>
      <div style={styles.container}>
        <div className="JSX">
          <h1 style={styles.h1}>JSX Example</h1>
          <p>Hello World</p>
        </div>

        <div className="Array">
          <h1 style={styles.h1}>Array of Records Example</h1>
          <p>Record 1</p>
          <p>Record 2</p>
          <p>Record 3</p>
          <p>Record 4</p>
          <p>Record 5</p>
          <p>Record 6</p>
        </div>

        <div>
      <div className="Visible-Element">
        <h1 style={styles.h1}>Show/Hide Element</h1>
        <button
          style={{ ...styles.button, ...(isDisabled ? styles.buttonDisabled : {}) }}
          onClick={toggleVisibility}
          disabled={isDisabled}
        >
          {isVisible ? 'Hide' : 'Show'} Element
        </button>
        {isVisible && <div>I am visible content</div>}
      </div>

      <div className="Disable-Button">
        <h1 style={styles.h1}>Enable/Disable Button</h1>
        <button style={styles.button} onClick={toggleButton}>
          {isDisabled ? 'Enable' : 'Disable'} Button
        </button>
      </div>
    </div>
        <div className="Data-binding">
          <h1 style={styles.h1}>Data Binding Using Textbox</h1>
          <input style={styles.input} type="text" value={text} onChange={handleChange} />
          <p>Current value: {text}</p>
        </div>

        <div className="Add-Child">
          <h1 style={styles.h1}>Dynamically Add Child Components</h1>
          <button style={styles.button} onClick={addChild}>Add Child</button>
          <div>
            {children.map((child, index) => (
              <ChildComponent key={index} index={index} />
            ))}
          </div>
        </div>

        <div className="Sum">
          <h1 style={styles.h1}>Sum Calculator</h1>
          <div>
            <input
              style={styles.input}
              type="number"
              value={number1}
              onChange={handleNumber1Change}
              placeholder="Enter first number"
            />
            <input
              style={styles.input}
              type="number"
              value={number2}
              onChange={handleNumber2Change}
              placeholder="Enter second number"
            />
          </div>
          <button style={styles.button} onClick={calculateSum}>Calculate Sum</button>
          {result !== null && <h2>Sum: {result}</h2>}
        </div>

        <div className="Counter">
          <h1 style={styles.h1}>Create a Counter</h1>
          <div>
            <button style={styles.button} onClick={increaseCounter}>Increase</button>
            <button style={styles.button} onClick={decreaseCounter}>Decrease</button>
          </div>
          <h2>Counter Value: {counter}</h2>
        </div>

        <div className="Search-Filter">
          <h1 style={styles.h1}>Build Search Filter</h1>
          <input
            style={styles.input}
            type="text"
            value={query}
            onChange={handleHange}
            placeholder="Search..."
          />
          <ul style={styles.ul}>
            {filteredData.map((item, index) => (
              <li key={index} style={styles.li}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Basics;
