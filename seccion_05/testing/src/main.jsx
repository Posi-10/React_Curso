import './styles.scss';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './components/CounterApp'
// import { FristApp } from './components/FristApp';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FristApp title={"Hola mundo"} subTitle={123} /> */}
    <CounterApp value={10} />
  </React.StrictMode>
);