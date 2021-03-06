import { FaPlus } from "react-icons/fa";


// prettier-ignore
const ToDoForm = ({inputText,setInputText,todos,setToDos,event,user,} ) => {
    

    function submitTodo(e) {

        const newTodo = {
            user_id: user.id,
            thing_to_do: inputText,
            completed: false,
            event_id: event.id,
        };

        e.preventDefault();
        fetch("/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTodo),
        }).then(resp => resp.json())
        .then(setToDos([...todos, newTodo]))
    }

    return (
        <form onSubmit={(e) => submitTodo(e)}>
            <input
                placeholder="Enter a todo..."
                type="text"
                className="to-do-input"
                onChange={(e) => setInputText(e.target.value)}
            />
            <button className="todo-btn" type="submit">
                <FaPlus />
            </button>
        </form>
    );
};

export default ToDoForm;
