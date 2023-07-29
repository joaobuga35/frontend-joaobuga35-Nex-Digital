import Logo from "../Logo";
import { HeaderStyles } from "./styles";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState } from "react";
import MenuHamburguer from "../MenuHamburguer";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderStyles>
      <div>
        <MenuHamburguer open={isOpen} setOpen={setIsOpen} />
        <HiMenuAlt2 onClick={() => setIsOpen(true)} className="icon" />
        <Logo logoposition={"dashboard"} />
      </div>
    </HeaderStyles>
  );
};

export default Header;
