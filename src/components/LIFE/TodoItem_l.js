

export const Item = (props) => {


    return (
        <div
            className="item"
            style={{ backgroundColor: props.completed ? "gray" : "white" }}
        >
            <h1 className="items" onClick={() => props.deleteItem(props.id)}>{props.itemName}</h1>
            <button className="items check" onClick={() => props.completeItem(props.id)}> ✓ </button>
        </div>
    );
};