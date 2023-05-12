import './currency.scss'
export default function Currency({ devise, state }) {
  console.log(devise)
  return (
    <li className="currency">
      <img className="currency__logo" src={devise.devise[0].logo} alt="icon" />
      <div className="currency__names">
        <h1 className="currency__title">{devise.devise[0].name}</h1>
        <h3>{devise.slug}</h3>
      </div>
      <h2 className="currency__price">{parseFloat(devise.price).toFixed(4)}</h2>
    </li>
  )
}
