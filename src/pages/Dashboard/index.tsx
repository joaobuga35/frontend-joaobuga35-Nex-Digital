import { useContext } from "react";
import Header from "../../components/Header";
import { SectionTitle, MainContentDash } from "./styles";
import { useMediaQuery } from "react-responsive";
import DesktopLayout from "../../components/DashDesktop";
import CardTransaction from "../../components/Card";
import { TransactionContext } from "../../context/TransactionContext";
const Dashboard = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const { transactions } = useContext(TransactionContext);
  return (
    <>
      {isDesktopOrLaptop ? (
        <DesktopLayout />
      ) : (
        <>
          {" "}
          <Header />
          <SectionTitle>
            <h2>Minhas Transações</h2>
          </SectionTitle>
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
        </>
      )}
    </>
  );
};

export default Dashboard;
