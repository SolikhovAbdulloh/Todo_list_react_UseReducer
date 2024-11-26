import React, { useReducer, useState } from "react";

function Todo_list() {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [Edit, setEdit] = useState(null);
  const initialState = [];

  const reducer = (state, { type, text, id }) => {
    switch (type) {
      case "Add":
        return [...state, { id: Date.now(), ism: text }];
      case "delete":
        return state.filter((value) => value.id !== id);
      case "Update":
        return state.map((value) =>
          value.id === id ? { ...value, ism: text } : value
        );
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const filtered = state.filter((value) =>
    value.ism.includes(search.toLowerCase())
  );
  return (
    <div className="mt-5">
      <h2 className="text-center m-auto font-bold text-green-500 text-[42px]">
        Todo
      </h2>
      <br />
      <div className="mb-3  flex justify-center items-center  text-red-500 m-auto">
        <input
          type="text"
          value={search}
          className=" h-[37px] p-3"
          placeholder="search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="m-auto rounded-xl mt-7 p-4 w-[300px] overflow-auto max-h-[400px] bg-[grey] ">
        <div className="flex gap-3">
          <input
            onChange={(e) => setText(e.target.value)}
            placeholder="so'z kiriting"
            value={text}
            className="w-full p-[10px] text-[16px] bg-blue-200 border-[2px] border-[solid] border-[#ddd] rounded-[5px] outline-[none]"
            type="text"
          />
          <button
            onClick={() => {
              if (text.trim()) {
                dispatch({ type: "Add", text });
                setText("");
              }
            }}
            className=" flex justify-center items-center bg-[#007bff] cursor-pointer"
          >
            Add
          </button>
        </div>
        <div className="pt-3 flex flex-col gap-2">
          {filtered.map((value) => (
            <div
              className="text-red-700 flex gap-3 items-center justify-between "
              key={value.id}
            >
              {Edit === value.id ? (
                <div>
                  <input
                    className="w-[90px] p-2 rounded-xl bg-red-100 text-black border-none outline-none"
                    type="text"
                    placeholder="new text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />

                  <button className="bg-white text-pink-700"
                    onClick={() => {
                      dispatch({ type: "Update", id: value.id, text });
                      setEdit(null);
                    }}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <>

                  <h2>{value.ism}</h2>
                  <button
                    className="w-[50px] flex justify-center items-center bg-green-600 text-white"
                    onClick={() => {
                        setEdit(value.id); 
                        setText(value.ism);
                        
                        
                    }}
                    >
                    Edit
                  </button>
                      </>
              )}

              <div className="flex gap-2 items-center">
                <button
                  className="w-[70px]  bg-red-600 text-white"
                  onClick={() => dispatch({ type: "delete", id: value.id })}
                >
                  del
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo_list;
