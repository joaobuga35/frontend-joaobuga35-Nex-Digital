import { styled } from "styled-components";

const HeaderStyles = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 145px;
  border-bottom: solid #d8d8d8;
  border-radius: 0 0 8px 8px;
  padding-left: 10px;
  padding-right: 10px;

  .icon {
    width: 27px;
    height: 40px;
    color: var(--color-primary);
    position: relative;
    cursor: pointer;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export { HeaderStyles };
