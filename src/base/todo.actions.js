import {
  createTodo,
  createTaskForTodo,
  setTodoStatus,
  setTaskStatus,
  setSelectedTodoId,
  deleteTodo,
  deleteTaskForTodo,
} from './todo.reducer';

export const createTodoAction = payload => dispatch =>
  dispatch(createTodo(payload));

export const createTaskForTodoAction = payload => dispatch => {
  dispatch(createTaskForTodo(payload));
  dispatch(setTodoStatus());
};

export const setTaskStatusAction = payload => dispatch => {
  dispatch(setTaskStatus(payload));
  dispatch(setTodoStatus());
};

export const setSelectedTodoIdAction = payload => dispatch => {
  dispatch(setSelectedTodoId(payload));
};

export const deleteTodoAction = payload => dispatch =>
  dispatch(deleteTodo(payload));

export const deleteTaskForTodoAction = payload => dispatch => {
  dispatch(deleteTaskForTodo(payload));
  dispatch(setTodoStatus());
};
