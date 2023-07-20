/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import '../styles/TodoItem.css';

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  const [editing, setediting] = useState(false);
  const viewmode = {};
  const editmode = {};

  if (editing) {
    viewmode.display = 'none';
  } else {
    editmode.display = 'none';
  }

  const handleEditing = () => {
    setediting(true);
  };
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setediting(false);
    }
  };

  return (
    <li className="item">
      <div className="content" style={viewmode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button type="button" onClick={handleEditing}>Edit</button>
        <button type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        value={itemProp.title}
        className="textInput"
        style={editmode}
        onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
export default TodoItem;
