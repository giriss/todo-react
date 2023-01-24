import React, { useState } from 'react';
import TodoAdder from './components/TodoAdder';
import TodoList from './components/TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  return (
    <main className="container">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/giriss/todo-react">→ View code on GitHub</a>
      <h1>React Todo App</h1>
      <TodoAdder
        onAdd={(title) => { setTodos([...todos, { title }]); }}
      />
      <TodoList
        items={todos}
        onToggle={(title) => {
          const index = todos.findIndex((todo) => todo.title === title);
          todos[index].completed = !todos[index].completed;
          setTodos([...todos]);
        }}
        onDelete={(title) => {
          setTodos(todos.filter((todo) => todo.title !== title));
        }}
      />
    </main>
  );
}

export default TodoApp;
