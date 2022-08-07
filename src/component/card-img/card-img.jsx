import "./card-img.scss";

const CardImg = (props) => {
  return (
    <div className="card-block__img-section">
      <div className="img-section__img-item">
        <img src={props.url} alt="cardImage" />
      </div>
      <div className="img-section__img-item">
        <img src={props.url} alt="cardImage" />
      </div>
      <div className="img-section__img-item">
        <img src={props.url} alt="cardImage" />
      </div>
    </div>
  );
};
export default CardImg;
