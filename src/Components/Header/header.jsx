import './header.scss'
import btc from '../../assets/bitcoin.png'
import eth from '../../assets/eth-white.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
      <div className="header_box">
        <img className="btc" src={btc} alt="btc" />
        <div className="box">
          <h1 className="text">MY WALLET</h1>
          <h1 className="text">MY WALLET</h1>
        </div>
        <img className="eth" src={eth} alt="eth" />
      </div>
      <div className="header_box2">
        <nav>
          <ul>
            <Link className="link" to={'/'}>
              <li>Home</li>
            </Link>
            <Link className="link" to={'/news'}>
              <li>News</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  )
}
