



import React from "react"

import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import './index.css'
import App from './App'
import Navbar from "./components/navbar/navbar"

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(window.location.pathname)
root.render(
  <HashRouter>
    <Navbar />
    <App />
  </HashRouter>
  
);

