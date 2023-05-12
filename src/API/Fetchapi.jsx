import bitcoin from '../assets/bitcoin-icon.png'
import eth from '../assets/eth-icon.png'
import xmr from '../assets/monero.png'
import atom from '../assets/atom.png'
import gold from '../assets/gold.png'
import silver from '../assets/silver.png'
import eur from '../assets/euro.png'
import gbp from '../assets/england.png'
import aed from '../assets/aed.png'
import canada from '../assets/canada.png'
import china from '../assets/china.png'
import russia from '../assets/russia.png'
import japan from '../assets/japan.png'
import turkey from '../assets/turkey.png'
const API_KEY = import.meta.env.VITE_API_KEY
const optionsCrypto = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${API_KEY}`,
    'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
  },
}
const fetchCrypto = async (endpoint) => {
  return await fetch(
    `https://binance43.p.rapidapi.com/avgPrice?symbol=${endpoint}`,
    optionsCrypto
  ).then((res) => res.json())
}

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${API_KEY}`,
    'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com',
  },
}
const fetchPrice = async (endpoint) => {
  return await fetch(
    `https://twelve-data1.p.rapidapi.com/currency_conversion?symbol=${endpoint}&amount=1`,
    options
  ).then((res) => res.json())
}
const optionsdevise = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${API_KEY}`,
    'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
  },
}
const fetchDevise = async (endpoint) => {
  return await fetch(
    `https://currency-exchange.p.rapidapi.com/exchange?${endpoint}&q=1.0`,
    optionsdevise
  ).then((res) => res.json())
}
export default {
  getCrypto: async () => {
    return [
      {
        tag: 'crypto',
        slug: 'BTC/USD',
        devise: [
          { name: 'bitcoin', code: 'BTC', logo: `${bitcoin}`, symbol: '₿' },
          { name: 'dollars', code: 'USD', symbol: '$' },
        ],
        price: await fetchCrypto('BTCUSDT'),
      },
      {
        tag: 'crypto',
        slug: 'ETH/USD',
        devise: [
          { name: 'ethereum', code: 'ETH', logo: `${eth}`, symbol: 'ETH' },
          { name: 'dollars', code: 'USD', symbol: '$' },
        ],
        price: await fetchCrypto('ETHUSDT'),
      },
      {
        tag: 'crypto',
        slug: 'XMR/USD',
        devise: [
          { name: 'monero', code: 'XMR', logo: `${xmr}`, symbol: 'XMR' },
          { name: 'dollars', code: 'USD', symbol: '$' },
        ],
        price: await fetchCrypto('XMRUSDT'),
      },
      {
        tag: 'crypto',
        slug: 'ATOM/USD',
        devise: [
          { name: 'atom', code: 'ATOM', logo: `${atom}`, symbol: 'ATOM' },
          { name: 'dollars', code: 'USD', symbol: '$' },
        ],
        price: await fetchCrypto('ATOMUSDT'),
      },
    ]
  },
  getDevise: async () => {
    return [
      {
        tag: 'devise',
        slug: 'EUR/USD',
        devise: [
          { name: 'eur', code: 'EUR', logo: `${eur}`, symbol: 'EUR' },
          { name: 'dollars', code: 'USD', symbol: '$' },
        ],
        price: await fetchDevise('from=EUR&to=USD'),
      },
      {
        tag: 'devise',
        slug: 'GBP/USD',
        devise: [
          { name: 'livre', code: 'GBP', logo: `${gbp}`, symbol: 'GBP' },
          { name: 'dollars', code: 'USD', symbol: '$' },
        ],
        price: await fetchDevise('from=GBP&to=USD'),
      },
      {
        tag: 'devise',
        slug: 'AED/USD',
        devise: [
          { name: 'dinars', code: 'AED', logo: `${aed}`, symbol: 'AED' },
          { name: 'dollars', code: 'USD', symbol: '$' },
        ],
        price: await fetchDevise('from=AED&to=USD'),
      },
      {
        tag: 'devise',
        slug: 'CAD/USD',
        devise: [
          {
            name: 'dollars Canadien',
            code: 'CAD',
            logo: `${canada}`,
            symbol: 'CAD',
          },
          { name: 'dollars', code: 'USD', symbol: '$' },
        ],
        price: await fetchDevise('from=CAD&to=USD'),
      },
      {
        tag: 'devise',
        slug: 'JPY/USD',
        devise: [
          {
            name: 'yen japonais',
            code: 'JPY',
            logo: `${japan}`,
            symbol: 'JPY',
          },
          { name: 'dollars', code: 'USD', symbol: '$' },
        ],
        price: await fetchDevise('from=JPY&to=USD'),
      },
      {
        tag: 'devise',
        slug: 'CNY/USD',
        devise: [
          { name: 'yen chinois', code: 'CNY', logo: `${china}`, symbol: 'CNY' },
          { name: 'dollars', code: 'USD', symbol: '$' },
        ],
        price: await fetchDevise('from=CNY&to=USD'),
      },
      {
        tag: 'devise',
        slug: 'RUB/USD',
        devise: [
          {
            name: 'rouble russe',
            code: 'RUB',
            logo: `${russia}`,
            symbol: 'RUB',
          },
          { name: 'dollars', code: 'USD', symbol: '$' },
        ],
        price: await fetchDevise('from=RUB&to=USD'),
      },
      {
        tag: 'devise',
        slug: 'TRY/USD',
        devise: [
          { name: 'Livre turc', code: 'TRY', logo: `${turkey}`, symbol: 'TRY' },
          { name: 'dollars', code: 'USD', symbol: '$' },
        ],
        price: await fetchDevise('from=TRY&to=USD'),
      },
    ]
  },
  getCommodity: async () => {
    return [
      {
        tag: 'commodity',
        slug: 'GOLD/USD',
        devise: [
          { name: 'gold', code: 'GOLD', logo: `${gold}`, symbol: 'GOLD' },
          { name: 'dollars', code: 'USD', symbol: '$' },
        ],
        price: await fetchPrice('XAU%2FUSD'),
      },
      {
        tag: 'commodity',
        slug: 'SILVER/USD',
        devise: [
          {
            name: 'silver',
            code: 'SILVER',
            logo: `${silver}`,
            symbol: 'SILVER',
          },
          { name: 'dollars', code: 'USD', symbol: '$' },
        ],
        price: await fetchPrice('XAG%2FUSD'),
      },
    ]
  },
}
