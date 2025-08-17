import { useTheme } from "../../context/ThemeContext";
import { PORTFOLIO } from "../../global/Constant";
import { FontSize, FontWeight } from "../../global/GlobalStyle";
import { PrimaryText } from "../PrimaryText";
import "./Navbar.css";
import SocialItems from "./SocialItems";

const Navbar = () => {
  const { themeColors } = useTheme();
  return (
    <nav
      className="navbar"
      style={{
        borderColor: themeColors.border,
        backgroundColor:themeColors.aboutSectionBackground
      }}
    >
      <PrimaryText
        text={PORTFOLIO}
        style={{ fontSize: FontSize.xxLarge, fontWeight: FontWeight.bold }}
      />
      <SocialItems />
    </nav>
  );
};

export default Navbar;
