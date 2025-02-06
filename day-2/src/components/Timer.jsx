import { useState, useEffect } from "react";
function Timer() {
  const [sec, setSec] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setSec((sec) => sec + 1);
      }, 500);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div>
      <h1>Timer:-{sec} sec</h1>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => {setSec(0); setRunning(false);}}>Reset</button>
    </div>
  );
}

export default Timer;

