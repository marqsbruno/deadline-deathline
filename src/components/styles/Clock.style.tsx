import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  //border: 1px solid black;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 3%;

  button {
    padding: 1vh;
    background-color: aliceblue;
    margin-bottom: 10px;
  }
`;

export const ClockDiv = styled.div`
  text-align: center;
  margin: 12px;
`;

export const Timer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12%;
  margin: 15px;
  // border: 1px solid orange;
`;
