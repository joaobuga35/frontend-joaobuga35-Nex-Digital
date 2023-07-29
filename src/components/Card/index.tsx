import { Card, DivStatus, DivText, DivTitleCard } from "./styles";

interface IPropsCard {
  description?: string;
  value?: number;
  status?: string;
  transaction_date?: string;
}

const CardTransaction = ({
  description,
  value,
  status,
  transaction_date,
}: IPropsCard) => {
  return (
    <Card>
      <DivTitleCard>
        <DivText>
          <h3>{description}</h3>
          <span>R$ {value}</span>
        </DivText>
      </DivTitleCard>

      <DivStatus>
        <p>
          Status: <span>{status}</span>
        </p>
        <p>
          Data: <span>{transaction_date}</span>
        </p>
      </DivStatus>
    </Card>
  );
};

export default CardTransaction;
