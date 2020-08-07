import React from 'react';
import _map from 'lodash/map';

import InputWithButton from './InputWithButton';
import Content from './Content';
import { LIST_TYPE } from '../constants';
import {
  getTasksForTaskIds,
  getSelectedTodoTitle,
} from '../base/todo.selectors';
import {
  createTaskForTodoAction,
  setTaskStatusAction,
  deleteTaskForTodoAction,
} from '../base/todo.actions';
import { connect } from 'react-redux';

function TodoTask(props) {
  const renderTodos = () => {
    const { tasks, setTaskStatusAction, deleteTaskForTodoAction } = props;
    return _map(tasks, task => {
      const { id, title, isCompleted } = task;
      return (
        <Content
          key={id}
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

  const { tasks, createTaskForTodoAction, selectedTodoTitle } = props;
  const { TASK } = LIST_TYPE;
  return (
    <>
      <h3 style={{ margin: '0 0 1rem' }}>{selectedTodoTitle}</h3>
      <InputWithButton title={TASK} createAction={createTaskForTodoAction} />
      {tasks && renderTodos()}
    </>
  );
}

const mapState = state => ({
  selectedTodoTitle: getSelectedTodoTitle(state),
  tasks: getTasksForTaskIds(state),
});

const mapDispatch = {
  setTaskStatusAction,
  createTaskForTodoAction,
  deleteTaskForTodoAction,
};

export default connect(mapState, mapDispatch)(TodoTask);
