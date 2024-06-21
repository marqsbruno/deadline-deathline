import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: ${(props) => props.theme.width};
  padding: 1.5rem;
  color: #ebf6ff;
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.app1} 70%,
    ${(props) => props.theme.colors.app2}
  );
  transition: width 0.5s ease;
  border: 1px solid #ffffff;
  // border-radius: 50px;
  box-shadow: 35px 35px #2d3142;

  @media (max-width: 768px) {
    padding: 1rem;
    width: 75%;
    box-shadow: 30px 30px #2d3142;
  }
`;

// https://keithjgrant.com/posts/2017/07/transitioning-gradients/
