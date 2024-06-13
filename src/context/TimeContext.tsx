import { createContext, useState } from "react";

type Context = {
  deadline: string;
  setDeadline: React.Dispatch<React.SetStateAction<string>>;
  deadlineHour: string;
  setDeadlineHour: React.Dispatch<React.SetStateAction<string>>;
};
export const TimeContext = createContext({} as Context);

type Provider = {
  children: React.ReactNode;
};

export default function TimeProvider({ children }: Provider) {
  const [deadline, setDeadline] = useState("");
  const [deadlineHour, setDeadlineHour] = useState("");

  const contextValues = {
    deadline,
    setDeadline,
    deadlineHour,
    setDeadlineHour,
  };

  return (
    <TimeContext.Provider value={contextValues}>
      {children}
    </TimeContext.Provider>
  );
}
