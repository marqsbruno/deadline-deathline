import { createContext, useState } from "react";

type Context = {
  initialTime: string;
  setInitialTime: React.Dispatch<React.SetStateAction<string>>;
};
export const TimeContext = createContext({} as Context);

type Provider = {
  children: React.ReactNode;
};

export default function TimeProvider({ children }: Provider) {
  const [initialTime, setInitialTime] = useState("");

  const contextValues = {
    initialTime,
    setInitialTime,
  };

  return (
    <TimeContext.Provider value={contextValues}>
      {children}
    </TimeContext.Provider>
  );
}
