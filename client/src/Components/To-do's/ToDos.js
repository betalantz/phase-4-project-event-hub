import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { useState, useEffect } from "react";

// prettier-ignore
const ToDos = ({ event, user }) => {
    const [inputText, setInputText] = useState("");
    const [todos, setToDos] = useState([]);

    // const [runFetch, setRunFetch] = useState(false)

    useEffect(() => {
        fetch(`/todos/${event.id}`)
        .then((resp) => resp.json())
        .then((data) => setToDos(data))
        console.log(todos)
    },[]);

   

    return (
        <div>
        <div className='todo-list-container'>
        <ToDoForm
            setInputText={setInputText}
            inputText={inputText}
            todos={todos}
            setToDos={setToDos}
            event={event}
            user={user}
        />
            <ToDoList todos={todos} event={event} user={user}/>
            </div>
        </div>
    );
    };

export default ToDos;
