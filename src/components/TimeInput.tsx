import { useContext, useEffect, useState } from "react";
import { CiCircleCheck, CiEdit } from "react-icons/ci";

import { TimeContext } from "../context/TimeContext";

import { getLocalStorage, setLocalStorage } from "../utils/localstorage";
import {
  Container,
  DateDiv,
  HeaderDiv,
  InputDiv,
  TextInputDiv,
} from "./styles/TimeInput.style";

function TimeInput() {
  const { deadline, setDeadline, deadlineHour, setDeadlineHour } =
    useContext(TimeContext);
  const [textValue, setTextValue] = useState("");
  const [showInput, setShowInput] = useState(true);

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

  useEffect(() => {
    const projectName = getLocalStorage("projectName");

    if (projectName) {
      setTextValue(projectName);
      setShowInput(false);
    }

    const localDate = getLocalStorage("localDate");
    const localHour = getLocalStorage("localHour");

    if (localDate && localHour) {
      console.log(localDate);

      setDeadline(localDate);
      setDeadlineHour(localHour);
    }
  }, [setDeadline, setDeadlineHour]);
  return (
    <Container>
      <HeaderDiv>
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
            <CiCircleCheck
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
