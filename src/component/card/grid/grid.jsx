import "./grid.scss";
import twitter from "../../../img/card-img/twitter.svg";
import discord from "../../../img/card-img/Discord.svg";
import GradientBorder from "../../gradient-border/gradient-border";

const Grides = (props) => {
  return (
    <>
      {props.gridText.map((desc) => (
        <div className="content-block__parent-grid" key={desc.id}>
          <div className="parent-grid__title">
            <h2 className="title__grid-title">{desc.title}</h2>
            <div className="grid-title__description">
              {desc.titleDescription}
            </div>
          </div>
          <div className="parent-grid__link-connection">
            <div className="link-connection__icon-website link-connection__all-icons">
              <GradientBorder
                theme={props.theme}
                textColor="black"
                title="Website"
                fontSize="14px"
                arrow="true"
              />
            </div>
            <div className="link-connection__icon-twitter link-connection__all-icons">
              <a href="/">
                <img src={twitter} alt="" />
              </a>
            </div>
            <div className="link-connection__icon-discord link-connection__all-icons">
              <a href="/">
                <img src={discord} alt="" />
              </a>
            </div>
          </div>

          <div className="parent-grid__price">
            <div className="price-wrapper">
              <div className="presale-wrapper">
                <span className="presale-wrapper__pre-sale">Presale:</span>
                <span className="presale-wrapper__pre-value">
                  {`${desc.preSale} ETH`}
                </span>
              </div>
              <div className="sale-wrapper">
                <span className="sale-wrapper__sale">Sale:</span>
                <span className="sale-wrapper__sale-value">
                  {`${desc.sale} ETH`}
                </span>
              </div>
            </div>
            <div className="price__total">{`${desc.total} total`}</div>
          </div>

          <div className="parent-grid__date-sale">
            {desc.preSaleTime === "" ? (
              <div className="date-sale__pre-sale"></div>
            ) : (
              <div className="date-sale__pre-sale">
                {`Presale: ${desc.preSaleTime}`}
              </div>
            )}
            <div className="date-sale__sale">{` Sale: ${desc.saleTime}`}</div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Grides;
