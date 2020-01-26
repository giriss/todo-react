import React from 'react';
import './Todo.css';

export default function Todo({ title, completed, onToggle, onDelete }) {
  return (
    <li
      className={`list-group-item list-group-item-action${ completed ? ' completed' : '' }`}
      onClick={() => { onToggle(); }}
    >
      {title}
      <span
        className="float-right"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      >
        <i className="fas fa-times"></i>
      </span>
    </li>
  );
}
