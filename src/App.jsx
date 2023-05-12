import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/home'
import './index.scss'
import Header from './Components/Header/header'
import News from './Pages/News/news'
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/news'} element={<News />} />
      </Routes>
    </BrowserRouter>
  )
}
