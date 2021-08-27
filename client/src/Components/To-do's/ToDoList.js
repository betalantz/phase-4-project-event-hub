import ThingToDo from "./ThingToDo";

const ToDoList = ({ todos, event, user, setRunFetch, runFetch }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => {
          return <ThingToDo key={todo.name} todo={todo} id={todo.id} event={event} user={user} runFetch={runFetch} setRunFetch={setRunFetch}/>;
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
