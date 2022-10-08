import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from "./components/common/Signup";
import {Header} from "./components/common";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import name from "./components/common/Signup";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <div>
           <Header />
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </div>
    </BrowserRouter>
  </React.StrictMode>
);

console.log(name);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
