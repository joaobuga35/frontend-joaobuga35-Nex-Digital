import { styled } from "styled-components";

const MainLogin = styled.main`
  padding-left: 30px;
  padding-right: 30px;

  .figureApple {
    display: none;
  }

  h2 {
    text-align: center;
    margin-bottom: 40px;
  }

  span {
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    color: #476ee6;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }

  span:hover {
    text-decoration: underline var(--color-primary);
  }

  @media (min-width: 414px) {
    form {
      padding-left: 10%;
      padding-right: 10%;
    }
  }

  @media (min-width: 768px) {
    form {
      padding-left: 25%;
      padding-right: 25%;
    }
  }

  @media (min-width: 1024px) {
    form {
      padding-left: 25%;
      padding-right: 25%;
    }
  }

  @media (min-width: 1280px) {
    display: flex;

    padding-left: 0px;
    padding-right: 0px;

    section {
      width: 100%;
      form {
        padding-left: 25%;
        padding-right: 25%;
      }
    }
    .figureApple {
      display: block;

      .imgBackground {
        position: absolute;
      }

      .imgSteve {
        position: relative;
        bottom: -135px;
      }
    }
  }
`;

const DivMissingPassword = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: baseline;

    button {
      width: 185px;
    }
  }
`;

export { MainLogin, DivMissingPassword };
