import { createSelector, defaultMemoize as _defaultMemoize } from 'reselect';
import _get from 'lodash/get';
import _findIndex from 'lodash/findIndex';
import _filter from 'lodash/filter';
import _reduce from 'lodash/reduce';
import _head from 'lodash/head';

export const getTodoList = _defaultMemoize(state =>
  _get(state, 'todoReducer.todos')
);

export const getSelectedTodoId = _defaultMemoize(state =>
  _get(state, 'todoReducer.SELECTED_TODO_ID')
);

export const getSelectedTodoTitle = _defaultMemoize(state =>
  _get(state, 'todoReducer.SELECTED_TODO_TITLE')
);

const getTaskIdsFromTodosForSelectedList = createSelector(
  [getTodoList, getSelectedTodoId],
  (todos, selectedTodoId) => {
    const listIndex = _findIndex(todos, todo => todo.id === selectedTodoId);
    return todos[listIndex] && todos[listIndex].taskIds;
  }
);

const getTasks = _defaultMemoize(state => _get(state, 'todoReducer.tasks'));

export const getTasksForTaskIds = createSelector(
  [getTaskIdsFromTodosForSelectedList, getTasks],
  (taskIds, tasks) => {
    const allTasksForSelectedTodo = _reduce(
      taskIds,
      (acc, taskId) => {
        acc.push(_head(getTaskForId(taskId, tasks)));
        return acc;
      },
      []
    );
    return allTasksForSelectedTodo;
  }
);

const getTaskForId = (taskId, tasks) => {
  return _filter(tasks, task => {
    const { id } = task;
    if (taskId === id) {
      return task;
    }
  });
};
