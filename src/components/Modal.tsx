import { ButtonsDiv, Container, ModalDiv, TextDiv } from "./styles/Modal.style";

type ModalType = {
  isOpen: boolean;
};

// SONO: fazer outro modal que recebe uma props, dependendo da resposta renderiza a mensagem de sim ou de não;

export default function Modal({ isOpen }: ModalType) {
  return isOpen ? (
    <Container>
      <ModalDiv>
        <TextDiv>
          <h2>Time's up!</h2>
          <p>Did you finished your project?</p>
        </TextDiv>
        <ButtonsDiv>
          <button>YEAH!</button>
          <button>NO</button>
        </ButtonsDiv>
      </ModalDiv>
    </Container>
  ) : (
    <></>
  );
}
