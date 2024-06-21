import { createContext, useState } from "react";

type Timer = {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
};

type Context = {
  deadline: string;
  setDeadline: React.Dispatch<React.SetStateAction<string>>;
  deadlineHour: string;
  setDeadlineHour: React.Dispatch<React.SetStateAction<string>>;
  timer: Timer;
  setTimer: React.Dispatch<React.SetStateAction<Timer>>;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  showMessage: boolean;
  setShowMessage: React.Dispatch<React.SetStateAction<boolean>>;
};
export const TimeContext = createContext({} as Context);

type Provider = {
  children: React.ReactNode;
};

export default function TimeProvider({ children }: Provider) {
  const [deadline, setDeadline] = useState("");
  const [deadlineHour, setDeadlineHour] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  });

  const [showMessage, setShowMessage] = useState(false); // MODAL

  const contextValues = {
    deadline,
    setDeadline,
    deadlineHour,
    setDeadlineHour,
    timer,
    setTimer,
    isRunning,
    setIsRunning,
    setShowMessage,
    showMessage,
  };

  return (
    <TimeContext.Provider value={contextValues}>
      {children}
    </TimeContext.Provider>
  );
}
