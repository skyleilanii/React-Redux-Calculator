import React from 'react';

import Calculator from './components/Calculator';

import { store } from './redux/store';
import { Provider } from 'react-redux';

import './assets/styles/Calculator.css';

export default function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Provider store={store}>
          <Calculator />
        </Provider>
      </React.Fragment>
    </div>
  );
}
