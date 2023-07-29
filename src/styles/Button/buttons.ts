import { styled } from "styled-components";
import { IPropsButtons } from "./interface";

const ButtonBlue = styled.button<IPropsButtons>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom};
  border-radius: 60px;
  background-color: var(--color-primary);
`;

const ButtonDefault = styled.button<IPropsButtons>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-primary);
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom};
  border-radius: 60px;
  background-color: var(--color-white);
`;

export { ButtonBlue, ButtonDefault };
