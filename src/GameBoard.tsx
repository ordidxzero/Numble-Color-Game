const SIZE = 16;

const GameBoard = () => {
  return (
    <main className="flex items-center justify-center">
      <div className="game-board">
        {Array.from({ length: Math.pow(SIZE, 2) }, (_, i) => (
          <div key={i}></div>
        ))}
      </div>
    </main>
  );
};

export default GameBoard;
