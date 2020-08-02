import todoReducer from './base/todo.reducer';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const defaultReducers = {
  todoReducer,
};

const rootReducer = combineReducers(defaultReducers);
export const store = createStore(rootReducer, applyMiddleware(thunk));
