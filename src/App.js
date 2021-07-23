import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">My to do list</h1>
      <form className="todo-list">
        <ul className="todo-list__ul">
          <div className="todo">
            <div className="checkbox"></div>
            <input type="text" value="Todo one"></input>
          </div>
        </ul>
      </form>
    </div>
  );
}

export default App;