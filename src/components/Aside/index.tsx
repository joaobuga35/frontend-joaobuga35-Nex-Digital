import { SideBar } from "./styles";
import Logo from "../Logo";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const AsideBar = () => {
  const { remove } = useContext(UserContext);
  return (
    <SideBar>
      <div>
        <Logo logoposition={"hamburguer"} />
      </div>

      <section>
        <span onClick={() => remove()}>Sair</span>
      </section>
    </SideBar>
  );
};

export default AsideBar;
