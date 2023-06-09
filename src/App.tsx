import './App.css';
// import {TodoList} from './components/Todolist';
import React, { FC, useState, ChangeEvent } from 'react';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [days, setDays] = useState<number>(0);
  const [todo, setTodoList] = useState<string>([]);

const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'task')
    setTask(event.target.value)
    } else {
      setDays(Number(event.target.value))
    }
  };
  return (

      <div className="App">
        <div className="header">
            <div className="input_form_container">
            <input

            onChange={handleChange}
            name='task'
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
