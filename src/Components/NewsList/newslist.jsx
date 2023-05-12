import './newslist.scss'
import news from '../../assets/news.png'
import france from '../../assets/france.png'
import { useState } from 'react'

export default function NewsList({ newsList }) {
  const [french, setlanguage] = useState(false)
  return (
    <div className="news_contener">
      <h1 className="topnews_title">
        <img className="news-icon" src={news} />
        TOP NEWS🔥
      </h1>

      <ul className="newslist">
        {newsList?.map((article, index) => (
          <li className="article" key={index}>
            <h2 className="article_title">{article.title}</h2>
            <p className="article_description">{article.description}</p>
            <p className="article_date">
              {article.date.split(' ')[0] +
                ' ' +
                article.date.split(' ')[1] +
                ' ' +
                article.date.split(' ')[2] +
                ' ' +
                article.date.split(' ')[3] +
                ' ' +
                article.date.split(' ')[4]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
