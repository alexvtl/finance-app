import NewsList from '../../Components/NewsList/newslist'
import { useEffect } from 'react'
import { useState } from 'react'
import './news.scss'

export default function News() {
  const url = 'https://crypto-news16.p.rapidapi.com/news/top/10'
  const API_KEY = import.meta.env.VITE_API_KEY
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${API_KEY}`,
      'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com',
    },
  }
  const [Data, setData] = useState([])
  useEffect(() => {
    const FetchNews = async () => {
      let response = await fetch(url, options)
      let result = await response.json()
      console.log(result)
      setData(result)
    }
    FetchNews()
    console.log(Data)
  }, [])
  return (
    <div className="News">
      <NewsList newsList={Data} />
    </div>
  )
}
