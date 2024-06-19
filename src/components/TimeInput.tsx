import { useContext } from "react";
import { TimeContext } from "../context/TimeContext";
import {
  Container,
  DateDiv,
  HeaderDiv,
  InputDiv,
} from "./styles/TimeInput.style";

function TimeInput() {
  const { deadline, setDeadline, deadlineHour, setDeadlineHour } =
    useContext(TimeContext);

  function handleDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDeadline(event.target.value);
  }

  function handleHourChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDeadlineHour(event.target.value);
  }

  return (
    <Container>
      <HeaderDiv>
        <h1>Set a deadline for your project</h1>
        <InputDiv>
          <input type="date" value={deadline} onChange={handleDateChange} />
          <input type="time" value={deadlineHour} onChange={handleHourChange} />
        </InputDiv>
      </HeaderDiv>
      <DateDiv>
        {deadline && deadlineHour ? (
          <p>
            {deadline.slice(8, 10)}
            {deadline.slice(4, 8)}
            {deadline.slice(0, 4)} - {deadlineHour}
          </p>
        ) : (
          <></>
        )}
      </DateDiv>
    </Container>
  );
}

export default TimeInput;
