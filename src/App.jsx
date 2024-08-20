import { useState } from 'react';
import './App.css';
import Grid from './Components/Grid';
import Header from './Components/Header';
import Winner from './Components/Winner';
import Restart from './Components/Restart';

function App() {

  const [buttonList, setButtonList] = useState(Array(9).fill(null));

  const winProbability = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const [win, setWin] = useState(false);
  const [tic, setTick] = useState(true);

  const handleClick = (event, id) => {
    let newButtonList = buttonList;
    if (tic === true) {
      event.target.innerHTML = "X";
      event.target.disabled = "true";
      newButtonList[id] = "x";
      setTick(!tic);
      checkWinner(newButtonList);
    }
    else {
      event.target.innerHTML = "O";
      event.target.disabled = "true";
      newButtonList[id] = "o";
      setTick(!tic);
      checkWinner(newButtonList);
    }
    setButtonList(newButtonList);
  }

  const handleRestart = () => {
    document.querySelectorAll('button').forEach((button) => (button.disabled = false));
    document.querySelectorAll('button').forEach((button) => (button.innerText = ""));
    let restart = document.querySelector('.restart-btn');
    restart.innerText = "Restart";
    setButtonList(Array(9).fill(null));
    setWin(false);
    setTick(true);
  }

  const checkWinner = (currentList) => {
    for (let i = 0; i < winProbability.length; i++) {
      let [a, b, c] = winProbability[i];
      if (currentList[a] === currentList[b] && currentList[b] === currentList[c] && currentList[c]) {
        setWin(true);
        break;
      }
    }
  }

  return (
    <>
      <div className="tic-tac">
        <Header></Header>
        <Grid handleClick={handleClick} buttonList={buttonList}></Grid>
        {win && <Winner></Winner>}
        <Restart handleRestart={handleRestart}></Restart>
      </div>
    </>
  )
}

export default App;
