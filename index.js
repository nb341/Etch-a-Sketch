

import './index.scss';
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Divider = (props)=>{
  
}

const Grid = (props)=>{
  const divs = Array.from(Array(16*16), (e, i) => {
    
    return (i%16==0) ? '\n' : <div key={i}className="block" style={{height: `40px`, width: `40px`}}></div>
  })
  return <div>{divs}</div>
}


const App = ()=>{
  const [size, setSize] = useState(16);
  return (
    <div className="container"> 
      
      <Grid/>
    </div>
  )
}

var app = document.getElementById("app");
ReactDOM.render(<App/>, app);