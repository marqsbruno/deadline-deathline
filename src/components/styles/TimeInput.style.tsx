import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
`;

export const HeaderDiv = styled.div`
  border: 3px, solid, black;
  border-radius: 10px;
  padding: 20px;
`;

export const TextInputDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1%;

  input {
    width: 12vh;
    border-radius: 8px;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 3%;

  input {
    margin-top: 1rem;
    padding: 10px;
    border-radius: 10px;
  }
`;

export const DateDiv = styled.div`
  margin: 10px;
  border: 2px, dotted, #ffff;
  border-radius: 10px;
  justify-content: center;
  display: flex;
`;
