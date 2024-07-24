import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [time,setTime] = useState(0)
  const [running,setRunning] = useState(false)


  useEffect(()=>{
    let interval;
    if(running){
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }else if(!running){
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  },[running]);

  return (
    <div className="bg-red-950 text-white p-8 flex flex-col items-center justify-center mt-20 m-8">
      <div>
        <h1 className='text-2xl font-semibold pb-2' >StopWatch</h1>
      </div>
      <div className='text-xl font-semibold p-5'>
        <span>{("0" + Math.floor((time / 60000) % 60))}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60))}:</span>
        <span>{('0' + Math.floor((time / 10) % 100))}</span>
      </div>
      <div className='flex flex-row justify-between m-5'>
        {running ?
          <button className='border rounded-lg py-1 px-3' onClick={() => setRunning(false)}>Stop</button>
          :
          <button className='border rounded-lg py-1 px-3' onClick={() => setRunning(true)}>Start</button>
        }
        <button className='border rounded-lg py-1 px-3 ml-5' onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>

  );
}

export default App;
