import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(0)
  const [timeOn, setTimeOn] = useState(false)


useEffect(() => {
  let interval = null;
  if (timeOn) {
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 10)
    }, 10)
  } else {
    clearInterval(interval)
  }

  return () => clearInterval(interval)
}, [timeOn])

  return (
    <div className="App">
      <div className='timer'>
        {/* {time} */}
        {/* <span>{'0' + Math.floor((time / 60000) % 60)}:</span>
        <span>{'0' + (Math.floor((time / 1000) % 60))}:</span>
        <span>{'0' + ((time / 10) % 100)}:</span> */}

        <span className='timer__minute timer__number'> {('0' + Math.floor(time / 60000) % 60).slice(-2)}:</span>
        <span className='timer__second timer__number'> {('0' + Math.floor(time / 1000) % 60).slice(-2)}:</span>
        <span className='timer__millisecond timer__number'>  { ('0' + (time / 10) % 100).slice(-2)}</span>
      </div>
      <div className='timer__buttons'>
        <button className='timer__start timer__button' onClick={() => setTimeOn(true)}>Start</button>
        <button className='timer__stop timer__button' onClick={() => setTimeOn(false)}>Stop</button>
        <button className='timer__resume timer__button' onClick={() => setTimeOn(true)}>Resume</button>
        <button className='timer__reset timer__button' onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
