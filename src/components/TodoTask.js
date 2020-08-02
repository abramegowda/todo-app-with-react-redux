import React from 'react';
import InputWithButton from './InputWithButton';
import Content from './Content';
import _map from 'lodash/map';
import { LIST_TYPE } from '../constants';

function TodoTask(props) {
  const renderTodos = () => {
    const { tasks, actions } = props;
    const { setTaskStatusAction, deleteTaskForTodoAction } = actions;
    return _map(tasks, task => {
      const { id, title, isCompleted } = task;
      return (
        <Content
          listId={id}
          label={title}
          isCompleted={isCompleted}
          iconAction={setTaskStatusAction}
          titleAction={setTaskStatusAction}
          deleteAction={deleteTaskForTodoAction}
        />
      );
    });
  };

  const { tasks, actions, heading } = props;
  const { createTaskForTodoAction } = actions;
  const { TASK } = LIST_TYPE;
  return (
    <>
      <h3 style={{ margin: '0 0 1rem' }}>{heading}</h3>
      <InputWithButton title={TASK} createAction={createTaskForTodoAction} />
      {tasks && renderTodos()}
    </>
  );
}

export default TodoTask;
