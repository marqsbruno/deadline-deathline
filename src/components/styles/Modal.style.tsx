import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid black;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: "1";
`;

export const ModalDiv = styled.div`
  border: 3px solid ${(props) => props.theme.colors.bg};
  display: grid;
  justify-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); // por algum motivo isso centraliza melhor;
  background-color: #fff;
  color: black;
  width: 300px;
  height: 150px;
  padding: 2vh;
  box-shadow: 10px 10px black;
  font-family: "Bebas Neue", sans-serif;
`;

export const TextDiv = styled.div`
  display: grid;
  justify-content: center;

  h2 {
    margin: auto;
  }
  p {
    margin: auto;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 2vh;

  button {
    margin-top: 1vh;
    width: 7vh;
    font-family: "Bebas Neue", sans-serif;
  }
`;
