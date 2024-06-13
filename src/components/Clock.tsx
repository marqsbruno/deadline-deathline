import { useContext, useState } from "react";
import { TimeContext } from "../context/TimeContext";

function Clock() {
  const { deadline } = useContext(TimeContext);
  //const [countdown, setCountdown] = useState("");
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTimeLeft = () => {
    console.log(deadline);

    const unixDeadline = Date.parse(deadline) - Date.now();
    setSeconds(Math.floor(unixDeadline / 1000) % 60);
    setMinutes(Math.floor(unixDeadline / 60000) % 60);
    setHours(Math.floor(unixDeadline / 3600000) % 24);
    setDays(Math.floor(unixDeadline / (3600000 * 24)));
  };

  const handleClick = () => {
    setInterval(() => getTimeLeft(), 1000);
    console.log("cliquei");
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Start
      </button>
      {seconds ? <h1>{seconds}</h1> : <></>}
      {minutes ? <h1>{minutes}</h1> : <></>}
      {minutes ? <h1>{hours}</h1> : <></>}
      {days > 0 ? <h1>{days}</h1> : <p>0</p>}
    </div>
  );
}

export default Clock;
