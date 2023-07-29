import Logo from "../Logo";
import { Link } from "react-router-dom";
import { IPropsDisplay } from "./interface";
import MenuSecret from "./styles";

const MenuHamburguer = ({ open, setOpen }: IPropsDisplay) => {
  return (
    <MenuSecret isOpen={open}>
      <div>
        <Logo logoposition={"hamburguer"} />
        <span onClick={() => setOpen(false)}>X</span>
      </div>
      {/* <ul>
        <li>
          <img src={oneToOne} alt="conversas 1:1" />
          <span>Conversas 1:1</span>
        </li>
        <li>
          <img src={task} alt="tasks" />
          <span>Exemplo</span>
        </li>
        <li>
          <img src={talk} alt="conversas gerais" />
          <span>Exemplo</span>
        </li>
        <li>
          <img src={config} alt="configurações" />
          <span>Exemplo</span>
        </li>
      </ul> */}

      <section>
        <Link to={"/"}>Sair</Link>
      </section>
    </MenuSecret>
  );
};

export default MenuHamburguer;
