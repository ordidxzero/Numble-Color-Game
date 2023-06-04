import { memo, useMemo } from 'react';

interface GameBoardProps {
  GAME_SIZE: number;
  onAnswerBlockClick: () => void;
  onWrongBlockClick: () => void;
}

const GameBoard = ({ GAME_SIZE, onAnswerBlockClick, onWrongBlockClick }: GameBoardProps) => {
  const BLOCK_COUNT = useMemo(() => Math.pow(GAME_SIZE, 2), [GAME_SIZE]);
  const answerBlockIndex = useMemo(() => Math.floor(Math.random() * BLOCK_COUNT), [BLOCK_COUNT]);
  return (
    <main>
      <div className="game-board" style={{ gridTemplateColumns: `repeat(${GAME_SIZE}, minmax(auto, 100px))` }}>
        {Array.from({ length: BLOCK_COUNT }, (_, i) => (
          <div key={i} onClick={i === answerBlockIndex ? onAnswerBlockClick : onWrongBlockClick}></div>
        ))}
      </div>
    </main>
  );
};

export default memo(GameBoard);
