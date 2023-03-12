import ItemComponent from "./ItemComponent";
export default function TodoItems({ todoList, setTodoList }) {
  return (
    <>
      {todoList.map((item) => (
        <ItemComponent
          id={item.id}
          description={item.description}
          isCompleted={item.isCompleted}
          setTodoList={setTodoList}
        />
      ))}
    </>
  );
}
