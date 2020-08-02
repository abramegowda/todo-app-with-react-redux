import React from 'react';
import TodoList from './TodoList';
import TodoTask from './TodoTask';
import {
  getTodoList,
  getTasksForTaskIds,
  getSelectedTodoTitle,
} from '../base/todo.selectors';
import {
  createTodoAction,
  createTaskForTodoAction,
  setTaskStatusAction,
  setSelectedTodoIdAction,
  deleteTodoAction,
  deleteTaskForTodoAction,
} from '../base/todo.actions';
import { connect } from 'react-redux';
import './component.css';

function Todo(props) {
  const {
    todos,
    tasks,
    setSelectedTodoIdAction,
    setTaskStatusAction,
    createTodoAction,
    createTaskForTodoAction,
    deleteTodoAction,
    deleteTaskForTodoAction,
    selectedTodoTitle,
  } = props;
  const todoActions = {
    setSelectedTodoIdAction,
    createTodoAction,
    deleteTodoAction,
  };
  const taskActions = {
    setTaskStatusAction,
    createTaskForTodoAction,
    deleteTaskForTodoAction,
  };

  return (
    <div className='appWrapperStyle'>
      <div className='todoContainerStyle'>
        <TodoList todos={todos} actions={todoActions} />
      </div>
      <div className='taskContainerStyle'>
        <TodoTask
          tasks={tasks}
          heading={selectedTodoTitle}
          actions={taskActions}
        />
      </div>
    </div>
  );
}

const mapState = state => ({
  todos: getTodoList(state),
  selectedTodoTitle: getSelectedTodoTitle(state),
  tasks: getTasksForTaskIds(state),
});

const mapDispatch = {
  createTodoAction,
  createTaskForTodoAction,
  setTaskStatusAction,
  setSelectedTodoIdAction,
  deleteTodoAction,
  deleteTaskForTodoAction,
};

export default connect(mapState, mapDispatch)(Todo);
