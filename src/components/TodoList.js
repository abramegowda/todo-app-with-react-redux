import React from 'react';
import InputWithButton from './InputWithButton';
import Content from './Content';
import _map from 'lodash/map';
import { LIST_TYPE } from '../constants';

function TodoList(props) {
  const renderTodos = () => {
    const { todos, actions } = props;
    return _map(todos, todo => {
      const { id, title, isCompleted } = todo;
      const { setSelectedTodoIdAction, deleteTodoAction } = actions;
      return (
        <Content
          listId={id}
          label={title}
          isCompleted={isCompleted}
          titleAction={setSelectedTodoIdAction}
          deleteAction={deleteTodoAction}
        />
      );
    });
  };

  const { todos, actions } = props;
  const { createTodoAction } = actions;
  const { TODO } = LIST_TYPE;
  return (
    <>
      <InputWithButton title={TODO} createAction={createTodoAction} />
      {todos && renderTodos()}
    </>
  );
}

export default TodoList;
