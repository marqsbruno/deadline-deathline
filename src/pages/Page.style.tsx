import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 85%;
  padding: 1.5rem;
  color: #ebf6ff;
  //background: linear-gradient(180deg, #35aafd 70%, #0277ca);
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.app1} 70%,
    ${(props) => props.theme.colors.app2}
  );
  border: 1px solid #ffffff;
  // border-radius: 50px;
  box-shadow: 35px 35px #2d3142;

  @media (max-width: 768px) {
    padding: 1rem;
    width: 75%;
    box-shadow: 30px 30px #2d3142;
  }
`;
// F34616
// F08605 tangerine
//8C1C13 dark red
