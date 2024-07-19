//파일정보:src/index.js
import ReactDOM from 'react-dom/client';
import ConfirmButton from './practice/ConfirmButton'; //<---

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {console.log('render')}
    <ConfirmButton/>
  </>
);