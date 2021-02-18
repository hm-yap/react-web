import React, { useState } from 'react';
import './App.css';
import LegoOne from './components/LegoOne';
import LegoTwo from './components/LegoTwo';

const getStyle = (colorInput, rotateDeg) => {
  // if color input is null, blank, undefined, set to red
  const targetColor = colorInput || 'red';

  //4
  const targetRotate = rotateDeg || '0';

  return {
    color: `${targetColor}`,
    backgroundColor: `${targetColor}`,
    width: '100px',
    height: '100px',
    position: 'relative',
    transform: 'translateX(-50%)',
    left: '50%',
    transform: `rotate(${targetRotate}deg)`,
    transition: 'linear 1s',
  };
};

const App = () => {
  // The state, and the function to change state
  // starts with not showing
  const [legoOne, showLegoOne] = useState(false);
  const [legoTwo, showLegoTwo] = useState(false);
  const [colorNum, setColorNum] = useState(0);
  // intially declare at here
  // setXXX is the function to change the number
  //5
  const [rotateNum, setRotateNum] = useState(0);

  const [newRotateNum, setNewRotateNumber] = useState(0);
  const updateNewRotateNumber = () => {
    const getNumber = newRotateNum + 45;
    setNewRotateNumber(getNumber);
  };

  const colors = ['red', 'yellow', 'green', 'blue'];

  const rotateDeg = [45, 90, 135, 180];

  const toogleNum = (num) => {
    return num + 1 > 3 ? 0 : num + 1;
  };

  const updateColorNumStat = () => {
    const newNum = toogleNum(colorNum);
    setColorNum(newNum);
  };

  const getColor = () => {
    return colors[colorNum];
  };

  // This gets a new number from existing rotateNum
  // Look at how the number change.. i'll put in console.log
  //3
  const updateRotateNumStat = () => {
    const newNum = rotateNum + 45;
    // so we changed the number here
    setRotateNum(newNum);
  };

  // using old way so you easy to compare with above
  //2
  function rotateAndChangeColor() {
    updateColorNumStat();
    updateNewRotateNumber();
  }

  // here
  // this needs a way to get the latest number out to replace
  // getting and setting the number is 2 separate flow
  // previously we using array (color)
  // since its number ... we can direct...
  //3
  const styleHere = getStyle(getColor(), newRotateNum); // for this to grab the latest number

  const _varOne = legoOne === true ? <LegoOne /> : undefined;

  //1
  return (
    <div className="App">
      <div>This is main page</div>
      <button onClick={() => showLegoOne(!legoOne)}>button one</button>
      <button onClick={() => showLegoTwo(!legoTwo)}>button two</button>
      {_varOne}

      <button onClick={() => rotateAndChangeColor()}>turn box</button>
      <div className="box" style={styleHere}>
        huhuhuhuhu
      </div>
    </div>
  );
};

export default App;
