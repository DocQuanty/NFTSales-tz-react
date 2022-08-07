import "./description.scss";
const description = (props) => {
  return (
    <section className="description">
      <div className="description__decoration"></div>
      <div className="description__text-description">
        <div className="text-description__title">Upcoming NFT Sales</div>
        <div className="text-description__main-text">
          Disclaimer: Any information provided on this page including the
          featured project(s) should not be considered as financial or
          investment advice. The information is provided as-is with no
          guarantees. We cannot validate the claims or the trustworthiness of
          the projects listed. By using this information you agree to not take
          rarity.tools responsible for the results of your investment decisions
          resulting from it. Please do your own research!
        </div>
        <a href="/" className="text-description__link">
          Submit my project for the list
        </a>
      </div>
    </section>
  );
};
export default description;
