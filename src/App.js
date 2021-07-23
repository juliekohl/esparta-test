import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { content: 'Task 1', isCompleted: true },
    { content: 'Task 2', isCompleted: false },
    { content: 'Task 3', isCompleted: false },
  ]);

  const formRef = useRef(null);

  function createTask() {
    const newTodos = [...todos];
    newTodos.unshift({
      content: '',
      isCompleted: false,
    });
    setTodos(newTodos);

    setTimeout(() => {
      let form = formRef.current;
      form.elements[0].focus();
    }, 0);
  }

  function removeTask(i) {
    if (todos.length === 1) return;

    if (window.confirm('Confirm delete?')) {
      setTodos((todos) => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)));
      
      setTimeout(() => {
        let form = formRef.current;
        if (form.elements[i - 1]) {
          form.elements[i - 1].focus();
        } else {
          form.elements[0].focus();
        }
      }, 0);
    }
  }

  function handleChangeUpdateTask(e, i) {
    const newTodos = [...todos];
    newTodos[i].content = e.target.value;
    setTodos(newTodos);
  }

  function handleKeyDown(e, i) {
    if (e.key === 'Enter') {
      createTask();
    }

    if (e.key === 'Backspace' && todos[i].content === '') {
      e.preventDefault();
      return removeTask(i);
    }
  }

  function toggleTaskComplete(index) {
    let temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    temporaryTodos = temporaryTodos.sort(dynamicSort("isCompleted"));
    setTodos(temporaryTodos);
  }

  function dynamicSort(property) {
    let sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 0 : 1;
        return result * sortOrder;
    }
  }

  return (
    <div className="App">
      <h1 className="title">My Todo List</h1>
      <form className="todo-list" ref={formRef}>
        <ul className="todo-list__ul">
          {todos.map((todo, i) => (
            <div key={i} className={`todo ${todo.isCompleted && 'todo-is-completed'}`}>
              <div className={'checkbox'} onClick={() => toggleTaskComplete(i)}>
                {todo.isCompleted && (
                  <span>&#x2714;</span>
                )}
              </div>
              <input
                type="text"
                value={todo.content}
                onKeyDown={(e) => handleKeyDown(e, i)}
                onChange={(e) => handleChangeUpdateTask(e, i)}
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;