import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  padding: 2vh;
  // border: 1px solid black;
  text-align: center;
`;

export const TextInputDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1%;

  input {
    width: 12vh;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 3%;

  input {
    margin-top: 1rem;
    padding: 0.8vh;
  }
`;

/* export const DateDiv = styled.div`
  margin: 10px;
  // border: 2px, dotted, #ffff;
  border-radius: 10px;
  justify-content: center;
  display: flex;
`; */
