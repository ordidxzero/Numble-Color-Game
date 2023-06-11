import { memo, useMemo } from 'react';

interface GameBoardProps {
  stage: number;
  onAnswerBlockClick: () => void;
  onWrongBlockClick: () => void;
}

function getDiff(stage: number) {
  const sign = Math.random() < 0.5 ? 1 : -1;
  const value = stage <= 30 ? -stage + 40 : 10;
  return sign * value;
}

function getRandint() {
  return Math.floor(Math.random() * 256);
}

const GameBoard = ({ stage, onAnswerBlockClick, onWrongBlockClick }: GameBoardProps) => {
  const GAME_SIZE = Math.round((stage + 0.5) / 2) + 1;
  const BLOCK_COUNT = useMemo(() => Math.pow(GAME_SIZE, 2), [GAME_SIZE]);
  const answerBlockIndex = useMemo(() => Math.floor(Math.random() * BLOCK_COUNT), [stage]);

  const red = useMemo(() => getRandint(), [stage]);
  const green = useMemo(() => getRandint(), [stage]);
  const blue = useMemo(() => getRandint(), [stage]);

  const answerBlockColor = useMemo(() => `rgb(${red}, ${green}, ${blue})`, [red, green, blue]);

  const redDiff = useMemo(() => {
    const diff = getDiff(stage);
    if (red + diff >= 255) {
      return 255 - red + diff;
    }
    if (red + diff <= 0) {
      return -1 * (red + diff);
    }
    return diff;
  }, [stage]);

  const greenDiff = useMemo(() => {
    const diff = getDiff(stage);
    if (green + diff >= 255) {
      return 255 - green + diff;
    }
    if (green + diff <= 0) {
      return -1 * (green + diff);
    }
    return diff;
  }, [stage]);

  const blueDiff = useMemo(() => {
    const diff = getDiff(stage);
    if (blue + diff >= 255) {
      return 255 - blue + diff;
    }
    if (blue + diff <= 0) {
      return -1 * (blue + diff);
    }
    return diff;
  }, [blue, stage]);

  const wrongBlockColor = useMemo(() => `rgb(${red + redDiff}, ${green + greenDiff}, ${blue + blueDiff})`, [red, green, blue]);

  return (
    <main>
      <div className="game-board" style={{ gridTemplateColumns: `repeat(${GAME_SIZE}, minmax(auto, 100px))` }}>
        {Array.from({ length: BLOCK_COUNT }, (_, i) => (
          <div
            key={i}
            onClick={i === answerBlockIndex ? onAnswerBlockClick : onWrongBlockClick}
            style={{ backgroundColor: i === answerBlockIndex ? answerBlockColor : wrongBlockColor }}
          ></div>
        ))}
      </div>
    </main>
  );
};

export default memo(GameBoard);
