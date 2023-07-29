import { styled } from "styled-components";

const MainContent = styled.main`
  padding-left: 30px;
  padding-right: 30px;
  h2 {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 22px;
  }

  form {
    margin-bottom: 42px;
    .divInputRadio {
      display: flex;
      gap: 15px;

      input {
        cursor: pointer;
      }

      label {
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;

        span {
          margin-top: 8px;
          color: var(--color-primary);
          display: block;
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
        }
        span:hover {
          text-decoration: underline var(--color-primary);
        }
      }
    }
  }

  nav {
    display: none;
  }

  @media (min-width: 414px) {
    section {
      padding-left: 10%;
      padding-right: 10%;
    }
  }

  @media (min-width: 768px) {
    section {
      padding-left: 25%;
      padding-right: 25%;
    }
  }

  @media (min-width: 946px) {
    section {
      padding-left: 30%;
      padding-right: 30%;
    }
  }

  @media (min-width: 1024px) {
    section {
      padding-left: 32.5%;
      padding-right: 32.5%;
    }
  }

  @media (min-width: 1280px) {
    display: flex;
    padding-left: 0px;
    padding-right: 0px;

    section {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-left: 0;
      padding-right: 0;

      figure {
        margin-top: 88px;
        padding-left: 15%;
        padding-right: 15%;
      }

      h2 {
        padding-left: 15%;
        padding-right: 15%;
      }

      form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-left: 15%;
        padding-right: 15%;

        span {
          cursor: pointer;
        }

        button {
          width: 60%;
        }
      }

      nav {
        display: flex;
        align-items: center;
        gap: 33px;
        justify-content: center;
        margin-bottom: 35px;

        p {
          color: var(--gray-400);
          font-size: 15px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }

        a {
          color: var(--color-primary);
          text-decoration: none;
          font-size: 15px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }

        a:hover {
          text-decoration: underline var(--color-primary);
        }
      }
    }
  }
`;

const FormColumn = styled.div`
  flex: 0 0 calc(50% - 10px);
  margin-bottom: 20px;
`;

const TermsContainer = styled.div`
  flex-basis: 100%;
`;

const CenteredButton = styled.div`
  margin-top: 43px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export { MainContent, FormColumn, TermsContainer, CenteredButton };
