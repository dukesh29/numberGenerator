import React, {useState} from 'react';
import './App.css';
import Game from "./Game/game";

function App() {

  const generateNumbersArray = () => {
    let lotteryNumbers = [];
    for (let i = 5; i <= 36; i++) {
      lotteryNumbers.push(i);
    }
    return lotteryNumbers;
  };

  const takeRandomNumbers = () => {
    let numbers = generateNumbersArray();
    const randomArr = [];
    for (let i = 0; i <= 4; i++) {
      let random = Math.floor(Math.random()*numbers.length);
      let number = numbers[random];
      numbers = numbers.filter((n) => {return n !== number});
      randomArr.push(number);
    }
    randomArr.sort(function(a, b) {
      return a - b;
    });
    return randomArr;
  };

  const [number, setNumber] = useState(takeRandomNumbers());

  const changeNumber = () => {
    setNumber(takeRandomNumbers());
  };

  return (
    <div className="App">
      <button type="button" onClick={changeNumber} id="newNumberBtn">New Numbers</button>
      <Game number1={number[0]} number2={number[1]} number3={number[2]} number4={number[3]} number5={number[4]}></Game>
    </div>
  );

}

export default App;
