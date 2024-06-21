import { useContext, useEffect, useRef, useState } from "react";
import { TimeContext } from "../context/TimeContext";
import { getLocalStorage, setLocalStorage } from "../utils/localstorage";
import Modal from "./Modal";
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
    setShowMessage,
  } = useContext(TimeContext);

  const [isOpen, setIsOpen] = useState(false);

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
      setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return;
    }

    setTimer({
      seconds: Math.floor(unixDeadline / 1000) % 60,
      minutes: Math.floor(unixDeadline / 60000) % 60,
      hours: Math.floor(unixDeadline / 3600000) % 24,
      days: Math.floor(unixDeadline / (3600000 * 24)),
    });
    setIsRunning(true);
  };

  const handleClick = () => {
    const fullDeadline = deadline + "T" + deadlineHour + ":00";
    getTimeLeft(fullDeadline);

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
    setIsOpen(false); // modal
    setShowMessage(false);
  };

  useEffect(() => {
    const localDeadline = getLocalStorage("savedTime");

    if (localDeadline) {
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

  /*   const testButton = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }; */

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
      <Modal isOpen={isOpen} handleReset={handleReset} />
      {/*       <button onClick={testButton}>open</button> */}
    </Container>
  );
}

export default Clock;
