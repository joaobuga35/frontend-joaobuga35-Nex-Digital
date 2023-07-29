import { IPositionProps } from "./interface";
import FigureLogo from "./styles";
import { DiDotnet } from "react-icons/di";

const Logo = ({ top, bottom, leftP, rightP, logoposition }: IPositionProps) => {
  return (
    <FigureLogo
      top={top}
      bottom={bottom}
      leftP={leftP}
      rightP={rightP}
      logoposition={logoposition}
    >
      <DiDotnet className="imgLogo" />
    </FigureLogo>
  );
};

export default Logo;
