import React from "react";

function WorkItem({ todo, remove, onToggle }) {
    const { id, text, checked } = todo;
    return (
        <div>
            <button className="done" onClick={() => onToggle(id)}>
                {checked ? "checked" : null}
            </button>
            <section
                style={{
                    textDecoration: checked ? "line-through" : null,
                    color: checked ? "#ccc" : "#000",
                }}
            >
                {text}
            </section>
            <button className="delete" onDoubleClick={() => remove(id)}>
            </button>
        </div>
    );
}

export default WorkItem;
