import { useState } from 'react';
import './App.css';


function App() {

  const [num, setnum] = useState(0);

  const incval=()=>{
    setnum(num+1)
  }
  const decval=()=>{
    if(num>0){
    setnum(num-1);
  }else{
    alert('Sorry, Zero Limit')
    setnum(0);
  }
  }
  const recval=()=>{
    setnum(0)
  }
  return (
    <div className="App">
      <h2 className='h'>COUNTER</h2>
      <button className='btn' onClick={incval}>+</button>
      <h2>{num}</h2>
      <button className='btn' onClick={decval}>-</button>
      <div>
      <button className='re' onClick={recval}>Reset</button>
      </div>
    </div>
  );
}

export default App;
