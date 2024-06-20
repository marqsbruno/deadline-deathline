import { useContext, useEffect, useState } from "react";
import { CiEdit, CiSquareCheck } from "react-icons/ci";

import { TimeContext } from "../context/TimeContext";

import { getLocalStorage, setLocalStorage } from "../utils/localstorage";
import { Container, InputDiv, TextInputDiv } from "./styles/TimeInput.style";

function TimeInput() {
  const { deadline, setDeadline, deadlineHour, setDeadlineHour } =
    useContext(TimeContext);
  const [textValue, setTextValue] = useState("");
  const [showInput, setShowInput] = useState(true);
  const [today, setToday] = useState("");

  function handleDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDeadline(event.target.value);
    setLocalStorage("localDate", event.target.value);
  }

  function handleHourChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDeadlineHour(event.target.value);
    setLocalStorage("localHour", event.target.value);
  }

  function handleTextInput(event: React.ChangeEvent<HTMLInputElement>) {
    setTextValue(event.target.value);
  }

  function handleEnter() {
    showInput ? setShowInput(false) : setShowInput(true);
    setLocalStorage("projectName", textValue);
  }

  function getToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    const projectName = getLocalStorage("projectName");
    setToday(getToday());

    if (projectName) {
      setTextValue(projectName);
      setShowInput(false);
    }

    const localDate = getLocalStorage("localDate");
    const localHour = getLocalStorage("localHour");

    if (localDate && localHour) {
      setDeadline(localDate);
      setDeadlineHour(localHour);
    }
  }, [setDeadline, setDeadlineHour]);
  return (
    <Container>
      <h1>Set a deadline for your project</h1>
      <TextInputDiv>
        {showInput && (
          <input
            type="text"
            placeholder=" project's name"
            onChange={handleTextInput}
            value={textValue}
            onKeyDown={(e) => e.key === "Enter" && handleEnter()}
          />
        )}
        {showInput && (
          <CiSquareCheck
            size={24}
            style={{ color: "black" }}
            onClick={handleEnter}
          />
        )}
        {!showInput && (
          <>
            <h3>{textValue}</h3>
            <CiEdit
              size={24}
              style={{ color: "black" }}
              onClick={handleEnter}
            />
          </>
        )}
      </TextInputDiv>
      <InputDiv>
        <input
          type="date"
          value={deadline}
          onChange={handleDateChange}
          min={today}
        />
        <input type="time" value={deadlineHour} onChange={handleHourChange} />
      </InputDiv>
      {/*       <DateDiv>
        {deadline && deadlineHour ? (
          <p>
            {deadline.slice(8, 10)}
            {deadline.slice(4, 8)}
            {deadline.slice(0, 4)} - {deadlineHour}
          </p>
        ) : (
          <></>
        )}
      </DateDiv> */}
    </Container>
  );
}

export default TimeInput;
