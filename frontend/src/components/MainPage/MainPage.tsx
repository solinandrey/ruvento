import styles from "./MainPage.module.scss";
import TitleBlock from "@components/TitleBlock";
import PortfolioBlock from "@components/PortfolioBlock";
import OperateBlock from "@components/OperateBlock";
import LatestNews from "../LatestNews";
import { useEffect } from "react";

const MainPage = ({ page }: any) => {
  useEffect(() => {
    console.log(page, "page");
  }, []);
  return (
    <div className="main-page">
      <div className={styles.firstScreen}>
        <TitleBlock
          titleRow1={page?.title?.titleRow1 || ""}
          titleRow2={page?.title?.titleRow2 || ""}
          titleRow3={page?.title?.titleRow3 || ""}
          description={page?.title?.description || ""}
        />
        <PortfolioBlock
          companies={
            page?.Portfolio?.partners?.data[0]?.attributes?.partner || {}
          }
        />
      </div>
      <OperateBlock
        title={page?.howWeOperate?.title || ""}
        description={page?.howWeOperate?.description || ""}
        imageWithDescription={page?.howWeOperate?.imageWithDescription || ""}
      />
      {page.latestNews?.articles?.data?.length ? (
        <LatestNews articles={page.latestNews.articles.data} />
      ) : null}
    </div>
  );
};

export default MainPage;
