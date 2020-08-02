import _findIndex from 'lodash/findIndex';
import _filter from 'lodash/filter';
import _head from 'lodash/head';
import _reduce from 'lodash/reduce';
import _includes from 'lodash/includes';
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  todos: [
    {
      id: 1,
      title: 'Grocery Shopping',
      isCompleted: false,
      taskIds: [123, 245],
    },
    {
      id: 2,
      title: 'Others',
      isCompleted: false,
      taskIds: [367, 489],
    },
  ],
  tasks: [
    {
      id: 123,
      title: 'Honey',
      isCompleted: true,
    },
    {
      id: 245,
      title: 'Bread',
      isCompleted: false,
    },
    {
      id: 367,
      title: 'Take prints',
      isCompleted: false,
    },
    {
      id: 489,
      title: 'Go to tailor',
      isCompleted: true,
    },
  ],
  SELECTED_TODO_ID: 2,
  SELECTED_TODO_TITLE: 'Others',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {
    createTodo(state, { payload }) {
      state.todos.push(payload);
    },
    createTaskForTodo(state, { payload }) {
      const { SELECTED_TODO_ID, todos, tasks } = state;
      const { id: taskId } = payload;
      const todoIndex = _findIndex(todos, todo => todo.id === SELECTED_TODO_ID);
      todos[todoIndex].taskIds.push(taskId);
      tasks.push(payload);
    },
    setTodoStatus(state) {
      const { SELECTED_TODO_ID, todos, tasks } = state;
      const todoIndex = _findIndex(todos, todo => todo.id === SELECTED_TODO_ID);
      const taskIdsForSelectedTodo = todos[todoIndex].taskIds;
      const allTasksStatus = _reduce(
        taskIdsForSelectedTodo,
        (statusArray, taskId) => {
          const task = _head(
            _filter(tasks, (task) => {
              const { id } = task;
              if (taskId === id) return task;
            })
          );
          const { isCompleted } = task;
          statusArray.push(isCompleted);
          return statusArray;
        },
        []
      );
      const isTodoCompleted = _includes(allTasksStatus, false);
      todos[todoIndex].isCompleted = !isTodoCompleted;
    },
    setTaskStatus(state, { payload: taskIdFromPayload }) {
      const { tasks } = state;
      const taskIndex = _findIndex(
        tasks,
        task => task.id === taskIdFromPayload
      );
      const status = tasks[taskIndex].isCompleted;
      tasks[taskIndex].isCompleted = !status;
    },
    setSelectedTodoId(state, { payload: selectedTodoId }) {
      const { todos } = state;
      state.SELECTED_TODO_ID = selectedTodoId;
      const todoIndex = _findIndex(todos, todo => todo.id === selectedTodoId);
      state.SELECTED_TODO_TITLE = todos[todoIndex].title;
    },
    deleteTodo(state, { payload: todoIdForDeletion }) {
      const { todos } = state;
      const filteredTodos = _filter(
        todos,
        todo => todo.id !== todoIdForDeletion
      );
      state = {
        ...state,
        todos: filteredTodos,
      };
      return state;
    },
    deleteTaskForTodo(state, { payload: taskIdForDeletion }) {
      const { todos, SELECTED_TODO_ID } = state;
      const todoIndex = _findIndex(todos, todo => todo.id === SELECTED_TODO_ID);
      const taskIdsForSelectedTodo = todos[todoIndex].taskIds;
      const filteredTasksIdsListForSelectedTodo = _filter(
        taskIdsForSelectedTodo,
        id => id !== taskIdForDeletion
      );
      todos[todoIndex].taskIds = filteredTasksIdsListForSelectedTodo;
    },
  },
});

export const {
  createTodo,
  createTaskForTodo,
  setTodoStatus,
  setTaskStatus,
  setSelectedTodoId,
  deleteTodo,
  deleteTaskForTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
