import { ArticleItem, SectionSpace } from "./components/SectionItem";
import "./style.scss";

function Home() {
  return (
    <div className="home">
      <div className="home__section-list">
        <ArticleItem data={{}} />
        <SectionSpace />
        <ArticleItem data={{}} />
      </div>
    </div >
  );
}

export default Home;
