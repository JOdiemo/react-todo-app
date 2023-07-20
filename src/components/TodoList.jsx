/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import TodoItem from './TodoItem';

const TodosList = ({ todosProps, handleChange, delTodo, setUpdate }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);
export default TodosList;
