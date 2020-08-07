import React from 'react';
import _map from 'lodash/map';

import InputWithButton from './InputWithButton';
import Content from './Content';
import { LIST_TYPE } from '../constants';
import {
  getTodoList,
} from '../base/todo.selectors';
import {
  createTodoAction,
  setSelectedTodoIdAction,
  deleteTodoAction,
} from '../base/todo.actions';
import { connect } from 'react-redux';

function TodoList(props) {
  const renderTodos = () => {
    const { todos, setSelectedTodoIdAction, deleteTodoAction } = props;
    return _map(todos, todo => {
      const { id, title, isCompleted } = todo;
      return (
        <Content
          key={id}
          listId={id}
          label={title}
          isCompleted={isCompleted}
          titleAction={setSelectedTodoIdAction}
          deleteAction={deleteTodoAction}
        />
      );
    });
  };

  const { todos, createTodoAction } = props;
  const { TODO } = LIST_TYPE;
  return (
    <>
      <InputWithButton title={TODO} createAction={createTodoAction} />
      {todos && renderTodos()}
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
