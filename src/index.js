//파일정보:src/index.js
import ReactDOM from 'react-dom/client';
// import ConfirmButton from './practice/ConfirmButton'; 
// import {App} from './step14/App';
// import LandingPage from './step14/LandingPage';
import {App} from './step15/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {console.log('render')}
    <App/>
  </>
);