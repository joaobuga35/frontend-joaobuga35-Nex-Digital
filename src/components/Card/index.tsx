import { Card, DivStatus, DivText, DivTitleCard } from "./styles";

const CardTransaction = () => {
  return (
    <Card>
      <DivTitleCard>
        <DivText>
          <h3>Descrição</h3>
          <span>Valor</span>
        </DivText>
      </DivTitleCard>

      <DivStatus>
        <p>
          Status: <span>OI</span>
        </p>
        <p>
          Data: <span>ola</span>
        </p>
      </DivStatus>
    </Card>
  );
};

export default CardTransaction;
