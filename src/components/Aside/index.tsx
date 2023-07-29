import { SideBar } from "./styles";
import Logo from "../Logo";

const AsideBar = () => {
  return (
    <SideBar>
      <div>
        <Logo logoposition={"hamburguer"} />
      </div>

      <section>
        <span>Sair</span>
      </section>
    </SideBar>
  );
};

export default AsideBar;
