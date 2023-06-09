import { FC, ChangeEvent, useState } from "react";
import "./App.css";
// import TodoTask from "./Components/TodoTask";
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
      const newTodo = {
        todoName: todo,
        days: days};

    setTodoList([...todoList, todo])

    }






  return (

      <div className="App">
        <div className="header">
            <div className="input_form_container">
            <input

            onChange={handleChange}
            name='todo'
            type='text' placeholder='Add your todo'/>

            <input

            onChange={handleChange}
            name='days'
            type='number'
            placeholder='Need to finished( in days)'
            />
            </div>
              <button>Add</button>
        </div>
          {/* <button>Add</button> */}
          <div className="todoList">
      </div>
      // </div>

  )
}

export default App;
