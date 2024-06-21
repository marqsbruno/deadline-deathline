type MessageType = {
  messageValue: string;
  handleReset: VoidFunction;
};

import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  display: grid;
  justify-content: center;
  h2 {
    margin: auto;
  }

  button {
    margin: auto;
    margin-top: 1vh;
    width: 7vh;
  }
`;

export default function ModalMessage({
  messageValue,
  handleReset,
}: MessageType) {
  return messageValue === "yes" ? (
    <Container>
      <h1>HELL YEAH!!!</h1>
      <h2>Congratulations</h2>
      <button onClick={handleReset}>Go again</button>
    </Container>
  ) : (
    <Container>
      <h2>Well, you got it next time</h2>
      <p>Maybe beg for a new deadline?</p>
      <button onClick={handleReset}>Try Again</button>
    </Container>
  );
}
