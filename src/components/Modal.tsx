import { useContext, useState } from "react";
import { TimeContext } from "../context/TimeContext";
import ModalMessage from "./ModalMessage";
import { ButtonsDiv, Container, ModalDiv, TextDiv } from "./styles/Modal.style";

type ModalType = {
  isOpen: boolean;
  handleReset: VoidFunction;
};

export default function Modal({ isOpen, handleReset }: ModalType) {
  const { setShowMessage, showMessage } = useContext(TimeContext);

  const [messageValue, setMessageValue] = useState("");

  const handleYes = () => {
    setMessageValue("yes");
    setShowMessage(true);
  };

  const handleNo = () => {
    setMessageValue("no");
    setShowMessage(true);
  };

  return isOpen ? (
    <Container>
      <ModalDiv>
        {showMessage ? (
          <ModalMessage messageValue={messageValue} handleReset={handleReset} />
        ) : (
          <>
            <TextDiv>
              <h2>Time's up!</h2>
              <p>Did you finish your project?</p>
            </TextDiv>
            <ButtonsDiv>
              <button value="yes" onClick={handleYes}>
                YEAH!
              </button>
              <button value="no" onClick={handleNo}>
                NO
              </button>
            </ButtonsDiv>
          </>
        )}
      </ModalDiv>
    </Container>
  ) : (
    <></>
  );
}
