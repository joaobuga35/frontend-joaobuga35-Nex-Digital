import { styled } from "styled-components";

const ContainerContentDesktop = styled.div`
  background-color: #f7f9fb;
  display: flex;
`;

const MainContentDesktop = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 70px;
  padding-left: 70px;

  @media (min-width: 1440px) {
    min-width: 1224px;
    max-width: 1224px;
    margin: 0 auto;
  }
`;

export { ContainerContentDesktop, MainContentDesktop };
