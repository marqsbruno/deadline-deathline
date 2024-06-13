import { useContext, useState } from "react";
import { TimeContext } from "../context/TimeContext";

function Clock() {
  const { deadline, deadlineHour } = useContext(TimeContext);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTimeLeft = () => {
    const fullDeadline = deadline + "T" + deadlineHour + ":00";
    console.log(fullDeadline);

    const unixDeadline = Date.parse(fullDeadline) - Date.now();
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
      {seconds ? <h1>{seconds} segundos</h1> : <h1>0 segundos</h1>}
      {minutes ? <h1>{minutes} minutos</h1> : <h1>0 minutos</h1>}
      {minutes ? <h1>{hours} horas</h1> : <h1>0 dias</h1>}
      {days > 0 ? <h1>{days} dias</h1> : <h1>0 dias</h1>}
    </div>
  );
}

export default Clock;
