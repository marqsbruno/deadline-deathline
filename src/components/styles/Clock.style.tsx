import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  //border: 1px solid black;
`;

export const ClockDiv = styled.div`
  text-align: center;
  //border: 1px solid black;
  // text-shadow: 5px 5px 10px teal;
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
