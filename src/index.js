import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import reportWebVitals from './reportWebVitals';
import App from './App';
//---------关键代码--------start
import { Provider } from 'react-redux';
import store from "./store";

//声明一个App组件，然后这个组件用Provider进行包裹。
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
//---------关键代码--------end
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
