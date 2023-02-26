import { list } from "../data";
import ItemComponent from "./ItemComponent";
export default function TodoItems() {
  return (
    <>
      {list.map((item) => (
        <ItemComponent key={item.id} description={item.description} />
      ))}
    </>
  );
}
