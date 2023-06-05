import { useCallback, useEffect, useRef, useState } from 'react';
import GameBoard from './GameBoard';
import Header from './Header';

const App = () => {
  const intervalId = useRef<null | number>(null);
  const [stage, setStage] = useState(1);
  const [remainingTime, setRemainingTime] = useState(15);
  const [score, setScore] = useState(0);

  const resetState = useCallback(() => {
    setStage(1);
    setRemainingTime(15);
    setScore(0);
  }, []);

  useEffect(() => {
    if (intervalId.current != null) {
      clearInterval(intervalId.current);
      setTimeout(() => {
        intervalId.current = window.setInterval(() => {
          setRemainingTime(prevRemainingTime => prevRemainingTime - 1);
        }, 1000);
      }, 0);
    }
  }, [stage]);

  useEffect(() => {
    intervalId.current = window.setInterval(() => {
      setRemainingTime(prevRemainingTime => prevRemainingTime - 1);
    }, 1000);
    return () => {
      clearInterval(intervalId.current ?? undefined);
    };
  }, []);

  useEffect(() => {
    if (remainingTime <= 0) {
      alert(`GAME OVER! \n STAGE: ${stage} / SCORE: ${score}`);
      resetState();
    }
  }, [remainingTime]);

  const GAME_SIZE = Math.round((stage + 0.5) / 2) + 1;

  const onAnswerBlockClick = useCallback(() => {
    const thisStageScore = Math.pow(stage, 3) * remainingTime;
    setScore(prevScore => prevScore + thisStageScore);
    setStage(prevStage => prevStage + 1);
    setRemainingTime(15);
  }, [stage, remainingTime]);

  const onWrongBlockClick = useCallback(() => {
    setRemainingTime(prevRemainingTime => (prevRemainingTime - 3 < 0 ? 0 : prevRemainingTime - 3));
  }, []);

  return (
    <>
      <Header stage={stage} remainingTime={remainingTime} score={score} />
      <GameBoard GAME_SIZE={GAME_SIZE} onAnswerBlockClick={onAnswerBlockClick} onWrongBlockClick={onWrongBlockClick} />
    </>
  );
};

export default App;
