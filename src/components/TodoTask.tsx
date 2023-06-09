import { ITodo } from "../Interfaces";

interface Props {
  todo: ITodo;
  completeTodo(todoNameToDelete: string): void;
}

const TodoTask = ({ todo, completeTodo }: Props) => {
  return (
    <div className="todo">
      <div className="content">
        <span>{todo.todoName}</span>
        <span>{todo.days}</span>
      </div>
      <button
        onClick={() => {
          completeTodo(todo.todoName);
        }}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
