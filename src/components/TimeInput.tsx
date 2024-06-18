import { useContext } from "react";
import { TimeContext } from "../context/TimeContext";

function TimeInput() {
  const { deadline, setDeadline, deadlineHour, setDeadlineHour } =
    useContext(TimeContext);

  function handleDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDeadline(event.target.value);
  }

  function handleHourChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDeadlineHour(event.target.value);
    console.log(deadline);
  }

  /*   const formatDate = () => {
    const year = deadline.slice(0, 4);
    const month = deadline.slice(4, 8);
    const day = deathline.slice(9, 10)

    return month;
  }; */

  return (
    <div>
      <div>
        <h1>Set a deadline for your project</h1>
        <input type="date" value={deadline} onChange={handleDateChange} />
        <input type="time" value={deadlineHour} onChange={handleHourChange} />
      </div>
      <div>
        {deadline && deadlineHour ? (
          <p>
            {deadline.slice(8, 10)}
            {deadline.slice(4, 8)}
            {deadline.slice(0, 4)} - {deadlineHour}
          </p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default TimeInput;
