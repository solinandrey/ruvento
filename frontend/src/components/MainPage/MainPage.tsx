import TitleBlock from "@components/TitleBlock";
import PortfolioBlock from "@components/PortfolioBlock";
import OperateBlock from "@components/OperateBlock";
import LatestNews from "../LatestNews";

const MainPage = () => {
  return (
    <div className="main-page">
      <TitleBlock />
      <PortfolioBlock />
      <OperateBlock />
      {/* <LatestNews /> */}
    </div>
  );
};

export default MainPage;
