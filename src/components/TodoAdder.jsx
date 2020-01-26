import React, { useRef } from 'react';

export default function TodoAdder({ onAdd }) {
  const inputRef = useRef();

  return (
    <form
      className="input-group mb-3"
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(inputRef.current.value);
        inputRef.current.value = '';
      }}
    >
      <input
        ref={inputRef}
        className="form-control"
        placeholder="New todo"
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="submit">Add</button>
      </div>
    </form>
  );
}
