import Logo from "../Logo";
import { Link } from "react-router-dom";
import { IPropsDisplay } from "./interface";
import MenuSecret from "./styles";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { TransactionContext } from "../../context/TransactionContext";

const MenuHamburguer = ({ open, setOpen }: IPropsDisplay) => {
  const { decoded } = useContext(UserContext);
  const { sumTransactionsApprove } = useContext(TransactionContext);

  return (
    <MenuSecret isOpen={open}>
      <div>
        <Logo logoposition={"hamburguer"} />
        <span onClick={() => setOpen(false)}>X</span>
      </div>
      <ul>
        <li>
          <span>Olá, {decoded.name}</span>
        </li>
        <li>
          <span>
            Seu saldo: R${" "}
            <span className="money">{sumTransactionsApprove}</span>
          </span>
        </li>
      </ul>

      <section>
        <Link to={"/"}>Sair</Link>
      </section>
    </MenuSecret>
  );
};

export default MenuHamburguer;
