import Clock from "../components/Clock";
import TimeInput from "../components/TimeInput";
import { Container } from "./Page.style";

function Page() {
  return (
    <Container>
      <TimeInput />
      <Clock />
    </Container>
  );
}

export default Page;
