import TodoHeader from "./TodoHeader";
import InputComponent from "./InputComponent";
import TodoItems from "./TodoItems";
import MainContainer from "./MainContainer";
import { useState } from "react";
export default function TodoApp() {
  const [todoList, setTodoList] = useState([]);

  return (
    <MainContainer>
      <TodoHeader />
      <InputComponent setTodoList={setTodoList} />
      <TodoItems todoList={todoList} setTodoList={setTodoList} />
    </MainContainer>
  );
}
