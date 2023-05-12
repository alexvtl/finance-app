import { useEffect } from 'react'
import './home.scss'
import Fetchapi from '../../API/Fetchapi'
import { useState } from 'react'
import Currency from '../../Components/CurrencyLi/currency'
import CryptoList from '../../Components/CryptoList/crypto'
import CommodityList from '../../Components/CommoditylList/commodity'

export default function Home() {
  const [DataCrytpo, setDataCrypto] = useState()
  const [DataCommo, setDataCommo] = useState()
  const [DataDevise, setDataDevise] = useState()
  const [option, setOption] = useState('crypto')
  useEffect(() => {
    const fetchAllprices = async () => {
      let Commodity = await Fetchapi.getCommodity()
      setDataCommo(Commodity)
      let Crypto = await Fetchapi.getCrypto()
      setDataCrypto(Crypto)
      let Devise = await Fetchapi.getDevise()
      setDataDevise(Devise)
    }
    fetchAllprices()
  }, [])
  return (
    <div className="home">
      <select className="option" onChange={(e) => setOption(e.target.value)}>
        <option value={'crypto'} autoFocus>
          Crypto
        </option>
        <option value={'commodity'}>Commodity</option>
        <option value={'devise'}>Devise</option>
      </select>
      <ul className="currency__list">
        {option === 'crypto' &&
          DataCrytpo?.map((element, index) => (
            <CryptoList key={index} devise={element} />
          ))}
        {option === 'commodity' &&
          DataCommo?.map((element, index) => (
            <CommodityList key={index} devise={element} />
          ))}
        {option === 'devise' &&
          DataDevise?.map((element, index) => (
            <Currency key={index} devise={element} />
          ))}
      </ul>
    </div>
  )
}
