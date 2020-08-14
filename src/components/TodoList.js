import React from 'react';
import _map from 'lodash/map';

import TodoTask from './TodoTask';
import InputWithButton from './InputWithButton';
import Content from './Content';
import { LIST_TYPE } from '../constants';
import { getTodoList } from '../base/todo.selectors';
import {
  createTodoAction,
  setSelectedTodoIdAction,
  deleteTodoAction,
} from '../base/todo.actions';
import { connect } from 'react-redux';
import cx from 'classnames';

function TodoList(props) {
  const renderTodos = () => {
    const {
      todos,
      setSelectedTodoIdAction,
      deleteTodoAction,
      onTodoClick,
    } = props;
    const { TODO } = LIST_TYPE;
    return _map(todos, todo => {
      const { id, taskIds } = todo;
      const totalTasks = taskIds.length;
      return (
        <Content
          key={id}
          listId={id}
          titleAction={setSelectedTodoIdAction}
          deleteAction={deleteTodoAction}
          totalTasks={totalTasks}
          listType={TODO}
          onTodoClick={onTodoClick}
          {...todo}
        />
      );
    });
  };

  const {
    todos,
    createTodoAction,
    setSelectedTodoIdAction,
    taskContainerClass,
    onTodoClick,
  } = props;
  const { TODO } = LIST_TYPE;
  return (
    <>
      <div className='todoContainerStyle'>
        <InputWithButton
          listType={TODO}
          createAction={createTodoAction}
          resetAction={setSelectedTodoIdAction}
          onTodoClick={onTodoClick}
        />
        {todos && renderTodos()}
      </div>
      <div className={cx('taskContainerStyle', taskContainerClass)}>
        <TodoTask />
      </div>
    </>
  );
}

const mapState = state => ({
  todos: getTodoList(state),
});

const mapDispatch = {
  setSelectedTodoIdAction,
  createTodoAction,
  deleteTodoAction,
};

export default connect(mapState, mapDispatch)(TodoList);
