import React from 'react';
import TodoApp from './components/TodoApp';
import { Provider } from 'react-redux';

import store from './store';



function App() {

  return (
    <div className="jumbotron text-center">
      <h1 className="">Todo App</h1>
      <Provider store={store  }>
      <TodoApp />
      </Provider>
    </div>
  );
}

export default App;
