import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <div className="todo-container">
          <input
            type="text"
            className="todo-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task"
          />
          <button className="todo-button" onClick={addTodo}>Add Task</button>
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li key={index} className="todo-item">
                {todo}
                <button className="delete-button" onClick={() => deleteTodo(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
