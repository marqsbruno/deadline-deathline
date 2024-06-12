import { useContext, useEffect, useState } from "react";
import { TimeContext } from "../context/TimeContext";

function Clock() {
  const { initialTime } = useContext(TimeContext);
  const [timeNow, setTimeNow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTimeNow(Date.now()), 1000);
    console.log(initialTime);

    return () => clearInterval(interval);
  }, [initialTime]);

  return (
    <div>
      <h1>{timeNow}</h1>
    </div>
  );
}

export default Clock;
