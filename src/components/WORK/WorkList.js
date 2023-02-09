import React from "react";
import WorkItem from './WorkItem';

function WorkList(todos, remove) {
    return (
        <div>
            {todos.map((todo) => (
                <WorkItem todo={todo} key={todo.id} remove={remove} />
            ))}
        </div>
    )
}

export default WorkList;