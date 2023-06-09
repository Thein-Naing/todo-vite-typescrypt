import './App.css';
// import {TodoList} from './components/Todolist';
import React, { FC, useState } from 'react';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [days, setDays] = useState<number>(0);
  const [todo, setTodoList] = useState<string>([]);

const handleChange = (e) => {

}
  return (

      <div className="App">
        <div className="header">
            <div className="input_form_container">
            <input
            value={task}
            onChange={handleChange}
            type='text' placeholder='Add your todo'/>
            <input
            value={task}
            onChange={handleChange}
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
