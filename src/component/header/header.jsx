import "./header.scss";

import Logo from "../../img/logo/NFT.svg";
import themeMoon from "../../img/btn-theme/moon.svg";
import themeSun from "../../img/btn-theme/sun.svg";
import GradientBorder from "../gradient-border/gradient-border";

const Header = (props) => {
  const handlerThemeLight = () => {
    props.setTheme("light");
  };
  const handlerThemeDark = () => {
    props.setTheme("dark");
  };
  return (
    <header>
      <div className="header-container">
        <a href="/" className="header-logo">
          <img className="header-logo__img" src={Logo} alt="logo" />
          <span className="header-logo__name">stat.tools</span>
        </a>
        <div className="menu">
          <div className="menu__contact-us">
            <a href="/">Contact us</a>
          </div>
          <div className="menu__btn-theme">
            {props.theme === "dark" ? (
              <img src={themeSun} alt="icon-sun" onClick={handlerThemeLight} />
            ) : (
              <img src={themeMoon} alt="icon-moon" onClick={handlerThemeDark} />
            )}
          </div>
          <GradientBorder title="List my project" />
        </div>
      </div>
    </header>
  );
};
export default Header;
