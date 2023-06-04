import { memo, useMemo } from 'react';

interface GameBoardProps {
  stage: number;
}

const GameBoard = ({ stage }: GameBoardProps) => {
  const SIZE = Math.round((stage + 0.5) / 2) + 1;
  const BLOCK_COUNT = useMemo(() => Math.pow(SIZE, 2), [SIZE]);
  return (
    <main>
      <div className="game-board" style={{ gridTemplateColumns: `repeat(${SIZE}, minmax(auto, 100px))` }}>
        {Array.from({ length: BLOCK_COUNT }, (_, i) => (
          <div key={i}></div>
        ))}
      </div>
    </main>
  );
};

export default memo(GameBoard);
