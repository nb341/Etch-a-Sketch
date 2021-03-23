

import './index.scss';
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Grid = (props)=>{
  const block = ()=>{
    <div>

    </div>
  };
  const size = props.size;
      for(let i =0; i<Math.pow(size,2);i++){
        
      }
  return(
    <h1>{props.size}</h1>
  )
}


const App = ()=>{
  const [size, setSize] = useState(16);
  return (
    <div className="container">
      <Grid size={size}/>
    </div>
  )
}

var app = document.getElementById("app");
ReactDOM.render(<App/>, app);