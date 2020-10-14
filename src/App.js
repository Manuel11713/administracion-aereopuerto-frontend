import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import 'antd/dist/antd.min.css';
import './App.css';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home/>
      </Provider>
    </div>
  );
}

export default App;
