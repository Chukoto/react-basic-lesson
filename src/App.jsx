/* ①このファイルの中の全てのuseEffctの第二引数の配列の赤波線を消す */
/* eslint react-hooks/exhaustive-deps: off */

import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickButton = () => alert();
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickCountDown = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // useEffectは、第二引数に配列を入れてあげることで、
  // 最初の一回だけ呼びたいときに使える。
  // 中で使っているStateに関わる変数は、必要であれば配列に入れてあげる。
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // ②このuseEffectの配列の中の変数の赤波だけに対して消す
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
      <br />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickCountDown}>カウントダウン</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {
        faceShowFlag && (
          <p>('A')</p>
        ) /* &&から見て、左側がtrueの場合、右側を返す */
      }
    </>
  );
};

export default App;
