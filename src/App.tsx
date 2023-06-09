import './App.css';
// import {TodoList} from './components/Todolist';
import React, { FC } from 'react';

const App: FC = () => {


  return (

      <div className="App">
        <div className="header">
          <input
          type='text' placeholder='Add your todo'/>
          <input type='number'
          placeholder='Need to finished( in days)'
          />
          <button>Add</button>
          </div>
          {/* <button>Add</button> */}

          {/* <div className="todolist"> */}

        </div>
      // </div>

  )
}

export default App;
