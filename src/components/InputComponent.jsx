import { useState, useEffect } from "react";
export default function InputComponent(props) {
  const [buffer, setBuffer] = useState("");
  return (
    <div className="input-container">
      <input
        value={buffer}
        onChange={(e) => setBuffer(e.target.value)}
        className="input-field"
        type="text"
      ></input>
      <i
        className="add-icon"
        onClick={() => {
          props.setTodoList((prev) => {
            const oldValues = prev;
            const newValue = {
              description: buffer,
              isCompleted: false,
              id: oldValues.length + 1,
            };
            return [...prev, newValue];
          });
          setBuffer("");
        }}
      />
    </div>
  );
}
