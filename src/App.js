
import './App.css';
import { useState, useEffect } from "react";
import Data1 from './Data/Data1';
import Data2 from './Data/Data2';
import Data3 from './Data/Data3';
 
function App() {
  const [show,setShow]=useState(1);
  const btn1=()=>{
    setShow(1);
  }
  const btn2=()=>{
    setShow(2);
  }
  const btn3=()=>{
    setShow(3);
  }


  return (
    <div>
      <button onClick={btn1}>Data1</button>
      <button onClick={btn2}>Data2</button>
      <button onClick={btn3}>Data3</button>
      {show==1?<Data1/>:null}
      {show==2?<Data2/>:null}
      {show==3?<Data3/>:null}
      {console.log(show)}
    </div>
  );
}

export default App;
