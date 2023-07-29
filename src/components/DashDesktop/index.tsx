import {
  ContainerContentDesktop,
  MainContentDesktop,
} from "../../styles/Container/style";
import AsideBar from "../Aside";

const DesktopLayout = () => {
  return (
    <ContainerContentDesktop>
      <AsideBar />
      <MainContentDesktop>
        {/* <HeaderDesktop />
        <NavBarDesktop /> */}
        {/* <MainContentDash>
          <section>
            <CardOneToOne />
            <CardOneToOne />
          </section>
          <section>
            <CardTalk />
            <CardNotion />
          </section>
        </MainContentDash> */}
      </MainContentDesktop>
    </ContainerContentDesktop>
  );
};

export default DesktopLayout;
