import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

/* Styles */
import './global.css';

/* Pages */
import App from './components/App';


// const element = <h1> Hello, platzi Badges from react! </h1>;
const container = document.getElementById('app');

ReactDOM.render(<App />, container);
