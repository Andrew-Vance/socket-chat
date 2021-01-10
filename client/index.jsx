import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';

if (window.location.pathname === '/') {
  ReactDOM.render(< App />, document.getElementById('app'));
} else if (window.location.pathname === '/login/') {
  ReactDOM.render(< Login />, document.getElementById('app'));
} else if (window.location.pathname === '/register/') {
  ReactDOM.render(< Register />, document.getElementById('app'));
}
