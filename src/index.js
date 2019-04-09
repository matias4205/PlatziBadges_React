import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import './global.css';

import BadgeNew from './pages/BadgeNew.js';

// const element = <h1> Hello, platzi Badges from react! </h1>;
const container = document.getElementById('app');

ReactDOM.render(<BadgeNew />, container);
