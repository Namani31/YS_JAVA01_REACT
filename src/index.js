//파일정보:src/index.js
import ReactDOM from 'react-dom/client';
// import ConfirmButton from './practice/ConfirmButton'; 
// import {App} from './step14/App';
// import LandingPage from './step14/LandingPage';
// import Library from './practice/Library';
import Clock from './practice/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  root.render(
    <>
      {console.log('render')}
      <Clock/>
    </>
  );
}, 1000)
