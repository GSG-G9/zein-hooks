import React, { useState } from "react";

const ToDo = () => {
  const [toDo, setToDo] = useState([
    {
      id: 0,
      description: "let's Start",
    },
  ]);

  const [toDoText, setToDoText] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setToDoText(e.target.value);
        }}
      />
      <button
        onClick={() =>
          setToDo({
            ...toDo,
            id: toDo.length + 1,
            description: toDoText,
          })
        }
      >
        Add
      </button>

      {toDo.map((task) => (
        <div>
          <p>{task.description}</p>
          <button
            onClick={() => {
              toDo.filter((to) => to.id !== task.id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToDo;
