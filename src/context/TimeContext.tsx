import { createContext, useState } from "react";

type Context = {
  deadline: string;
  setDeadline: React.Dispatch<React.SetStateAction<string>>;
};
export const TimeContext = createContext({} as Context);

type Provider = {
  children: React.ReactNode;
};

export default function TimeProvider({ children }: Provider) {
  const [deadline, setDeadline] = useState("");

  const contextValues = {
    deadline,
    setDeadline,
  };

  return (
    <TimeContext.Provider value={contextValues}>
      {children}
    </TimeContext.Provider>
  );
}
