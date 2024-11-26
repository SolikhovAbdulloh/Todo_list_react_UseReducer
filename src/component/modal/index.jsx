import React, { useState } from "react";
import App2 from "../../app";
import { Link } from "react-router-dom";
import Todo_list from "../../root/todolist";

function Modal() {

  const [isopen, setisOpen] = useState(false);

  const [toggleOpen , SetToggle] = useState(false)

  const Modaltoggle = () => SetToggle((prev) => !prev)

  const OpenModal = () => setisOpen(true);
  const CloseModal = () => setisOpen(false);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <button onClick={Modaltoggle}>
          {toggleOpen ? "Yopish" : "Ochish"}
        </button>
        {toggleOpen && (
          <div className=" bg-blue flex justify-start items-start">
            bu toggle modal
          </div>
        )}
        <div className="flex flex-col">
          <button onClick={OpenModal}>Open</button>
          {isopen && (
            <div className="w-[100px] h-[100px] bg-green">
              <em>Bu modal oynasi</em>
              <button onClick={CloseModal}>exit</button>
            </div>
          )}
        </div>
        <App2 />
      </div>
      <div className="mt-[10vh]">
      </div>
    </div>
  );
}

export default Modal;
