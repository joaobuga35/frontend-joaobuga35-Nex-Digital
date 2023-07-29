import { styled } from "styled-components";

const SideBar = styled.aside`
  padding-top: 46px;
  padding-left: 13px;
  padding-right: 13px;
  width: 250px;
  height: 100vh;
  background-color: var(--color-white);
  border-top-right-radius: 17px;
  border-bottom-right-radius: 17px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);

  div {
    margin-bottom: 52px;
    img {
      width: 153px;
      height: 38.272px;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 36px;

    span {
      color: var(--gray-400);
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    li {
      display: flex;
      align-items: center;
      gap: 14px;
      cursor: pointer;

      img {
        filter: invert(70%) sepia(0%) saturate(0%) hue-rotate(231deg)
          brightness(94%) contrast(94%);
      }
    }

    li:hover > span {
      color: var(--color-primary);
    }

    li:hover > img {
      filter: invert(62%) sepia(100%) saturate(7459%) hue-rotate(233deg)
        brightness(90%) contrast(103%);
    }
  }

  section {
    display: flex;
    align-items: center;
    gap: 19px;
    cursor: pointer;
    margin-top: 225px;

    span {
      color: var(--gray-400);
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  section:hover > span {
    color: var(--color-primary);
  }

  section:hover > img {
    filter: invert(62%) sepia(100%) saturate(7459%) hue-rotate(233deg)
      brightness(90%) contrast(103%);
  }
`;

export { SideBar };
