import React from 'react';
import ReactDOM from 'react-dom/client';
import Lista from './Lista';
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='container pt-3'>
        <Lista></Lista>
    </div>
);