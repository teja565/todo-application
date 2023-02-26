export default function ItemComponent(props) {
  return (
    <div className="item-container">
      <div className="checkbox-desc-container">
        <input type="checkbox"></input>
        <p className="desc-style">{props.description}</p>
      </div>

      <i className="trash-icon" />
    </div>
  );
}
