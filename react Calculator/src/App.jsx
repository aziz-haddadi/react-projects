
import { useState } from 'react';
import './App.css'
function App() {
  let [count,setcount]=useState('');
  return (
    <div className='container'>
      <div className="calculator">
        <div className="display">
          <input type="text" name="" id="" value={count} />
        </div>
        <div className="buttons">
          <div>
            <input type="button" value={"AC"} onClick={()=>{setcount('')}}/>
            <input type="button" value={"DE"} onClick={() =>{setcount(count.slice(0,-1))}}/>
            <input type="button" value={"."}  onClick={e =>{setcount(count+e.target.value)}}/>
            <input type="button" value={"/"}  onClick={e =>{setcount(count+e.target.value)}}/>
          </div>
          <div>
            <input type="button" value={"7"} onClick={e =>{setcount(count+e.target.value)}}/>
            <input type="button" value={"8"} onClick={e =>{setcount(count+e.target.value)}}/>
            <input type="button" value={"9"} onClick={e =>{setcount(count+e.target.value)}}/>
            <input type="button" value={"*"} onClick={e =>{setcount(count+e.target.value)}}/>
          </div>
          <div>
            <input type="button" value={"4"} onClick={e =>{setcount(count+e.target.value)}}/>
            <input type="button" value={"5"} onClick={e =>{setcount(count+e.target.value)}}/>
            <input type="button" value={"6"} onClick={e =>{setcount(count+e.target.value)}}/>
            <input type="button" value={"+"} onClick={e =>{setcount(count+e.target.value)}}/>
          </div>
          <div>
            <input type="button" value={"1"} onClick={e =>{setcount(count+e.target.value)}}/>
            <input type="button" value={"2"} onClick={e =>{setcount(count+e.target.value)}}/>
            <input type="button" value={"3"} onClick={e =>{setcount(count+e.target.value)}}/>
            <input type="button" value={"-"} onClick={e =>{setcount(count+e.target.value)}}/>
          </div>
          <div>
            <input type="button" value={"00"} onClick={e =>{setcount(count+e.target.value)}}/>
            <input type="button" value={"0"} onClick={e =>{setcount(count+e.target.value)}}/>
            <input type="button" value={"="} className='equal' onClick={()=>{return setcount(eval(count))}} />

          </div>
        </div>
      </div>
      
    </div>
  );
}
export default App
