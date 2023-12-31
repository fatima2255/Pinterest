import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import store from "./Redux/store"
import reportWebVitals from './reportWebVitals';
import JoinComponent from "./JoinAllComponent/JoinComponent";
import ogin from './login';
import Signup from './Signup'

ReactDOM.render(
    <Provider store={store} >
        <React.StrictMode>
        
{/* 
            <Signup/> */}
            {
               <JoinComponent /> 
              }
            
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
