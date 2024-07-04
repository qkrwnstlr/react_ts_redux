import React from "react";
import Counter from "../components/Counter";
import {
  CounterProvider,
  decrease,
  increase,
  setDiff,
  useCounterDispatch,
  useCounterState,
} from "./counter";

const CounterContainer = () => {
  // 상태를 조회합니다. 상태를 조회 할 때에는 state 의 타입을 RootState 로 지정해야합니다.

  const count = useCounterState().number;
  const diff = useCounterState().diff;
  const dispatch = useCounterDispatch(); // 디스패치 함수를 가져옵니다

  // 각 액션들을 디스패치하는 함수들을 만들어줍니다
  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onSetDiff = (diff: number) => {
    dispatch(setDiff(diff));
  };

  return (
    <CounterProvider>
      <Counter
        count={count}
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
      />
    </CounterProvider>
  );
};

export default React.memo(CounterContainer);
