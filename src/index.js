import React from 'react';
import ReactDOM from 'react-dom';   
import {Header} from './components/Header'
import {Balance} from './components/Balance'

import './App.css'

const App = () => {
  return (
     <div> 
      <Header />
       <div className="container">
        <Balance />
       </div>   
     </div>
  )
  }

ReactDOM.render( 
    <App /> ,
  document.getElementById('root') 
);

 
