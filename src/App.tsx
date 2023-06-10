import { Header } from './components/Header';
import { GameBox } from './components/GameBox';
import { useState } from 'react';

function App() {
  const [stageNumber, setStageNumber] = useState(1);
  const [gamePoint, setGamePoint] = useState(0);
  return (
    <div className="App">
      <Header stageNumber={stageNumber} />
      <GameBox />
    </div>
  );
}

export default App;
