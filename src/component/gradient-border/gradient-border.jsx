import "./gradient-border.scss";
import arrowWhite from "../../img/card-img/arrowWhite.svg";
import arrowBlack from "../../img/card-img/arrowBlack.svg";

const gradientBorder = (props) => {
  return (
    <div className="gradient-border">
      <a href="/" className="gradient-border__link">
        <span
          className={
            props.textColor === "black"
              ? "link__text-black"
              : "link__text-gradient"
          }
        >
          {props.title}
          {props.textColor === "black" ? (
            <span className="link__arrow-icn">
              {props.theme === "dark" ? (
                <img src={arrowWhite} alt="arrow" />
              ) : (
                <img src={arrowBlack} alt="arrow" />
              )}
            </span>
          ) : null}
        </span>
      </a>
    </div>
  );
};

export default gradientBorder;
