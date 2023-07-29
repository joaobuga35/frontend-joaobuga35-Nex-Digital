import { useState } from "react";
import Header from "../../components/Header";
import {
  SearchContainer,
  SearchInput,
  SectionTitle,
  MainContentDash,
} from "./styles";
import { FiChevronLeft } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import DesktopLayout from "../../components/DashDesktop";
import CardTransaction from "../../components/Card";
const Dashboard = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <>
      {isDesktopOrLaptop ? (
        <DesktopLayout />
      ) : (
        <>
          {" "}
          <Header />
          {isSearchOpen && (
            <SearchContainer>
              <button onClick={() => setIsSearchOpen(false)}>
                {" "}
                <FiChevronLeft />
              </button>
              <SearchInput type="text" placeholder="Pesquisar..." />
            </SearchContainer>
          )}
          <SectionTitle>
            <h2>Minhas Transações</h2>
          </SectionTitle>
          <MainContentDash>
            <ul>
              <CardTransaction />
            </ul>
          </MainContentDash>
        </>
      )}
    </>
  );
};

export default Dashboard;
