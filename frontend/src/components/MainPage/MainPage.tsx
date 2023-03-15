import styles from "./MainPage.module.scss";
import TitleBlock from "@components/TitleBlock";
import PortfolioBlock from "@components/PortfolioBlock";
import OperateBlock from "@components/OperateBlock";
import LatestNews from "../LatestNews";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className={styles.firstScreen}>
        <TitleBlock />
        <PortfolioBlock />
      </div>
      <OperateBlock />
      {/* <LatestNews /> */}
    </div>
  );
};

export default MainPage;
