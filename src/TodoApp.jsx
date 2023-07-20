import Header from './components/Header';
import TodosLogic from './components/TodosLogic';
import './App.css';

const TodoApp = () => (
  <div className="wrapper">
    <div className="todos">
      <Header />
      <TodosLogic />
    </div>
  </div>
);
export default TodoApp;
