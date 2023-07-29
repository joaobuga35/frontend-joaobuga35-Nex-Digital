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

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 20px;

    h1 {
      color: var(--color-primary);
    }

    p {
      font-size: 20px;

      span {
        color: var(--color-success);
      }
    }
  }
  h2 {
    margin-top: 70px;
  }

  @media (min-width: 1440px) {
    min-width: 1224px;
    max-width: 1224px;
    margin: 0 auto;
  }
`;

export { ContainerContentDesktop, MainContentDesktop };
