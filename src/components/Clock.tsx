import { useContext, useEffect, useRef, useState } from "react";
import { TimeContext } from "../context/TimeContext";
import { getLocalStorage, setLocalStorage } from "../utils/localstorage";
import { ButtonDiv, ClockDiv, Container, Timer } from "./styles/Clock.style";
function Clock() {
  const { deadline, deadlineHour, setDeadline, setDeadlineHour } =
    useContext(TimeContext);
  const [isRunning, setIsRunning] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | number>();

  const getTimeLeft = (fullDeadline: string) => {
    const unixDeadline = Date.parse(fullDeadline) - Date.now();
    setSeconds(Math.floor(unixDeadline / 1000) % 60);
    setMinutes(Math.floor(unixDeadline / 60000) % 60);
    setHours(Math.floor(unixDeadline / 3600000) % 24);
    setDays(Math.floor(unixDeadline / (3600000 * 24)));
    setIsRunning(true);
  };

  const handleClick = () => {
    const fullDeadline = deadline + "T" + deadlineHour + ":00";
    timerRef.current = setInterval(() => getTimeLeft(fullDeadline), 1000);
    setLocalStorage("savedTime", fullDeadline);
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    localStorage.clear();
    setDeadline("");
    setDeadlineHour("");
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setDays(0);
    setIsRunning(false);
  };

  useEffect(() => {
    const localDeadline = getLocalStorage("savedTime");
    if (localDeadline) {
      timerRef.current = setInterval(() => getTimeLeft(localDeadline), 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const verifyButton = () => {
    if (deadline !== "" && deadlineHour !== "" && !isRunning) {
      return false;
    }
    return true;
  };

  return (
    <Container>
      <ButtonDiv>
        <button disabled={verifyButton()} type="button" onClick={handleClick}>
          Start
        </button>
        <button disabled={!verifyButton()} type="button" onClick={handleReset}>
          Reset
        </button>
      </ButtonDiv>
      {isRunning ? (
        <ClockDiv>
          <h2>You only have:</h2>
          <Timer>
            <div>
              <h1>{days}</h1>
              <p>days</p>
            </div>
            <div>
              <h1>{hours}</h1>
              <p>hours</p>
            </div>
            <div>
              <h1>{minutes} </h1>
              <p>minutes</p>
            </div>
            <div>
              <h1>{seconds} </h1>
              <p>seconds</p>
            </div>
          </Timer>
          <h2>to finish your project 😭</h2>
          <p style={{ marginTop: "12px" }}>Good luck</p>
        </ClockDiv>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default Clock;
