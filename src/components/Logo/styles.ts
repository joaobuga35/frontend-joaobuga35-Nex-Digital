import styled, { css } from "styled-components";
import { IPositionProps } from "./interface";

const FigureLogo = styled.figure<IPositionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom};
  padding-left: ${(props) => props.leftP};
  padding-right: ${(props) => props.rightP};

  .imgLogo {
    width: 190px;
    height: 200px;
    color: var(--color-primary);
  }

  ${({ logoposition }) => {
    switch (logoposition) {
      case "register":
        return css`
          background-color: var(--color-primary);
          border: 2px solid var(--color-primary);
          color: #fff;

          :hover {
            filter: brightness(0.9);
          }
        `;
      case "login":
        return css`
          display: flex;
          justify-content: center;
          align-items: center;

          :hover {
            filter: brightness(0.9);
          }
        `;
      case "dashboard":
        return css`
          width: 153px;
          height: 38px;
          img {
            width: 100%;
            height: 100%;
          }
        `;
      case "hamburguer":
        return css`
          width: 153px;
          height: 38px;
          img {
            width: 100%;
            height: 100%;
          }
        `;
    }
  }}
`;

export default FigureLogo;
