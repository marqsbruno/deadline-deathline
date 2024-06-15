import { useContext, useRef, useState } from "react";
import { TimeContext } from "../context/TimeContext";

function Clock() {
  const { deadline, deadlineHour } = useContext(TimeContext);
  const [isRunning, setIsRunning] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(0);

  const getTimeLeft = () => {
    const fullDeadline = deadline + "T" + deadlineHour + ":00";

    const unixDeadline = Date.parse(fullDeadline) - Date.now();
    setSeconds(Math.floor(unixDeadline / 1000) % 60);
    setMinutes(Math.floor(unixDeadline / 60000) % 60);
    setHours(Math.floor(unixDeadline / 3600000) % 24);
    setDays(Math.floor(unixDeadline / (3600000 * 24)));
  };

  const handleClick = () => {
    timerRef.current = setInterval(() => getTimeLeft(), 1000);
    console.log("interval");

    setIsRunning(true);
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    console.log(timerRef.current);

    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setDays(0);
    setIsRunning(false);
  };

  return (
    <div>
      <button disabled={isRunning} type="button" onClick={handleClick}>
        Start
      </button>
      <button disabled={!isRunning} type="button" onClick={handleReset}>
        Reset
      </button>
      {isRunning ? (
        <div>
          <h2>You only have:</h2>
          <h1>{seconds} seconds</h1>
          <h1>{minutes} minutes</h1>
          <h1>{hours} hours</h1>
          <h1>{days} days</h1>
          <h2>to finish your project 😭</h2>
          <p>Good luck</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Clock;
