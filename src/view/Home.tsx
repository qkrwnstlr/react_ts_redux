import React, { useEffect, useState } from "react";
import CounterContainer from "../context/CounterContainer";
import { CounterProvider } from "../context/counter";

const Home: React.FC = () => {
  const [nextId, setNextId] = useState<number>(0);
  const [list, setList] = useState<number[]>([]);
  const addList = () => {
    setList(list.concat(nextId));
    setNextId(nextId + 1);
  };
  const removeList = () => {
    if (list.length == 0) return;
    setList(list.filter((value) => value != list[list.length - 1]));
  };
  useEffect(() => {
    return () => console.log("onSetList");
  }, [list]);
  return (
    <>
      <button onClick={addList}>add</button>
      <button onClick={removeList}>remove</button>
      <CounterProvider>
        {list.map((value) => (
          <CounterContainer key={value} />
        ))}
      </CounterProvider>
    </>
  );
};

export default Home;
