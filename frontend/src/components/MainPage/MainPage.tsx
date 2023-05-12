import styles from "./MainPage.module.scss";
import TitleBlock from "@components/TitleBlock";
import PortfolioBlock from "@components/PortfolioBlock";
import OperateBlock from "@components/OperateBlock";
import LatestNews from "../LatestNews";
import { useEffect } from "react";

const MainPage = ({ page }: any) => {
  return (
    <div className="main-page">
      <div className={styles.firstScreen}>
        <TitleBlock
          titleRow1={page?.title?.titleRow1 || ''}
          titleRow2={page?.title?.titleRow2 || ''}
          titleRow3={page?.title?.titleRow3 || ''}
          description={page?.title?.description || ''}
        />
        <PortfolioBlock companies={page?.Portfolio?.partner || {}}/>
      </div>
      <OperateBlock
        title={page?.howWeOperate?.title || ''}
        description={page?.howWeOperate?.description || ''}
        imageWithDescription={page?.howWeOperate?.imageWithDescription || ''}
      />
      {/* <LatestNews /> */}
    </div>
  );
};

export default MainPage;
