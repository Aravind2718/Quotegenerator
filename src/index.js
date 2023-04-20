import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import HomePage from './components/Home';
import ColorSchemesExample from './components/Nav';
import Routee from './components/Route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
     <ColorSchemesExample/>
     <Routee/>
  </React.StrictMode>
);