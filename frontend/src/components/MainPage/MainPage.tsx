import TitleBlock from "@components/TitleBlock";
import PortfolioBlock from "@components/PortfolioBlock";
import OperateBlock from "@components/OperateBlock";
import LatestNews from "../LatestNews";
import { MainTitleBlock } from "@src/types";
interface Props {
  titleBlock: MainTitleBlock;
}

const MainPage = ({ titleBlock }: Props) => {
  return (
    <div className="main-page">
      <TitleBlock
        title={titleBlock.title}
        description={titleBlock.description}
        linkText={titleBlock.linkText}
      />
      <PortfolioBlock />
      <OperateBlock />
      <LatestNews />
    </div>
  );
};

export default MainPage;
