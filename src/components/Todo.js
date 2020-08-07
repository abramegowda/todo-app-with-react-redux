import React from 'react';
import TodoList from './TodoList';
import TodoTask from './TodoTask';
import './component.css';

function Todo() {
  return (
    <div className='appWrapperStyle'>
      <div className='todoContainerStyle'>
        <TodoList />
      </div>
      <div className='taskContainerStyle'>
        <TodoTask />
      </div>
    </div>
  );
}
export default Todo;