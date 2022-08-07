import "./card.scss";
import CardImg from "../card-img/card-img";
import Grides from "./grid/grid";

const Сard = (props) => {
  return (
    <div className="card-block__card-item">
      <CardImg url={props.data.url} />
      <Grides theme={props.theme} gridText={props.data.arrGrid} />
    </div>
  );
};
export default Сard;
