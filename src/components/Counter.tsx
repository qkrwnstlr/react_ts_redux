type CounterProps = {
  title: string;
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onSetDiff: (diff: number) => void;
};

const Counter = ({
  title,
  count,
  onIncrease,
  onDecrease,
  onSetDiff,
}: CounterProps) => (
  <div>
    <h1>{title}: {count}</h1>
    <button onClick={onIncrease}>+1</button>
    <button onClick={onDecrease}>-1</button>
    <button onClick={() => onSetDiff(5)}>+5</button>
  </div>
);

Counter.defaultProps = {
  title: "Counter",
};

export default Counter;
