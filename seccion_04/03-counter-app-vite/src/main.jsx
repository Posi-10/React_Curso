import React from 'react';
import ReactDOM from 'react-dom/client';
// import { FristApp } from './components/FristApp';

import './styles.scss';
import { CounterApp } from './components/CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FristApp title={"Hola mundo"} subTitle={123}  /> */}
    <CounterApp value={10} />
  </React.StrictMode>
);