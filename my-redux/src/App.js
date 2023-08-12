import React from "react";
import "./App.css";
import { incNumber,decNumber } from "./actions/action";
import {useSelector,useDispatch} from "react-redux"
function App() {
  const myState=useSelector((state)=>state.changeTheNumber);  
  const dispatch=useDispatch();
  return (
    <>
    <div className="container"> 
   <h1>Increment/Decrement counter</h1>
   <h4>Using React and Redux</h4>
   <div className="quantity">
    <button className="quantity_minus" title="Decrement by 5" onClick={()=>dispatch(decNumber(5))}><span>-</span></button>
    <input name="quantity" type="text" className="quantity_input" value={myState}/>
    <button className="quantity_plus" title="Increment by 5" onClick={()=> dispatch(incNumber(5))}><span>+</span></button>
   </div>
    </div>
    </>
  );
}

export default App;
