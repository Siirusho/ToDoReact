import ListItem from "./ListItem";

function List(props) {
  return (
    <div>
      {props.items.map((items) => (
        <ListItem key={items.id} items={items} delMe={props.delMe} />
      ))}
    </div>
  );
}

export default List;
