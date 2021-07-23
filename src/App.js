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
      e.preventDefault();
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
    if (window.confirm('Deseja deletar essa tarefa?')) {
      setTodos((todos) => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)));
      setTimeout(() => {
        document.forms[0].elements[i - 1].focus();
      }, 0)
    }
  }

  function toggleTodoTaskComplete(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }

  return (
    <div className="App">
      <h1 className="title">My to do list</h1>
      <form className="todo-list">
        <ul className="todo-list__ul">
          {todos.map((todo, i) => (
            <div key={i} className={`todo ${todo.isCompleted && 'todo-is-completed'}`}>
              <div className={'checkbox'} onClick={() => toggleTodoTaskComplete(i)}>
                {todo.isCompleted && (
                  <span>&#x2714;</span>
                )}
              </div>
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