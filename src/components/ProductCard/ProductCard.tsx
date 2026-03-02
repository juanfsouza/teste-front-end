import type { Product } from '../../types'
import './ProductCard.scss'

interface ProductCardProps {
  product: Product
  onClick: (product: Product) => void
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(price)
  }

  const originalPrice = product.price * 1.1
  const installments = product.price / 2

  return (
    <article className="product-card">
      <div className="product-card__image" onClick={() => onClick(product)}>
        <img
          src={product.photo}
          alt={product.name}
          width={280}
          height={220}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="product-card__content">
        <h3 className="product-card__name">{product.name}</h3>
        <div className="product-card__pricing">
          <span className="product-card__original-price">
            {formatPrice(originalPrice)}
          </span>
          <span className="product-card__current-price">
            {formatPrice(product.price)}
          </span>
        </div>
        <p className="product-card__installments">
          ou 2x de {formatPrice(installments)} sem juros
        </p>
        <p className="product-card__shipping">Frete grátis</p>
        <button
          className="product-card__button"
          onClick={() => onClick(product)}
        >
          COMPRAR
        </button>
      </div>
    </article>
  )
}

