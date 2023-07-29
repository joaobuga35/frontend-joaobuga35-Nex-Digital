import { useContext } from "react";
import {
  ContainerContentDesktop,
  MainContentDesktop,
} from "../../styles/Container/style";
import AsideBar from "../Aside";
import { UserContext } from "../../context/UserContext";
import { MainContentDash } from "../../pages/Dashboard/styles";
import CardTransaction from "../Card";

const DesktopLayout = () => {
  const { name } = useContext(UserContext);
  return (
    <ContainerContentDesktop>
      <AsideBar />
      <MainContentDesktop>
        <header>
          <h1>Olá, {name}</h1>
          <p>
            Seu saldo: <span>R$ 10.000</span>
          </p>
        </header>

        <h2>Minhas transações</h2>
        <MainContentDash>
          <ul>
            <CardTransaction />
          </ul>
        </MainContentDash>
      </MainContentDesktop>
    </ContainerContentDesktop>
  );
};

export default DesktopLayout;
