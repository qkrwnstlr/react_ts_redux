import React from "react";
import { ChangeEventHandler } from "react";

type CounterProps = {
  title?: string;
  count: number;
  diff: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onSetDiff: (diff: number) => void;
};

const Counter = ({
  title = "counter",
  count,
  diff,
  onIncrease,
  onDecrease,
  onSetDiff,
}: CounterProps) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    // e.target.value 의 타입은 문자열이기 때문에 숫자로 변환해주어야 합니다.
    onSetDiff(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <h1>
        {title}: {count}
      </h1>
      <input type="number" value={diff} min="1" onChange={onChange} />
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};


export default React.memo(Counter);
