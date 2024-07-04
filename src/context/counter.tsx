import React, { Dispatch, useContext, useReducer } from "react";

/* ----------------- 액션 타입 ------------------ */
const SET_DIFF = "counter/SET_DIFF" as const; // 얼마만큼 더하거나 뺄지
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;

/* ----------------- 액션 생성 함수 ------------------ */
export const setDiff = (diff: number) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

type CounterAction =
  | ReturnType<typeof setDiff>
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>;

type CounterDispatch = Dispatch<CounterAction>;

/* ----------------- 모듈 상태 타입 ------------------ */
type CounterStateType = {
  number: number;
  diff: number;
};

/* ----------------- 모듈의 초기 상태 ------------------ */
const initialState: CounterStateType = {
  number: 0,
  diff: 1,
};

/* ----------------- 리듀서 ------------------ */
export default function counter(state = initialState, action: CounterAction) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}

const CounterStateContext = React.createContext<CounterStateType | null>(null);

const CounterDispatcherContext = React.createContext<CounterDispatch | null>(
  null
);

export const CounterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [counterState, counterDispatch] = useReducer(counter, initialState);
  return (
    <CounterStateContext.Provider value={counterState}>
      <CounterDispatcherContext.Provider value={counterDispatch}>
        {children}
      </CounterDispatcherContext.Provider>
    </CounterStateContext.Provider>
  );
};

export function useCounterState() {
  const state = useContext(CounterStateContext);
  if (!state) throw new Error("Cannot find CounterProvider"); // 유효하지 않을땐 에러를 발생
  return state;
}

export function useCounterDispatch() {
  const dispatch = useContext(CounterDispatcherContext);
  if (!dispatch) throw new Error("Cannot find CounterProvider"); // 유효하지 않을땐 에러를 발생
  return dispatch;
}
