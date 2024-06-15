import { useContext } from "react";
import { TimeContext } from "../context/TimeContext";

function TimeInput() {
  const { deadline, setDeadline, deadlineHour, setDeadlineHour } =
    useContext(TimeContext);

  return (
    <div>
      <h1>Set a deadline for your project</h1>
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <input
        type="time"
        value={deadlineHour}
        onChange={(e) => setDeadlineHour(e.target.value)}
      />
    </div>
  );
}

export default TimeInput;
