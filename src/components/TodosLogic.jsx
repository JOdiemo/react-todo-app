import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputTodo from './InputTodo';
import TodosList from './TodoList';

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Set deve environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develelop website and content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    console.log(todos);
  };
  return (
    <div>
      <InputTodo addTodoItem={addTodoItem} />
      <TodosList todosProps={todos} handleChange={handleChange} delTodo={delTodo} />
    </div>
  );
};

export default TodosLogic;
