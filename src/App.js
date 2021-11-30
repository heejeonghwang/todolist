import React from 'react';
import TodosContainer from './containers/TodosContainer';
import './css/main.css';

const App = () => {
  return (
    <div className={'container'}>
      <TodosContainer />
    </div>
  );
};

export default App;
