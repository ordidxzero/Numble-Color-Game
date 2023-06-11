interface HeaderProps {
  stage: number;
  remainingTime: number;
  score: number;
}

const Header = ({ stage, remainingTime, score }: HeaderProps) => {
  return (
    <header>
      <span>스테이지: {stage}</span>
      <span>남은 시간: {remainingTime}</span>
      <span>스코어: {score}</span>
    </header>
  );
};

export default Header;
