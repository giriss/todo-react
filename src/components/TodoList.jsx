import React from 'react';
import Todo from './Todo';

export default function TodoList({ items, onToggle, onDelete }) {
  return (
    <ul className="list-group">
      {items.map(({ title, completed }) => (
        <Todo
          key={title}
          title={title}
          completed={completed}
          onToggle={() => onToggle(title)}
          onDelete={() => onDelete(title)}
        />
      ))}
    </ul>
  );
}
