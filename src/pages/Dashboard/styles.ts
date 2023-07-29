import styled, { css, keyframes } from "styled-components";
import { IScreenSize } from "./interface";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const SectionTitle = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 34px;
  margin-bottom: 39px;
  padding-left: 16px;
  padding-right: 16px;

  h2 {
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 24.286px;
    letter-spacing: 0.101px;
  }
  img {
    cursor: pointer;
  }
`;

const MainContentDash = styled.div`
  margin-top: 50px;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }

  @media (min-width: 1224px) {
    min-width: 1000px;
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0px;

    ul {
      display: flex;
      justify-content: space-between;
      gap: 10px;
    }
  }
`;

const SearchContainer = styled.div<IScreenSize>`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: var(--color-white);
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  height: 80px;
  position: absolute;
  top: 143px;
  right: 1px;
  z-index: 1;
  animation: ${fadeInAnimation} 0.3s ease-in-out;

  button {
    width: 27px;
    height: 27px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border: 1px solid var(--color-primary);
    background-color: var(--color-white);
    color: var(--color-primary);
    font-size: 16px;
  }

  ${({ inputDesk }) => {
    switch (inputDesk) {
      case "desk":
        return css`
          background-color: #f7f9fb;
          position: static;
          top: 0;
          right: 0;
          z-index: 0;
          width: 350px;

          .icon {
            position: relative;
            left: 43px;
            width: 24px;
            height: 24px;
            color: var(--color-primary);
          }
        `;
    }
  }}
`;

const SearchInput = styled.input`
  border-radius: 60px;
  border: 1px solid #e8e8e8;
  background: #fff;
  width: 90%;
  height: 45px;
  padding: 13px 23px 12px 12px;

  @media (min-width: 1224px) {
    padding-left: 36px;
  }
`;

export { SectionTitle, MainContentDash, SearchContainer, SearchInput };
