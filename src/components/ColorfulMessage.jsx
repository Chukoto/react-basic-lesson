import React from "react";

export const ColorfulMessage = (props) => {
  // 分割代入で、コードをスッキリさせられる。変数展開時にpropsを消しても表示できる。
  const { color, children } = props;
  const contentStyle = {
    // color: props.color, これでもOK
    // color: color,　これでもOK
    color, // プロパティ名と変数名が同じ場合は、変数を書くだけで良い
    fontSize: "20px"
  };

  return <p style={contentStyle}>{children}</p>;
};
