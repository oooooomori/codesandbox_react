import React, { useEffect, useState } from "react";
import ColofulMessage from "./components/ColofulMessage";

const App2 = () => {
  const [num, setNum] = useState(0);
  const [flag, setFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchFlag = () => {
    setFlag(!flag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        flag || setFlag(true);
      } else {
        flag && setFlag(false);
      }
    }
  }, [num]);

  // const contStyle = {
  //   color: "blue",
  //   fontSize: "20px"
  // };

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちわ!</h1>
      <ColofulMessage color="blue">お元気ですか</ColofulMessage>
      <ColofulMessage color="pink">元気だよ</ColofulMessage>
      {/* <ColofulMessage color="pink" message="元気だよ" /> */}
      <button onClick={onClickCountUp}>button</button>
      <p>{num}</p>
      <button onClick={onClickSwitchFlag}>on/off</button>
      {flag && <p>でる</p>}
    </React.Fragment>
  );
};

export default App2;
