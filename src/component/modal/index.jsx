import React, { useState } from "react";
import App2 from "../../app";

function Modal() {
  const [isopen, setisOpen] = useState(false);

  const [toggleOpen , SetToggle] = useState(false)

  const Modaltoggle = () => SetToggle((prev) => !prev)

  const OpenModal = () => setisOpen(true);
  const CloseModal = () => setisOpen(false);

  return (
    <div>
      <div>
        <button onClick={Modaltoggle}>
          {toggleOpen ? "Yopish" : "Ochish"}
        </button>
        {toggleOpen && (
          <div className=" bg-blue flex justify-start items-start">
            bu toggle modal
          </div>
        )}
        <div>
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
    </div>
  );
}

export default Modal;
