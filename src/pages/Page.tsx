import { useContext } from "react";
import Clock from "../components/Clock";
import TimeInput from "../components/TimeInput";
import { TimeContext } from "../context/TimeContext";
import { Container } from "./Page.style";

function Page() {
  const { isShaking } = useContext(TimeContext);

  return (
    <Container shaking={isShaking}>
      <TimeInput />
      <Clock />
    </Container>
  );
}

export default Page;
