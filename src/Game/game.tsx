import React from 'react';

interface gameData {
  number1: number;
  number2: number;
  number3: number;
  number4: number;
  number5: number;
}

const Game: React.FC<gameData> = (props) => {
  return (
    <div className={"numbersDiv"}>
        <div className="number">{props.number1}</div>
        <div className="number">{props.number2}</div>
        <div className="number">{props.number3}</div>
        <div className="number">{props.number4}</div>
        <div className="number">{props.number5}</div>
    </div>
  );
};

export default Game;