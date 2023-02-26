import TodoHeader from "./TodoHeader";
import InputComponent from "./InputComponent";
import TodoItems from "./TodoItems";
import MainContainer from "./MainContainer";
export default function TodoApp() {
  return (
    <MainContainer>
      <TodoHeader />
      <InputComponent />
      <TodoItems />
    </MainContainer>
  );
}
