interface SquareProps {
  value: string;
  onClick: () => void;
}

const Square = ({ value , onClick  }: SquareProps) => {
  const styles = value ? `squares ${value}` : `squares`
  return (
    <button className={styles} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;