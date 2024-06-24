import { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { TimeContext } from "./context/TimeContext.tsx";
import Page from "./pages/Page.tsx";
import GlobalStyle from "./styles/global";
import basic from "./styles/themes/basic.ts";
import caution from "./styles/themes/caution.ts";
import danger from "./styles/themes/danger.ts";

function App() {
  const { timer, isRunning } = useContext(TimeContext);
  const [theme, setTheme] = useState(basic);

  useEffect(() => {
    if (isRunning && timer.days < 1 && timer.hours < 1) {
      setTheme(danger);
    } else if (isRunning && timer.days < 1) {
      setTheme(caution);
    } else {
      setTheme(basic);
    }
  }, [isRunning, timer.days, timer.hours]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Page />
      </ThemeProvider>
    </>
  );
}

export default App;
