import { styled } from "styled-components";

const Card = styled.section`
  padding: 20px;
  border-radius: 10px;
  height: 188px;
  border: 1px solid var(--color-border);
  background: #fff;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    height: 188px;
    width: 350px;
  }

  @media (min-width: 1224px) {
    width: 380px;
  }
`;

const DivTitleCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-border-2);

  img {
    cursor: pointer;
  }
`;

const DivText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  span {
    color: var(--color-success);
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0.75px;
  }

  @media (min-width: 375px) {
    h3 {
      font-size: 14px;
    }

    span {
      font-size: 12px;
    }
  }
`;

const DivStatus = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    color: var(--color-primary);
  }
`;

export { Card, DivTitleCard, DivText, DivStatus };
