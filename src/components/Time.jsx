import { useState, useEffect } from 'react';

export default function Time(props) {
  const [time, setTime] = useState(Date(Date.now()).toString())
  // Update the time every second
  useEffect(() => {
    const timerUpdater = setInterval(()=> {
      setTime(Date(Date.now()).toString())
    }, 1000)
    return () => {
      clearTimeout(timerUpdater);
    }
  })

  return (
      <div className='current-time'>
          {time}
      </div>
  );
}