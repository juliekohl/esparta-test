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

  function handlekeyDown(e, i) {
    if (e.key === 'Enter') {
      createTodoTask(e, i);
    }
    if (e.key === 'Backspace' && todos[i].content === '') {
      e.preventDefaul();
      return removeTodoTask(i);
    }
  }

  function createTodoTask(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      content: '',
      isCompleted: false,
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  function updateTodoTask(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  function removeTodoTask(i) {
    if (i === 0 && todos.length === 1) return;
    setTodos((todos) => todos.splice(0, i).concat(todos.splice(i + 1, todos.length)));
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }

  return (
    <div className="App">
      <form className="todo-list">
        <h1 className="title">My to do list</h1>
        <ul className="todo-list__ul">
          {todos.map((todo, i) => (
            <div className="todo">
              <div className="checkbox"></div>
              <input
                type="text"
                value={todo.content} 
                onKeyDown={(e) => handlekeyDown(e, i)}
                onChange={(e) => updateTodoTask(e, i)}
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;