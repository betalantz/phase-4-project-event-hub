import ThingToDo from "./ThingToDo";

const ToDoList = ({ todos, event, user }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => {
          return <ThingToDo key={todo.name} todo={todo} id={todo.id} event={event} user={user}/>;
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
