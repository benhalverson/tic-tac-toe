import Square from "./Square";
interface BoardProps {
  squares: Array<string>;
  onClick: (i: number) => void;
}
const Board = ({ squares, onClick }: BoardProps) => {
  return (
    <div className="board">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
