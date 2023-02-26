export default function ItemComponent({
  isCompleted,
  description,
  setTodoList,
  id,
}) {
  return (
    <div className="item-container">
      <div className="checkbox-desc-container">
        <input
          onChange={() => {
            setTodoList((prev) => {
              const oldValues = prev;
              const updatedValues = oldValues.map((item) => {
                if (item.id == id) {
                  return {
                    ...item,
                    isCompleted: !item.isCompleted,
                  };
                } else {
                  return item;
                }
              });
              return [...updatedValues];
            });
          }}
          type="checkbox"
        ></input>
        <p className={isCompleted ? "desc-style-completed" : "desc-style"}>
          {description}
        </p>
      </div>

      <i
        className="trash-icon"
        onClick={() => {
          setTodoList((prev) => {
            const oldValues = prev;
            const newValues = prev.filter((item) => {
              if (item.id == id) {
                return false;
              } else {
                return true;
              }
            });
            return [...newValues];
          });
        }}
      />
    </div>
  );
}
