import { useState } from "react";
import "./styles.css";

export default function App() {
  const [click, setClick] = useState(new Array(9).fill(null));
  const [isTrue, setIsTrue] = useState(true);
  function Click(id) {
    if (Winner(click)) {
      return;
    }
    const copyArray = click.slice();
    if (isTrue) {
      copyArray[id] = "x";
    } else {
      copyArray[id] = "o";
    }
    setIsTrue(!isTrue);

    setClick(copyArray);
  }
  const win = Winner(click);
  let status;
  if (win) {
    status = "winner is : " + win;
  } else {
    status = isTrue ? "next is: X" : "next is: O";
  }
  function Clear() {
    setClick(Array(9).fill(null));
    setIsTrue(true);
  }

  return (
    <div className="App">
      <div>
        <h1> {status}</h1>
      </div>
      <div className="container">
        <div className="box1">
          <div className="b" onClick={() => Click(0)}>
            {click[0]}
          </div>
          <div className="b" onClick={() => Click(1)}>
            {click[1]}
          </div>
          <div className="b" onClick={() => Click(2)}>
            {click[2]}
          </div>
        </div>
        <div className="box1">
          <div className="b" onClick={() => Click(3)}>
            {click[3]}
          </div>
          <div className="b" onClick={() => Click(4)}>
            {click[4]}
          </div>
          <div className="b" onClick={() => Click(5)}>
            {click[5]}
          </div>
        </div>
        <div className="box1">
          <div className="b" onClick={() => Click(6)}>
            {click[6]}
          </div>
          <div className="b" onClick={() => Click(7)}>
            {click[7]}
          </div>
          <div className="b" onClick={() => Click(8)}>
            {click[8]}
          </div>
        </div>
      </div>
      <button onClick={Clear}>clear</button>
    </div>
  );
}
function Winner(click) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (click[a] && click[a] === click[b] && click[a] === click[c]) {
      return click[a];
    }
  }
  return null;
}
