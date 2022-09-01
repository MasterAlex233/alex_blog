import fetch from '@/utils/fetch'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { ArticleItemProps } from '../Home/components/SectionItem';
import Markdown from 'react-markdown';
import "./style.scss";


function Article() {

  const params = useParams()
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    fetch.get<ArticleItemProps>(`articles/${params.articleId}`)
      .then(data => {
        return fetch.getStatic(require('../../static/article/test.md'))
      })
      .then(data => {
        setContent(data)
      })
  }, [])

  return (
    <div className="article">
      <div className="article__main">
        <Markdown>{content}</Markdown>
      </div>
    </div >
  );
}

export default Article;
