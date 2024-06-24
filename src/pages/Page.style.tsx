import styled, { keyframes } from "styled-components";

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

export const Container = styled.div<{ shaking: boolean }>`
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
  animation: ${(props) => (props.shaking ? shake : "none")} 1s;

  @media (max-width: 768px) {
    padding: 1rem;
    width: 75%;
    box-shadow: 30px 30px #2d3142;
  }
`;

// https://keithjgrant.com/posts/2017/07/transitioning-gradients/
