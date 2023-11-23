//Devan Cullen, B00860113

import React, { useState } from 'react';
import './App.css';

function App() {
 
  const [input, setInput] = useState('');
  
  const [sum, setSum] = useState(0);
 
  const [mean, setMean] = useState(0);
 
  const [median, setMedian] = useState(0);

  //Handle input 
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  //Calculates sum, mean, and median
  const calculateValues = () => {
    const numbers = input.split(',').map(Number);
    const positiveNumbers = numbers.filter((num) => num > 0);
    
    //Calculates sum
    let sumValue = 0;
   
    for (let i = 0; i < positiveNumbers.length; i++) {
      sumValue += positiveNumbers[i];
    }

    //Calculates mean
    let meanValue = 0;
   
    if (positiveNumbers.length > 0) {
      meanValue = sumValue / positiveNumbers.length;
    }

    //Calculates median
let medianValue = 0;

const sortedNumbers = [...positiveNumbers].sort((a, b) => a - b);

const middle = Math.floor(sortedNumbers.length / 2);

if (sortedNumbers.length % 2 === 0) {
  const middle1 = sortedNumbers[middle - 1];

  const middle2 = sortedNumbers[middle];
  
  medianValue = (middle1 + middle2) / 2;
} 

else {
  medianValue = sortedNumbers[middle];
}

    //Update calculated values
    setSum(sumValue);
    
    setMean(meanValue);
    
    setMedian(medianValue);
  };

  return (
    <div className="App">
      <h1>Lab 9</h1>
      <input
       
       type="text"
       
        placeholder="Enter Some Numbers and Separate Them By Commas"
       
        value={input}
     
        onChange={handleInputChange}
      />
      <button onClick={calculateValues}>Calculate</button>
      <div>
       
        <p>Sum: {sum}</p>
      
        <p>Mean: {mean}</p>
       
        <p>Median: {median}</p>

      </div>
    </div>
  );
}

export default App;
