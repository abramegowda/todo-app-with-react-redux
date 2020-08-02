import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './store';

import Todo from './components/Todo';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Todo />
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
