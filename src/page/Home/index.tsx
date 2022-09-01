import fetch from '@/utils/fetch'
import { useEffect, useState, Fragment } from 'react';
import { ArticleItem, SectionSpace, ArticleItemProps } from "./components/SectionItem";
import "./style.scss";

function Home() {

  const [articles, setArticles] = useState<ArticleItemProps[]>()

  useEffect(() => {
    fetch.get<ArticleItemProps[]>('articles')
      .then(data => {
        setArticles(data)
      })
  }, [])

  return (
    <div className="home">
      <div className="home__section-list">
        {articles && articles.length ?
          articles.map(((item, index) => (
            <Fragment key={item.id}>
              <ArticleItem {...item} />
              {index !== articles.length - 1 ? <SectionSpace /> : null}
            </Fragment>
          )))
          : null}
      </div>
    </div >
  );
}

export default Home;
