import { useContext } from "react";
import {
  ContainerContentDesktop,
  MainContentDesktop,
} from "../../styles/Container/style";
import AsideBar from "../Aside";
import { UserContext } from "../../context/UserContext";
import { MainContentDash } from "../../pages/Dashboard/styles";
import CardTransaction from "../Card";
import { TransactionContext } from "../../context/TransactionContext";

const DesktopLayout = () => {
  const { decoded } = useContext(UserContext);
  const { sumTransactionsApprove, transactions } =
    useContext(TransactionContext);

  return (
    <ContainerContentDesktop>
      <AsideBar />
      <MainContentDesktop>
        <header>
          <h1>Olá, {decoded.name}</h1>
          <p>
            Seu saldo: <span>R$ {sumTransactionsApprove}</span>
          </p>
        </header>

        <h2>Minhas transações</h2>
        <MainContentDash>
          {transactions.length === 0 ? (
            <div>Você não possui transações</div>
          ) : (
            <ul>
              {transactions.map((elem) => (
                <CardTransaction
                  key={elem.id}
                  description={elem.description}
                  status={elem.status}
                  value={elem.value}
                  transaction_date={elem.transaction_date}
                />
              ))}
            </ul>
          )}
        </MainContentDash>
      </MainContentDesktop>
    </ContainerContentDesktop>
  );
};

export default DesktopLayout;
