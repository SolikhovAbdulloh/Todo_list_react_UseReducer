import React, { useReducer } from "react";
import Modal from "../modal";

function Reducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "qo'shish":
        return { counter: state.counter + 1 };
      case "ayirish":
        return { counter: state.counter - 1 };
      case "reset":
        return { counter: (state = 0) };
      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <div className="flex justify-center flex-col">
      <button onClick={() => dispatch({ type: "qo'shish" })}>+</button>
      <p>{state.counter}</p>
      <button onClick={() => dispatch({ type: "ayirish" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <Modal />
    </div>
  );
}

export default Reducer;
