import { useContext, useEffect, useRef } from "react";
import { TimeContext } from "../context/TimeContext";
import { getLocalStorage, setLocalStorage } from "../utils/localstorage";
import { ButtonDiv, ClockDiv, Container, Timer } from "./styles/Clock.style";

function Clock() {
  const {
    deadline,
    deadlineHour,
    setDeadline,
    setDeadlineHour,
    timer,
    setTimer,
    isRunning,
    setIsRunning,
  } = useContext(TimeContext);

  const timerRef = useRef<NodeJS.Timeout | number>();

  const getTimeLeft = (fullDeadline: string) => {
    const unixDeadline = Date.parse(fullDeadline) - Date.now();

    if (unixDeadline <= 0) {
      clearInterval(timerRef.current as NodeJS.Timeout);
      setTimer({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0,
      });
      return;
    }

    setTimer({
      seconds: Math.floor(unixDeadline / 1000) % 60,
      minutes: Math.floor(unixDeadline / 60000) % 60,
      hours: Math.floor(unixDeadline / 3600000) % 24,
      days: Math.floor(unixDeadline / (3600000 * 24)),
    });
  };

  const handleClick = () => {
    const fullDeadline = deadline + "T" + deadlineHour + ":00";

    timerRef.current = setInterval(() => getTimeLeft(fullDeadline), 1000);
    setLocalStorage("savedTime", fullDeadline);
    setIsRunning(true);
  };

  const handleReset = () => {
    clearInterval(timerRef.current as NodeJS.Timeout);
    localStorage.clear();
    setDeadline("");
    setDeadlineHour("");
    setTimer({
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
    });
    setIsRunning(false);
  };

  useEffect(() => {
    const localDeadline = getLocalStorage("savedTime");

    if (localDeadline) {
      console.log("useEffect");

      timerRef.current = setInterval(() => getTimeLeft(localDeadline), 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const verifyButton = () => {
    return !(deadline !== "" && deadlineHour !== "" && !isRunning);
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
              <h1>{timer.days}</h1>
              <p>days</p>
            </div>
            <div>
              <h1>{timer.hours}</h1>
              <p>hours</p>
            </div>
            <div>
              <h1>{timer.minutes} </h1>
              <p>minutes</p>
            </div>
            <div>
              <h1>{timer.seconds} </h1>
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
