import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      content: 'Task 1',
      isCompleted: true,
    },
    {
      content: 'Task 2',
      isCompleted: false,
    },
    {
      content: 'Task 3',
      isCompleted: false,
    },
  ]);

  return (
    <div className="App">
      <h1 className="title">My to do list</h1>
      <form className="todo-list">
        <ul className="todo-list__ul">
          {todos.map((todo, i) => (
            <div className="todo">
              <div className="checkbox"></div>
              <input type="text" value={todo.content} />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;