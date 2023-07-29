import { styled } from "styled-components";

const DivInput = styled.div`
  label {
    font-weight: 400;
    font-size: 14px;
    color: var(--color-black);
  }

  input {
    width: 100%;
    height: 50px;
    border: solid 1px var(--color-border);
    padding-left: 12px;
    padding-top: 14px;
    padding-bottom: 14px;
    border-radius: 8px;
    margin-top: 14px;
    margin-bottom: 20px;
  }

  input:focus {
    border: solid 1px var(--color-primary);
    outline: none;
    box-shadow: 0 0 5px var(--color-primary);
  }
`;

export default DivInput;
