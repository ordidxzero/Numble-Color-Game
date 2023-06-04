import { useState } from 'react';
import GameBoard from './GameBoard';
import Header from './Header';

const App = () => {
  const [stage, setStage] = useState(1);
  const [remainingTime, setRemainingTime] = useState(15);
  const [score, setScore] = useState(0);
  return (
    <>
      <Header stage={stage} remainingTime={remainingTime} score={score} />
      <GameBoard stage={stage} />
    </>
  );
};

export default App;
