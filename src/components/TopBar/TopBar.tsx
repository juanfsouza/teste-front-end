import './TopBar.scss'

export const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar__container">
        <div className="top-bar__item">
          <img src="/icons/ShieldCheck.svg" alt="icon" width={20} height={20} />
          <span className="top-bar__text">Compra <span className="top-bar__text-bold">100% segura</span></span>
        </div>
        <div className="top-bar__item">
          <img src="/icons/Truck.svg" alt="icon" width={20} height={20} />
          <span className="top-bar__text"><span className="top-bar__text-bold">Frete grátis</span> acima de R$ 200</span>
        </div>
        <div className="top-bar__item">
          <img src="/icons/CreditCard.svg" alt="icon" width={20} height={20} />
          <span className="top-bar__text"><span className="top-bar__text-bold">Parcele</span> suas compras</span>
        </div>
      </div>
    </div>
  )
}

