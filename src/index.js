//파일정보:src/index.js
import ReactDOM from 'react-dom/client';
import React from 'react';
// import ConfirmButton from './practice/ConfirmButton'; 
// import {App} from './step14/App';
// import LandingPage from './step14/LandingPage';
// import Library from './practice/Library';
// import Clock from './practice/Clock';
import CommentList from './practice/CommentList';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    {console.log('render')}
    <App/>
  </>
);

