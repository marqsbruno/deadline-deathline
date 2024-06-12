import { useContext, useEffect } from "react";
import { TimeContext } from "../context/TimeContext";

function TimeInput() {
  const { initialTime, setInitialTime } = useContext(TimeContext);
  useEffect(() => {
    // console.log(typeof date);
  }, []);
  return (
    <div>
      <h2>Set a deadline for your project</h2>
      <input
        type="date"
        value={initialTime}
        onChange={(e) => setInitialTime(e.target.value)}
      />
    </div>
  );
}

export default TimeInput;
