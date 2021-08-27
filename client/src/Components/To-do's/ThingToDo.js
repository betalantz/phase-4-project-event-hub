import React from "react";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";


// prettier-ignore
const ThingToDo = ({ todo, event, user, setRunFetch, runFetch  }) => {
    const [className, setClassName] = useState("");

    const completedTodo = {
        user_id: user.id,
        thing_to_do: todo.thing_to_do,
        completed: true,
        event_id: event.id,
    };

    function handleCompleted() {
        
        fetch(`/todos/${todo.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(completedTodo),
        }).then(resp => resp.json())
        .then(setClassName("completed"))
        .then(setRunFetch(!runFetch))
        console.log(completedTodo)
    }

    return (
        <div className='thing-to-do'>
        {todo.completed ? (<li className='completed'>{todo.thing_to_do}</li>) : (<li className={className}>{todo.thing_to_do}</li>)}

        <button className='check-btn' onClick={() => handleCompleted(todo)}><FaCheck /></button>
        </div>
    );
    };

export default ThingToDo;
