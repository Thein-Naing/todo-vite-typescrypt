import { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./components/TodoTask";
import { ITodo } from "./Interfaces";

const App: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [days, setDays] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "todo") {
      setTodo(event.target.value);
    } else {
      setDays(Number(event.target.value));
    }
  };

  const addTodo = (): void => {
    const newTodo = { todoName: todo, days: days };
    setTodoList([...todoList, newTodo]);
    setTodo("");
    setDays(0);
  };

  const completeTodo = (todoNameToDelete: string): void => {
    setTodoList(
      todoList.filter((todo) => {
        return todo.todoName != todoNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="input_form_container">
          <input
            type="text"
            placeholder="Add your todo"
            name="todo"
            value={todo}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="should be finished (in Days)..."
            name="days"
            value={days}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todoList">
        {todoList.map((todo: ITodo, key: number) => {
          return <TodoTask key={key} todo={todo} completeTask={completeTodo} />;
        })}
      </div>
    </div>
  );
};

export default App
