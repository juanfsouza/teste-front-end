import './Header.scss'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <h1 className="header__logo-text">
            <img src="/Logo.svg" alt="Logo" width={139} height={41} />
          </h1>
        </div>
        <div className="header__search">
          <input
            type="text"
            className="header__search-input"
            placeholder="O que você está buscando?"
            aria-label="Buscar produtos"
          />
          <button className="header__search-button" aria-label="Buscar">
            <img src="/icons/MagnifyingGlass.svg" alt="search" width={28} height={28} />
          </button>
        </div>
        <nav className="header__actions" aria-label="actions">
          <button className="header__action" aria-label="Pedidos">
            <img src="/icons/Vector.svg" alt="package" width={24} height={24} />
          </button>
          <button className="header__action" aria-label="Wishlist">
            <img src="/icons/Heart.svg" alt="heart" width={32} height={32} />
          </button>
          <button className="header__action" aria-label="My account">
            <img src="/icons/UserCircle.svg" alt="user" width={32} height={32} />
          </button>
          <button className="header__action" aria-label="Carrinho de compras">
            <img src="/icons/ShoppingCart.svg" alt="shopping cart" width={32} height={32} />
          </button>
        </nav>
      </div>
    </header>
  )
}

