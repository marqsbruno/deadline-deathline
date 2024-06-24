import styled, { keyframes } from "styled-components";

const shake = keyframes`
  0% { transform:rotate(-3deg); }
  50% { transform:rotate(3deg); }
  100% {transform:rotate(-3deg); }
`;

interface ContainerProps {
  $shaking: boolean;
}

export const Container = styled.div<ContainerProps>`
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
  box-shadow: 35px 35px ${(props) => props.theme.colors.shadow};
  animation: ${(props) => (props.$shaking ? shake : "none")} 0.2s;
  animation-iteration-count: 15;

  @media (max-width: 768px) {
    padding: 1rem;
    width: 75%;
    box-shadow: 30px 30px ${(props) => props.theme.colors.shadow};
  }
`;
