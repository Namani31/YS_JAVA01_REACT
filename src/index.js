//파일정보:src/index.js
import ReactDOM from 'react-dom/client';
import React from 'react';
// import ConfirmButton from './practice/ConfirmButton'; 
// import {App} from './step14/App';
// import LandingPage from './step14/LandingPage';
// import {App} from './step15/App';
// import {App} from './step16/App';
// import {App} from './step17/App';
import NotificationList from './test/NotificationList';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    {console.log('render')}
    <NotificationList/>
</>
);

